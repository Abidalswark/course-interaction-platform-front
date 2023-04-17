<script setup lang="ts">
import { message } from 'ant-design-vue';

const current = ref<number>(0);
const  steps = [
        {
          title: 'A 基本信息'
        },
        {
          title: 'B 婚姻家庭状况'
        },
        {
          title: 'C 经济情况'
        },
        {
          title: 'D 健康状况'
        },
        {
          title: 'E 社区居家养老服务'
        },
      ]
const statusMap = {wait : '等待中', process : '通过', finish : '完成', error : '错误'}

const ok = ()=>{
  message.success('提交成功')
  window.location.reload()
}
</script>

<template>
    <PageTitle title="调研数据" />
    <div>
        <!-- 步骤条 -->
        <a-steps :current="current">
            <template #progressDot="{ index, status, prefixCls }">
                <a-popover>
                <template #content>
                    <span>步骤 {{ index }} 状态: {{ statusMap[status] }}</span>
                </template>
                <span :class="`${prefixCls}-icon-dot`" />
                </a-popover>
            </template>
            <a-step v-for="item in steps" :key="item.title" :title="item.title" />
        </a-steps>
    </div>
    <!-- 步骤具体内容 -->
    <div class="content">
        <div class="step-A" v-if="current === 0">
          <StepA/>
        </div>
        <div class="step-B" v-if="current === 1">
          <StepB/>
        </div>
        <div class="step-C" v-if="current === 2">
          <StepC/>
        </div>
        <div class="step-D" v-if="current === 3">
          <StepD/>
        </div>
        <div class="step-E" v-if="current === 4">
          <StepE/>
        </div>
    </div>
    <!-- 提交和下一步 -->
    <div flexc style="margin:0 auto;width: 500px;">
        <a-button type="primary"  v-if="current !== 0" @click="current = current-1">上一步</a-button>
        <a-button type="primary" style="margin: 0 20px;" v-if="current !== 4" @click="current = current+1">下一步</a-button>
        <a-button type="primary"  style="margin: 0 20px;" v-if="current === 4" @click="ok">提交问卷</a-button>
      </div>
</template>
<style lang="less" scoped>
.content{
    margin: 10px 50px;
    height: 570px;
    overflow-y: auto;
    background-color: rgb(230, 230, 230);
}
</style>
