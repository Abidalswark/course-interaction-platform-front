<script setup lang="ts">
import { message } from 'ant-design-vue';

const htmls = reactive([
    {
        id:0,
        name:'Robot',
        content:'你有什么想问我的吗？',
        role:0
    }
]);

const tmpMsg = [
{
        id:0,
        name:'Robot',
        content:'<p>你好！</p>',
        role:0
    },{
        id:0,
        name:'Robot',
        content:'<p><img src="https://www.baidu.com/img/flexible/logo/pc/result.png" width="80" height="80"></p>',
        role:0
    }
]

const formState = reactive({
    content: ''
});

const htmlobj = $ref<any>()
//发送问题
const sendMsg = ()=>{
    if(formState.content.length === 0){
       message.error("请输入内容")
        return
    }
    
    htmls.push(
        {
            id:0,
            name:'我',
            content: formState.content,
            role:1
        }
    )
    //Math.floor(Math.random() * (Max - Min + 1)) + Min;  取随机数 指定范围
    const num = Math.floor(Math.random() * (2 - 1 + 1)) ;
    htmls.push(tmpMsg[num])

    nextTick(() => {
        htmlobj.scrollTop = htmlobj.scrollHeight;
    })
}
</script>

<template>
    <PageTitle title="ChatGPT" />
    <div class="content-bg" ref="htmlobj">
        <div v-for="(item,index) in htmls" :key="index" >
            <template v-if="item.role === 0">
                <div flex>
                    <div>{{ item.name }}:</div>
                    <div v-html="item.content"></div>
                </div>
            </template>
            <!-- 用户消息 -->
            <template v-if="item.role === 1">
                <div flex style="justify-content: flex-end">
                    <div v-html="item.content"></div>
                    <div>:{{ item.name }}</div>
                </div>
            </template>
        </div>
    </div>
    <!--  发送消息 -->
    <div class="send-msg" flexc>
            <a-form-item label="内容">
                <a-input v-model:value="formState.content" placeholder="请输入内容" style="width: 450px;">
                </a-input>
            </a-form-item>
            <a-form-item>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" style="margin-left: 10px;" @click="sendMsg">
                    发送
                </a-button>
            </a-form-item>
    </div>
</template>
<style lang="less" scoped>
.content-bg{
    background-color: rgb(247,247,247);
    width: 1000px;
    height: 600px;
    margin: 0 auto;
    padding: 20px;
    overflow-y: auto;
    font-size: 20px;
    border-radius: 10px;
}
.send-msg{
    width: 900px;
    text-align: center;
    margin: 20px auto;
}
</style>
