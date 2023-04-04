<template>
    <ImportView :visible="visible" :fields="fields" :read-success="readSuccess" @close="visible = false" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const visible = ref(false);
const fields = ref({ name: '姓名' });
const readSuccess = (data) => {
    return Promise.resolve(data)
}
</script>