<script setup lang="ts">
import { renderAsync } from 'docx-preview';

const formState = reactive({
    name: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
    value1: '0',
    value4: []
});

//我是vue3项目 报错require不行 就用的下边这种了
let docx = import.meta.glob('docx-preview');
// function previewfile(item) {
//    nextTick(() => {
//      fetch(item.filePath)
//        .then((response) => {
//          let docData = response.blob(); //将文件转换成bolb形式

//           //选择要渲染的元素
//          let childRef = document.getElementsByClassName('childRef');

//           //用docx-preview渲染
//          renderAsync(docData, childRef[0]).then((res) => {
//            console.log('res---->', res);
//          });
//        })
//        .catch((error) => {
//          console.log(error);
//        });
//    });
// }

</script>

<template>
    <!-- 页面标题 -->
    <PageTitle title="审核详情" />
    <div style="margin: 0 80px ;">
        <div class="preview">
            <!-- <div ref="childRef" class="childRef"></div> -->
        </div>
        <div style="margin:20px auto;">
            <a-form :model="formState" name="basic" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }">
                <a-form-item label="退回原因" autocomplete="off">
                    <a-input v-model:value="formState.name" placeholder="请输入退回原因"/>
                </a-form-item>
            </a-form>
            <!-- 操作按钮 -->
            <div style="text-align: center;">
                <a-button type="primary">审核通过</a-button>
                <a-button type="primary" style="margin-left: 20px;">退回</a-button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.preview{
    height: 660px;
    border: 1px solid #333333;
}
</style>
