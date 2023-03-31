# Attributes

## append

- **类型**: `Append`

- **默认值**：`undefined`

- **用法**：
  ```ts
  import { ref } from "vue";
  import type { Append } from 'element-import-excel';
  const append = ref<Append>({ sex: '男' })
  ```
  ```vue
  <import-view :append="append" />
  ```
  向Excel数据中添加数据

## tips

- **类型**: `Tips`

- **默认值**：`undefined`

- **用法**：
  ```ts
  import { ref } from "vue";
  import type { Tips } from 'element-import-excel';
  const tips = ref<Tips>([
    {
      description: '警告'
    },
    {
      description: '错误',
      type: 'error',
      closable: true
    }
  ])
  ```
  ```vue
  <import-view :tips="tips" />
  ```

## title

- **类型**: `string`

- **默认值**：`''`

- **用法**：

  ```vue
  <import-view title="Import Excel" />
  ```

## fields

- **类型**: `Fields`

- **默认值**：`undefined`

- **用法**：
  ```ts
  import type { Fields } from 'element-import-excel';
  const fields = ref<Fields>({ name: '姓名' });

  ```
  ```vue
  <import-view :fields="fields" />
  ```
  导入数据的字段，fields对象中key值为读取Excel成功后，返回对象数组中字段的key。fields对象中的值为Excel标题行。

## sheetName

- **类型**: `string`

- **默认值**：`undefined`

- **用法**：
  ```vue
  <import-view :sheet-name="'Sheet1'" />
  ```
  ::: tip
  sheet name选项为undefined时，默认读取第一个Sheet
  :::

## visible

- **类型**: `boolean`

- **默认值**：`false`

- **用法**：

  控制组件是否展示
  ::: warning
  组件关闭后需要将visible属性设置为false
  :::
## rules

- **类型**: `Rules`

- **默认值**：`undefined`

- **用法**：
  ```ts
  import type { Rules } from 'async-validator';
  const rules = ref<Rules>({ email: { type: 'email', message: '请填写正确的Email' } })
  ```
  ```vue
  <import-view :rules="rules" />
  ```

  更多用法请参考：[async-validate](https://github.com/tmpfs/async-validate)

## readSuccess

- **类型**: `ReadSuccessFn`

- **默认值**：`undefined`

- **用法**：
  ```ts
  import type { ReadSuccessFn } from 'element-import-excel';
  const readSuccess: ReadSuccessFn = (data: Array<any>) => Promise.resolve(data);
  ```
  ```vue
  <import-view :read-success="readSuccess" />
  ```
  读取Excel成功后回调函数，data：根据fields属性读取的Excel数据
  :::info
  组件会根据Promise返回结果判断是否导入成功
  :::
