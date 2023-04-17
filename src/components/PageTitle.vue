<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>
<template>
<div class="title">{{ title }}</div>
</template>
<style lang="less" scoped>
.title{
    font-size: 20px;
    margin: 16px 0;
}
</style>
