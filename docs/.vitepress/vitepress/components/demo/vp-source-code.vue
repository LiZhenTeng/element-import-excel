<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
})

const decoded = computed(() => {
  return decodeURIComponent(props.source)
})
</script>

<template>
  <ClientOnly>
  <div class="example-source-wrapper">
    <div class="example-source language-vue" style="margin: 0;background-color: var(--el-fill-color-light);"  v-html="decoded" />
  </div>
</ClientOnly>
</template>

<style scoped lang="scss">
.language-vue {
  margin: 0;
  border-radius: 0;
}

</style>
