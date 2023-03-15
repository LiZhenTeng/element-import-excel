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
                <el-table-column :column-key="field" :label="label" :prop="field" :align="'left'" header-align="center">
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
import { ElNotification, ElMessage } from 'element-plus'
import { inject, ref, computed, onMounted } from 'vue';
import Schema from 'async-validator';

const props = defineProps({
    rules: {
        type: Object,
        default: () => ({})
    },
    fields: {
        type: Object,
        required: true
    },
    requestFn: {
        type: Function,
        required: true
    },
    tableData: {
        type: Array<any>,
        default: (): Array<any> => []
    },
    formatter: {
        type: [Function, Object],
        required: false
    },
    append: Object,
    scroll: {
        type: Number,
        required: false,
        default: () => 1500
    },
    canNext: {
        type: Boolean,
        default: () => true
    }

})
const emit = defineEmits(['pre'])

const goNext: Function | undefined = inject('goNext')

const isLoading = ref(false)
const errorData = ref<{ [key: string]: any }>({});
const dataPagination = ref({
    defaultCurrent: 1,
    defaultPageSize: 10,
    hideOnSinglePage: true
})

const errorTableData = computed(() => {
    const e = errorData.value
    const errorTableData = new Array();
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
            // 添加key
            props.tableData[index].key = index + 1
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

const findKey = (obj: { [key: string]: any }, value: any, compare = (a: any, b: any) => a === b) => {
    let key = Object.keys(obj).find(k => compare(obj[k], value))
    if (!isNaN(Number(key))) {
        key = Number(key).toString()
    }
    return key
}

const changeData = (tableData: Array<any>) => {
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
        await props.requestFn(tableData)
        ElMessage.success('导入完成，导入明细请查看详情！')
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

