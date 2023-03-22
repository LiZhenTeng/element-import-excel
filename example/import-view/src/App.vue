<template>
  <button @click="importConfig.visible = true">click</button>
  <import-view :visible="importConfig.visible" :fields="importConfig.fields" :read-success="importConfig.readSuccess"
    @close="importConfig.visible = false" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ImportView } from '../../../lib'
const importConfig = ref({
  visible: false,
  fields: { name: '姓名' },
  readSuccess: (data: Array<any>) => {
    console.log(data)
    return Promise.resolve(data)
  }
})
</script>