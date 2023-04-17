<script lang="ts" setup>
const plainOptions = ['学生', '教师', '管理员'];
const formState = $ref({
    type: '学生',
    phone: '',
    password: '',
    checkedList:['学生'],
});

const { login } = useUser()
async function handleLogin() {
    await login(formState.phone, formState.password)
}

</script>  
<template>
    <div class="loginTitle"> 用户注册 </div>
    <a-form :model="formState" name="basic" autocomplete="off"  :label-col="{span:5}" style="width: 450px;">
        <a-form-item label="注册身份(多选)" name="type" >
            <a-checkbox-group v-model:value="formState.checkedList" :options="plainOptions" />
        </a-form-item>

        <a-form-item label="用户名" name="password" >
            <a-input v-model:value="formState.phone" placeholder="请输入用户名"/>
        </a-form-item>

        <a-form-item label="密码" name="password" >
            <a-input-password v-model:value="formState.phone" placeholder="请输入您的密码" class="pass-cls">
                <template #prefix>
                    <lock-filled />
                </template>
            </a-input-password>
        </a-form-item>
        <a-form-item label="姓名" name="password" >
            <a-input v-model:value="formState.phone" placeholder="请输入姓名"/>
        </a-form-item>
        <a-form-item label="学号/职工号" name="password" >
            <a-input v-model:value="formState.phone" placeholder="请输入学号/职工号"/>
        </a-form-item>
        <a-form-item label="联系方式" name="password" >
            <a-input v-model:value="formState.phone" placeholder="请输入联系方式"/>
        </a-form-item>
    </a-form>
    <div style="margin-left: 110px;">
        <RouterLink to="/"><a>已有账号，去登录</a></RouterLink>
    </div>
    <div style="text-align: right;margin-right: 10px;">
        <a-button type="primary" html-type="submit" size="large" style="padding:0 26px;">确认</a-button>
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
:deep(.ant-checkbox-wrapper){
    padding-right: 34px;
}
.pass-cls{
    border: 0;
    border-bottom: 1px solid #d9d9d9;
}
</style>