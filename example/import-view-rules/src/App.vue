<template>
  <button @click="visible = true">click</button>
  <import-view :visible="visible" :rules="rules" :fields="fields" :read-success="readSuccess" @close="visible = false" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { Rules } from 'async-validator';
import { ImportView } from '../../../lib'
import { Fields } from '../../../lib/components/home';

const visible = ref(false);
const fields = ref<Fields>({ name: '姓名', email: '邮箱', idCard: "身份证号" });
const rules = ref<Rules>({
  email: { type: 'email', message: '请填写正确的邮箱' },
  idCard: { pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '请填写正确的身份证号' }
})
const readSuccess = (data: Array<any>) => {
  console.log(data)
  return Promise.resolve(data)
}
</script>