<template>
    <el-button @click="visible = true">Basic</el-button>
    <ImportView :visible="visible" :fields="fields" :read-success="readSuccess" @close="visible = false" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { ElButton } from 'element-plus';
const visible = ref(false);
const fields = ref({ name: '姓名' });
const readSuccess = (data) => {
    return Promise.resolve(data)
}
</script>