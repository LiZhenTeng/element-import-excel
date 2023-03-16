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
import ImportUpload from "./import-upload.vue";
import ImportData from "./import-data.vue";
import ImportFinish from "./import-finish.vue";
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/es/components/steps/style/css'
import 'element-plus/es/components/step/style/css'

const props = defineProps({
  scroll: {
    type: Number,
    required: false,
    default: () => 1500,
  },
  filePath: {
    type: String,
    required: false,
  },
  requestFn: {
    type: Function,
    required: true,
  },
  returnFileName: {
    type: Function,
    required: false,
  },
  fields: {
    type: Object,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
  title: String,
  append: Object,
  tips: Array,
  rules: Object,
  formatter: [Object, Function],
  dialogWidth: {
    type: String,
    default: "80%",
  },
  showFinishResult: {
    type: Boolean,
    default: false
  },
  finishDataColumns: {
    required: false,
    type: Array<{ [key: string]: any }>,
  },
  finishDataSource: {
    required: false,
    type: Array<{ [key: string]: any }>,
  }
})

const emit = defineEmits(['goPre', 'close', 'finish'])
const tableData = ref<Array<any>>([])
const columns = ref<Array<any>>([]);
const currentStep = ref(1);
const canNext = ref(true);
const fieldsCopy = ref<{ [key: string]: any }>({});

fieldsCopy.value = props.fields;

const handleUpload = (c: Array<any>, t: Array<any>, fileName: string, f: { [key: string]: any }) => {
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
