<script setup lang="ts">

</script>

<template>
  <PageTitle title="首页" />
   <!-- 数据报表 -->
   <div class="data-report">
        <a-row>
            <a-col :span="12">
                <CourseSource/>
            </a-col>
            <a-col :span="12">
                <CourseSource/>
            </a-col>
        </a-row>
    </div>
    <!-- 近期通知资讯 -->
    <div class="data-list">
        <div class="list">
        <div flex style="margin-bottom: 10px;">
          <notification-outlined style="margin-top: 5px; font-size: 20px;"/>
          <span class="noti-cls">近期通知资讯</span>
        </div>
          <ul>
              <li flexb v-for="item in 10">
                  <div style="display: flex;">
                      <div class="dian"></div>
                      <span>
                          北京大学博士后研究人员管理办法
                      </span>
                  </div>
                  <div>
                      2022-01-26
                  </div>
              </li>
          </ul>
      </div>
    </div>
</template>
<style lang="less" scoped>
.data-report{
    
}

.list {
    .noti-cls{
      font-weight: bold;
      margin-left: 10px;
      font-size: 20px;
    }
    .dian{
        margin-top: 18px;
    margin-right: 5px;
        width: 5px;
        height: 5px;
        background-color: #be0000;
    }
    color: #525252;
    font-size: 15px;
    margin: 0 150px;

    li {
        border-bottom: 1px solid rgb(212, 212, 212);
        line-height: 40px;
    }
}
</style>
