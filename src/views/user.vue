<script lang='ts' setup>
import HeaderUser from '@/components/user/HeaderUser';
let { personalInfo, logout } = $(useUser())

const { path, matched } = $(useRoute())
const selectedKeys = $ref([path])
</script>

<template>
   <a-layout h-full bg="#ffffff" style="position: relative;">
    <div style="position: fixed;top:20px;right: 20px;z-index: 9999;">
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          管理员
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <RouterLink to="/"><a href="javascript:;">退出登录</a></RouterLink>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <!-- 顶部导航 -->
    <a-layout-header :style="{ height: '160px', position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#ffffff' }">
      <!-- logo 主题 -->
      <LogoTop />
      <div id="top" style="background-color: #ffffff;width: 100%;margin-top: 50px;">
        <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="horizontal" class="menu-cls">
          <!-- 其他导航 -->
          <component :is="HeaderUser" />
        </a-menu>
      </div>
    </a-layout-header>

    <a-layout-content :style="{ marginTop: '150px', paddingTop: '20px',backgroundColor: '#ffffff' , height: '100%'}">
      <!-- 模块内容 white-->
      <div bg="white" p="6" style="min-height: 100vh;" class="manager-content">
        <RouterView />
      </div>
    </a-layout-content>
  </a-layout>
</template>
<style lang="less" scoped>
.ant-layout-header {

  :deep(li) {
    width: 180px !important;
    text-align: center !important;
  }
}

.manager-content{
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}

#top {

  //悬浮,选择颜色
  :deep(.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item :hover),
  :deep(.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-selected) {}

  //悬浮下划线,选择后下划线
  :deep(.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:visited::after),
  :deep(.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after),
  :deep(.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after) {
    width: 57px;
    margin-left: 42px;
  }
}

.menu-cls {
  font-size: 16px;
  height: 50px;
  width: 1024px;
  margin: 0 auto;
  border: 0;

}

.ant-menu-overflow-item .ant-menu-item .ant-menu-item-selected .ant-menu-item-only-child {
  width: 180px !important;
}

.ant-layout-header .ant-menu {
  line-height: 2.875rem !important;
}
</style>