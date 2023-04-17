<script lang="ts" setup>

</script>  
<template>
     <!-- logo 主题 -->
     <LogoTop />
    <div class="login">
       <div class="right">
          <div style="display: block;position: relative;">
              <!-- 账号登录 -->
              <UserLogin/>
          </div>
       </div>
   </div>
</template>

<style lang="less" scoped>
.login{
  font-family: PingFangSC-Medium;
}
.right{
  margin: 0 auto;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color:rgba(129, 130, 133, 0.7);
}
</style>