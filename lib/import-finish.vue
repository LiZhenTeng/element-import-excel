<template>
  <div v-if="showFinishResult" class="m">
    <el-table :data="dataSource">
      <template v-for="item in dataSourceColumns">
        <el-table-column :prop="item.dataIndex">
          {{ item.title }}
        </el-table-column>
      </template>
    </el-table>
  </div>
  <div v-else>
    <div style="text-align: center;">
      <div style="margin-top: 20px">
        <el-icon style="font-size: 150px;line-height: 1.2;color: #67c23a;">
          <circle-check />
        </el-icon>
      </div>
      <div>导入完成，导入明细请查看详情！</div>
      <div>
        <el-button @click="handleFinish" type="primary" size="large">查看详情</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElTable, ElTableColumn, ElIcon, ElButton } from 'element-plus'
import { CircleCheck } from '@element-plus/icons-vue';
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'
import 'element-plus/es/components/icon/style/css'
import 'element-plus/es/components/button/style/css'

defineProps({
  //是否显示返回结果列表
  showFinishResult: {
    type: Boolean,
    default: false,
  },
  dataSourceColumns: {
    type: Array<{ [key: string]: any }>,
  },
  //返回展示结果集
  dataSource: {
    type: Array<{ [key: string]: any }>,
  }
});
const emit = defineEmits(['finish']);
const handleFinish = () => {
  emit("finish");
}
</script>