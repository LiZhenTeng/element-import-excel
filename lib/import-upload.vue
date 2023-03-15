<template>
    <div>
        <div v-if="tips && tips.length" style="margin-top: 20px">
            <el-alert type="warning" :key="index" v-for="(item, index) of tips" :title="index + 1 + '、' + item" show-icon
                :closable="false">
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
import { excel } from './utils/excel';
import { inject, ref } from 'vue'
import { ElNotification } from 'element-plus';
import { UploadFilled } from '@element-plus/icons-vue'

const props = defineProps({
    tips: Array<any>,
    fields: {
        type: Object,
        required: true,
    }
})
const emit = defineEmits(['upload'])
const goNext: Function | undefined = inject('goNext')

const fileList = ref([]);
const isLoading = ref(false);
const fields = ref<{ [key: string]: any }>({});

const fakeRequeset = () => {
    fileList.value = [];
}
const checkType = (file: File) => {
    const fileExt = file.name.split(".").pop()?.toLocaleLowerCase();
    const extArr = ["xlsx", "xls", "csv"];
    if (!fileExt) throw new Error("未解析文件后缀")
    return extArr.includes(fileExt);
}
const checkTableTitle = (columns: Array<any>, fields: Object) => {
    const titles = Object.values(fields);
    let isVaild = true;
    titles.forEach((item) => {
        if (!columns.includes(item)) {
            isVaild = false;
            ElNotification.error({ title: '数据出错了', message: item + '列未找到' })
        }
    });
    return isVaild;
}

const changeDatakeyAndFilter = (arr: Array<any>, columns:Array<any>) => {
    const fields = props.fields;
    return arr.map((item: { [key: string]: any }) => {
        var res: { [key: string]: any } = {};
        for (const key in fields) {
            res[key] = item[fields[key]];
        }
        return res;
    });
}
const arrToObj = (arr: Array<any>) => {
    var result: { [key: string]: any } = {};
    arr.forEach((item: string) => {
        let key = item;
        let value = item;
        result[key] = value;
    });
    return result;
}


const beforeUpload = async (file: File) => {
    if (isLoading.value) return;
    if (!checkType(file)) {
        ElNotification.error({ title: "上传出错了", message: `文件：${file.name} 文件类型错误，请在模板文件上修改后上传` });
        return false;
    }

    isLoading.value = true;
    try {
        let excelData: { columns: Array<any>, tableData: Array<any> } | null = await excel(file);
        if (!excelData) {
            window.console.error(
                "excel解析异常，可能是时间格式为“X月X日”导致的。"
            );
            ElNotification.error({ title: '上传出错了', message: '文件读取出错，可能是时间格式为“X月X日”导致的，请重新上传。' });
            return false;
        }
        const { columns, tableData } = excelData;

        if (!(columns.length && tableData.length)) {
            ElNotification.error({ title: '上传出错了', message: '请打开模板文件, 并填写数据' });
        } else {
            fields.value =
                Object.keys(props.fields).length > 0
                    ? props.fields
                    : arrToObj(columns);

            let isVaild = checkTableTitle(columns, props.fields);
            console.log(goNext)
            emit(
                "upload",
                columns,
                changeDatakeyAndFilter(tableData, columns),
                file.name,
                fields.value
            );
            if (goNext)
                goNext(isVaild);
        }
    } catch (e:any) {
        ElNotification.error({ title: '上传出错了', message: e.message });
    } finally {
        isLoading.value = false;
    }
    return false;
}

</script>