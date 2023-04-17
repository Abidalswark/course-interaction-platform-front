<script lang="ts" setup>
import router from '@/router';

const plainOptions = ['学生', '教师', '管理员'];
const formState = $ref({
    type: '学生',
    username: '',
    password: '',
    code: ''
});

const { login } = useUser()
async function handleLogin() {
    await login(formState.username, formState.password)
}


const toMain = ()=>{
    if(formState.type === '学生' || formState.type === '教师'){
        router.push('/user/main')
    }else{
        router.push('/manager/source/list')
    }
}
</script>  
<template>
    <div class="loginTitle"> 用户登录 </div>
    <a-form :model="formState" name="basic" autocomplete="off"  :label-col="{span:4}" style="width: 450px;">
        <a-form-item label="登录身份" name="type" >
            <a-radio-group v-model:value="formState.type" :options="plainOptions" />
        </a-form-item>

        <a-form-item label="用户名" name="password" >
            <a-input v-model:value="formState.username" placeholder="请输入用户名"/>
        </a-form-item>

        <a-form-item label="密码" name="password" >
            <a-input-password v-model:value="formState.password" placeholder="请输入您的密码" class="pass-cls">
                <template #prefix>
                    <lock-filled />
                </template>
            </a-input-password>
        </a-form-item>

        <a-form-item label="验证码" name="password" >
            <a-input v-model:value="formState.code" placeholder="请输入内容"/>
        </a-form-item>
    </a-form>
    <div style="margin-left: 110px;">
        <RouterLink to="/register"><a>去注册</a></RouterLink>
    </div>
    <div style="text-align: right;margin-right: 28px;">
        <a-button type="primary" @click="toMain" size="large" style="padding:0 26px;">确认</a-button>
    </div>
</template>

<style lang="less" scoped>
.loginTitle {
    font-size: 22px;
    line-height: 40px;
    letter-spacing: 0;
    color:rgb(155,0,0);
    margin: 0 0 40px 0;
    text-align: center;
}

:deep(.ant-form-item-control-input){
    width: 320px !important;
    margin-left: 30px;
}
:deep(.ant-radio-wrapper){
    padding-right: 34px;
}
.pass-cls{
    border: 0;
    border-bottom: 1px solid #d9d9d9;
}
</style>