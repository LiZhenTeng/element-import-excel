# Get Start

> An import excel component based on element-plus

##  Install

::: code-group

```sh [npm]
$ npm install element-excel-import
```
:::

## Full import

```typescript
// main.ts
import { createApp } from 'vue'
import ImportView from 'element-import-excel'
import 'element-import-excel/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ImportView)
app.mount('#app')

```

## Page import

```vue
<template>
    <import-view />
</template>

<script lang="ts" setup>
import { ImportView } from 'element-import-excel'
import 'element-import-excel/dist/index.css'
</script>
```

## Attributes

### fields

- **类型**: `Fields`

  ```ts
  type Fields = Record<string,string>
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

### rules

- **类型**: `Rules`

  ```ts
  import type { Rules } from 'async-validator';
  ```

- **默认值**：`undefined`

- **用法**：

  ```html
  <import-view :rules="{email:{type:'email',message:'请填写正确的Email'}}" />
  ```

  用作数据字段校验，更多用法请参考：https://github.com/tmpfs/async-validate

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
