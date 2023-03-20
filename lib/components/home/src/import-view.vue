<template>
  <el-dialog :title="title" :model-value="visible" v-if="visible" :width="dialogWidth" @close="handlClose"
    :close-on-click-modal="false">
    <el-steps :active="currentStep" finish-status="success">
      <el-step title="上传文件" />
      <el-step title="确认数据" />
      <el-step title="完成" />
    </el-steps>
    <import-upload :fields="fieldsCopy" :tips="tips" @upload="handleUpload" v-if="currentStep === 1" />
    <import-data :append="append" :fields="fieldsCopy" :formatter="formatter" :rules="rules" :table-data="tableData"
      :scroll="scroll" :can-next="canNext" @pre="handleStep3Pre" v-if="currentStep === 2" :read-success="readSuccess" />
    <br>
    <import-finish @finish="handleFinish" v-if="currentStep === 3" :show-finish-result="showFinishResult"
      :data-source-columns="finishDataColumns" :data-source="finishDataSource" />
  </el-dialog>
</template>
<script lang="ts" setup>
import { provide, ref, defineEmits, defineProps } from 'vue';
import { ElDialog, ElSteps, ElStep } from 'element-plus'
import { Columns, Data, Fields, importViewEmits, importViewProps } from './import-view'
import ImportUpload from "../../upload/src/import-upload.vue";
import ImportData from "../../data";
import ImportFinish from "../../finish";
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/es/components/steps/style/css'
import 'element-plus/es/components/step/style/css'

const props = defineProps(importViewProps)
const emit = defineEmits(importViewEmits)
defineOptions({
  name: 'ImportView',
})

const tableData = ref<Data>([])
const columns = ref<Columns>([]);
const currentStep = ref(1);
const canNext = ref(true);
const fieldsCopy = ref<Fields>({});

fieldsCopy.value = props.fields;

const handleUpload = (c: Columns, t: Data, fileName: string, f: Fields) => {
  fieldsCopy.value = f;
  columns.value = c;
  tableData.value = t;
  if (props.returnFileName) {
    props.returnFileName(fileName);
  }
}
const initData = () => {
  tableData.value = [];
  columns.value = [];
  currentStep.value = 1;
}
const handlClose = () => {
  initData();
  emit("close");
}
const handleFinish = () => {
  handlClose();
  emit("finish");
}
const nextStep = (c = true) => {
  currentStep.value++;
  canNext.value = c;
}
const preStep = () => {
  currentStep.value--;
}
const handleStep3Pre = () => {
  tableData.value = [];
  columns.value = [];
  preStep();
}

provide('goPre', preStep);
provide('goNext', nextStep);

</script>
