# Get Start

> An import excel component based on element-plus


##  Install

```sh [npm]
$ npm install element-excel-import
```
##  Documentation

Document: <https://lizhenteng.github.io/element-import-excel/>

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

## License

Element Import Excel is open source software licensed as
[MIT](https://github.com/LiZhenTeng/element-import-excel/blob/master/LICENSE).
