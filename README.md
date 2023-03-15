> 🎚 An import excel component based on element-plus

#### install

```bash
$ yarn add element-import-excel
# npm install element-import-excel --save
```

## ✨ Features


## 🎯 install

```bash
$ yarn add element-import-excel
# npm install element-import-excel --save
```

## 🚀 Usage

<details><summary>Vue 3</summary>

```vue
<template>
    <button @click="importConfig.visible = true">click</button>
    <import-view :visible="importConfig.visible" :fields="importConfig.fields" :request-fn="importConfig.requestFn"
      @close="importConfig.visible = false" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const importConfig = ref({
  visible: false,
  fields: { name: '姓名' },
  requestFn: (data: Array<any>) => {
    console.log(data)
  }
})
</script>
```

</details>
