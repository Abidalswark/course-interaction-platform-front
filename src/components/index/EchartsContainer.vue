<script lang='ts' setup>
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
// 基于准备好的dom，初始化echarts实例
const echartsContainer = $ref<HTMLElement>()

const { option } = defineProps<{ option: EChartsOption }>()

onMounted(() => {
  const myChart = echarts.init(echartsContainer!);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})
</script>

<template>
  <div ref="echartsContainer" w="full" h="full" px="4"></div>
</template>
