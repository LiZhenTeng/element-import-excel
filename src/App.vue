<script setup lang="ts">
import { ref } from 'vue';

const importConfig = ref({
  visible: false,
  fields: { name: '姓名' },
  requestFn: (data: Array<any>) => {
    console.log(data)
  }
})

</script>

<template>
  <div>
    <button @click="importConfig.visible = true">click</button>
    <import-view :visible="importConfig.visible" :fields="importConfig.fields" :request-fn="importConfig.requestFn"
      @close="importConfig.visible = false"></import-view>
  </div>
</template>

