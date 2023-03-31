<template>
    <div>
        <div v-if="tips && tips.length" style="margin-top: 20px">
            <el-alert :type="item?.type || 'warning'" :key="index" v-for="(item, index) of tips"
                :title="item?.title || `${index + 1}、${item.description}`" show-icon :closable="item?.closable || false">
            </el-alert>
        </div>
        <div style="margin-top: 20px;text-align: center;">
            <el-upload drag accept=".xls,.xlsx" action="/" :before-upload="beforeUpload" :fileList="fileList"
                :customRequest="fakeRequeset" :show-file-list="false">
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                </div>
            </el-upload>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { readExcel } from '../../../utils/excel';
import { inject, ref } from 'vue'
import { ElNotification, ElAlert, ElUpload, ElIcon } from 'element-plus';
import type { UploadUserFile } from 'element-plus';
import { UploadFilled } from '@element-plus/icons-vue'
import { importUploadProps, importUploadEmits } from './import-upload'
import { changeDatakeyAndFilter, checkTableTitle, checkType } from '../../../utils';
import 'element-plus/es/components/notification/style/css'
import 'element-plus/es/components/alert/style/css'
import 'element-plus/es/components/upload/style/css'
import 'element-plus/es/components/icon/style/css'


const props = defineProps(importUploadProps)
const emit = defineEmits(importUploadEmits)
const goNext: Function | undefined = inject<Function>('goNext')

const fileList = ref<Array<UploadUserFile>>([]);
const isLoading = ref(false);

const fakeRequeset = () => {
    fileList.value = [];
}

const beforeUpload = async (file: File) => {
    if (isLoading.value) return;
    if (!checkType(file)) {
        ElNotification.error({ title: "Upload error", message: `file：${file.name} the file type is incorrect. Please modify the template file and upload it` });
        return false;
    }
    isLoading.value = true;
    try {
        let excelData = await readExcel(file, props.sheetName);
        if (!excelData) {
            ElNotification.error({ title: 'Upload error', message: 'Error reading file, please upload again.' });
            return false;
        }
        if (Object.prototype.toString.call(Object.values(excelData)[0]) === '[object Array]') {

            const { columns, tableData } = excelData as Record<string, Array<any>>;

            if (!(columns.length && tableData.length)) {
                ElNotification.error({ title: 'Upload error', message: 'Please open the template file and fill in the data' });
            } else {
                
                let isVaild = checkTableTitle(columns, props.fields);
                emit(
                    "upload",
                    columns,
                    changeDatakeyAndFilter(tableData, props.fields),
                    file.name     
                );
                if (goNext)
                    goNext(isVaild);
            }
        } else {
            console.log(excelData)
        }
    } catch (e: any) {
        ElNotification.error({ title: 'Upload error', message: e.message });
    } finally {
        isLoading.value = false;
    }
    return false;
}

</script>