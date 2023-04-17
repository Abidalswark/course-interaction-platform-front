<script setup lang="ts">
import { RouterView } from 'vue-router'
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

</script>

<template>
<a-config-provider :locale="zh_CN">
    <RouterView/>
</a-config-provider>
</template>

