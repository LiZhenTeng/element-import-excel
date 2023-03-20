<template>
    <div>
        <!-- 错误显示表 -->
        <template v-if="errorTableData.length">
            <h1 style="color: #f56c6c;margin-top: 20px;">错误信息展示</h1>
            <el-table :data="errorTableData" :border="true" style="width: 100%;margin-bottom: 20px;" row-key="row">
                <el-table-column label="错误行号" column-key="row" prop="row" :width="180"></el-table-column>
                <el-table-column label="错误原因" column-key="reason" prop="reason"></el-table-column>
            </el-table>
        </template>
        <!-- 数据列表 -->
        <h1 style="margin-top: 20px;">数据列表</h1>
        <el-table v-loading="isLoading" :data="tableData" :border="true" style="width: 100%">
            <el-table-column :align="'center'" type="index" label="行号" column-key="key" prop="key" width="50" />
            <template v-for="(label, field) of fields">
                <el-table-column :label="label" :prop="field.toString()" :align="'left'" header-align="center">
                    <!-- 自定义错误显示 -->
                    <template #default="scope">
                        <el-tooltip :content="errorData[scope.$index][field]" class="item" effect="dark" placement="top"
                            v-if="errorData[scope.$index] && errorData[scope.$index][field]">
                            <div>{{ scope.row[field] || "&nbsp;" }}</div>
                        </el-tooltip>
                        <template v-else>{{ scope.row[field] }}</template>
                    </template>
                </el-table-column>
            </template>
        </el-table>
        <br>
        <div>
            <el-space>
                <el-button @click="handlePre" size="large" type="primary">重新上传</el-button>
                <el-button type="primary" size="large" :loading="isLoading" @click="handleRequest"
                    :disabled="!canNext">下一步</el-button>
            </el-space>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { inject, ref, computed, onMounted, Prop } from 'vue';
import { ElNotification, ElMessage, ElTable, ElTableColumn, ElSpace, ElButton, ElTooltip, vLoading } from 'element-plus'
import Schema from 'async-validator';
import { importDataProps, importDataEmits, ErrorData } from './import-data';
import 'element-plus/es/components/notification/style/css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/tooltip/style/css'
import 'element-plus/es/components/loading/style/css'
import { Data } from '../../home/src/import-view';

const props = defineProps(importDataProps);
const emit = defineEmits(importDataEmits);

const goNext: Function | undefined = inject('goNext')

const isLoading = ref(false)
const errorData = ref<ErrorData>({});

const errorTableData = computed(() => {
    const e = errorData.value
    const errorTableData = new Array<ErrorData>();
    for (const index in e) {
        var messageArr = new Array();
        for (const field in e[index]) {
            if (e[index][field]) {
                messageArr.push(e[index][field])
            }
        }
        if (messageArr.length > 0) {
            errorTableData.push({
                row: Number(index) + 1,
                reason: messageArr.join('、')
            })
        }
    }
    return errorTableData
})

const validateData = () => {
    if (props.rules) {
        var validator = new Schema(props.rules)
        const e = new Array();
        props.tableData.forEach((item, index) => {
            Object.defineProperty(props.tableData[index], 'key', {
                value: index + 1
            })
        });
        props.tableData.forEach((item, index) => {
            try {
                validator.validate(item, (errors: any) => {
                    if (errors) {
                        e[index] = []
                        errors.forEach((error: any) => {
                            e[index][error.field] = error.message
                        })
                    }
                })
            } catch (ex: any) {
                e[index] = []
                e[index]['key'] = ex.message;
            }
        })
        errorData.value = e
    }
}

const handlePre = () => {
    emit('pre')
}


const changeData = (tableData: Data) => {
    let dataSource = tableData;
    return dataSource
}

const handleRequest = async () => {
    if (isLoading.value) return
    if (errorTableData.value.length) {
        ElNotification.error({ title: '提示', message: '请处理完错误后重新上传' });
        return
    }
    isLoading.value = true
    let tableData = changeData(props.tableData)
    const appendData = props.append
    if (appendData) {
        tableData = tableData.map((item) => {
            return Object.assign({}, item, appendData)
        })
    }
    try {
        if (props.readSuccess) {
            await props.readSuccess(tableData)
            ElMessage.success('导入完成，导入明细请查看详情！')
        }
        if (goNext)
            goNext()
    } catch (error) {
        if (Array.isArray(error)) {
            errorData.value = error;
        }
        ElMessage.error('导入失败, 请重试！')
    } finally {
        isLoading.value = false
    }
}
onMounted(() => {
    validateData()
})

</script>

