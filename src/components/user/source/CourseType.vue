<script lang="ts" setup>
import TypeDistribution from '../../options/type-distribution'

let data = $ref([
  {
    itemStyle: {
      color: '#4374ff',
    },
    value: 335,
    name: '图例一',
  },
  {
    itemStyle: {
      color: '#2ce293',
    },
    value: 310,
    name: '图例二',
  },
  {
    itemStyle: {
      color: '#17caf0',
    },
    value: 234,
    name: '图例三',
  },
  {
    itemStyle: {
      color: 'rgb(93,112,146)',
    },
    value: 234,
    name: '图例四',
  }
])
let option = $ref<any>(TypeDistribution(data,'black'))

</script>

<template>
    <div style="min-height: 440px;margin-top: 10px;">
        <div h-90 w-120 flex="~ col" >
            <div p="x-8 t-4" text="#000000 5.5" font="bold">资源类型</div>
            <div w="full" h="full">
            <EchartsContainer :option="(option)" />
            </div>
        </div>
    </div>
</template> 
