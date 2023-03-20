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
  fields: { name: '姓名',sex:'性别' },
  requestFn: (data: Array<any>) => {
    console.log(data)
  }
})
</script>
```

</details>

## Attributes

### fields

- **类型**: `Fields`

  ```ts
  type Fields = {[key:string]:string}
  ```

- **默认值**：`undefined`

- **用法**：

  ```html
  <import-view :fields="{name:'姓名',sex:'性别'}" />
  ```

  导入数据的字段，fields对象中key值为读取Excel成功后，返回对象数组中字段的key。fields对象中的值为Excel标题行。

### visible

- **类型**: `boolean`

- **默认值**：`false`

- **用法**：

  控制组件是否展示

### readSuccess

- **类型**: `ReadSuccess`

  ```ts
  type ReadSuccess = (data: Array<any>): Promise<any>
  ```

- **默认值**：`undefined`

- **用法**：

  读取Excel成功后回调函数，data：根据fields属性读取的Excel数据

## Events

### close

- **类型**：`() => void`

  ImportView 关闭的回调

### finish

- **类型**：`() => void`

  导入成功后，查看详情的回调
