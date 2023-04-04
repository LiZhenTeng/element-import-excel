<script setup lang="ts">
import { ref } from "vue";
import { ElButton } from 'element-plus'
import { ImportView, toggleDark } from 'element-import-excel';
import type { Fields, ReadSuccessFn } from 'element-import-excel';

const visible = ref(false);
const fields = ref<Fields>({ name: '姓名',gender:'性别',age:'年龄' });
const readSuccess: ReadSuccessFn = (data: Array<any>) => Promise.resolve(data);
</script>

<template>
    <ElButton @click="toggleDark()">Dark</ElButton>
    <ElButton @click="visible = true">Import</ElButton>
    <ImportView :visible="visible" :fields="fields"  @close="visible = false" :read-success="readSuccess" />
</template>