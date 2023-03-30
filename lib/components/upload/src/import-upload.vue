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
import { excel } from '../../../utils/excel';
import { inject, ref } from 'vue'
import { ElNotification, ElAlert, ElUpload, ElIcon } from 'element-plus';
import type { UploadUserFile } from 'element-plus';
import { UploadFilled } from '@element-plus/icons-vue'
import { importUploadProps, importUploadEmits } from './import-upload'
import { ArrayToObject, changeDatakeyAndFilter, checkTableTitle, checkType } from '../../../utils';
import { Fields } from '../../home/src/import-view';
import 'element-plus/es/components/notification/style/css'
import 'element-plus/es/components/alert/style/css'
import 'element-plus/es/components/upload/style/css'
import 'element-plus/es/components/icon/style/css'


const props = defineProps(importUploadProps)
const emit = defineEmits(importUploadEmits)
const goNext: Function | undefined = inject<Function>('goNext')

const fileList = ref<Array<UploadUserFile>>([]);
const isLoading = ref(false);
const fields = ref<Fields>({});

const fakeRequeset = () => {
    fileList.value = [];
}

const beforeUpload = async (file: File) => {
    if (isLoading.value) return;
    if (!checkType(file)) {
        ElNotification.error({ title: "上传出错了", message: `文件：${file.name} 文件类型错误，请在模板文件上修改后上传` });
        return false;
    }
    isLoading.value = true;
    try {
        let excelData = await excel(file);
        if (!excelData) {
            ElNotification.error({ title: '上传出错了', message: '文件读取出错，请重新上传。' });
            return false;
        }
        const { columns, tableData } = excelData;

        if (!(columns.length && tableData.length)) {
            ElNotification.error({ title: '上传出错了', message: '请打开模板文件, 并填写数据' });
        } else {
            fields.value =
                Object.keys(props.fields).length > 0
                    ? props.fields
                    : ArrayToObject(columns);

            let isVaild = checkTableTitle(columns, props.fields);
            emit(
                "upload",
                columns,
                changeDatakeyAndFilter(tableData, props.fields),
                file.name,
                fields.value
            );
            if (goNext)
                goNext(isVaild);
        }
    } catch (e: any) {
        ElNotification.error({ title: '上传出错了', message: e.message });
    } finally {
        isLoading.value = false;
    }
    return false;
}

</script>