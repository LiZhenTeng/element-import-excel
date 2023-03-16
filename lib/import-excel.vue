<template>
  <el-dialog :title="title" :model-value="visible" v-if="visible" :width="dialogWidth" @close="handlClose"
    :close-on-click-modal="false">
    <el-steps :active="currentStep" finish-status="success">
      <el-step title="上传文件" />
      <el-step title="确认数据" />
      <el-step title="完成" />
    </el-steps>
    <import-upload :fields="fieldsCopy" :tips="tips" @upload="handleUpload" v-if="currentStep === 1" />
    <import-data :append="append" :fields="fieldsCopy" :formatter="formatter" :request-fn="requestFn" :rules="rules"
      :table-data="tableData" :scroll="scroll" :can-next="canNext" @pre="handleStep3Pre" v-if="currentStep === 2" />
    <br>
    <import-finish @finish="handleFinish" v-if="currentStep === 3" :show-finish-result="showFinishResult"
      :data-source-columns="finishDataColumns" :data-source="finishDataSource" />
  </el-dialog>
</template>
<script lang="ts" setup>
import { provide, ref, defineEmits } from 'vue';
import { ElDialog, ElSteps, ElStep } from 'element-plus'
import type { Fields, Column, ImportExcelProps } from './typings'
import ImportUpload from "./import-upload.vue";
import ImportData from "./import-data.vue";
import ImportFinish from "./import-finish.vue";
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/es/components/steps/style/css'
import 'element-plus/es/components/step/style/css'

const {
  scroll,
  fields,
  filePath,
  requestFn,
  returnFileName,
  visible,
  tips,
  title,
  append,
  rules,
  formatter,
  dialogWidth,
  showFinishResult,
  finishDataColumns,
  finishDataSource
} = withDefaults(defineProps<ImportExcelProps>(), { scroll: 1500, visible: false, dialogWidth: '80%', showFinishResult: false })

const emit = defineEmits(['goPre', 'close', 'finish'])
const tableData = ref<Array<Fields>>([])
const columns = ref<Array<Column>>([]);
const currentStep = ref(1);
const canNext = ref(true);
const fieldsCopy = ref<Fields>({});

fieldsCopy.value = fields;

const handleUpload = (c: Array<Column>, t: Array<Fields>, fileName: string, f: Fields) => {
  fieldsCopy.value = f;
  columns.value = c;
  tableData.value = t;
  if (returnFileName) {
    returnFileName(fileName);
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
