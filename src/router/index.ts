import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

//学生-老师 后端
export const modules:any = [
  {
    path: 'main',
    name: '首页',
    component: () => import('@/views/user/main.vue'),
  },
  {
    path: 'source',
    name: '资源显示',
    children: [
      {
        path: 'list',
        name: '资源显示',
        component: () => import('@/views/user/source/list.vue'),
      },
      {
        path: 'upload',
        name: '资源上传',
        component: () => import('@/views/user/source/upload.vue'),
      },
      {
        path: 'query',
        name: '资源查询',
        component: () => import('@/views/user/source/query.vue'),
      },
      {
        path: 'my',
        name: '我的资源',
        component: () => import('@/views/user/source/my.vue'),
      }
    ],
  },
  {
    path: 'survey',
    name: '调研数据',
    component: () => import('@/views/user/survey.vue'),
  },
  {
    path: 'consult',
    name: '资源资讯',
    component: () => import('@/views/user/consult.vue'),
  },
  {
    path: 'download',
    name: '文件与下载',
    component: () => import('@/views/user/download.vue'),
  },
  {
    path: 'chatgpt',
    name: 'ChatGPT',
    component: () => import('@/views/user/chatgpt.vue'),
  }
];
//管理员
export const modules2:any = [ 
  {
    path: 'source',
    name: '课程资源管理',
    children: [
      {
        path: 'list',
        name: '课程资源管理',
        component: () => import('@/views/manager/source/list.vue'),
      },
      {
        path: 'process',
        name: '资源审核',
        component: () => import('@/views/manager/source/process.vue'),
      },
      {
        path: 'upload',
        name: '资源查询.',
        component: () => import('@/views/manager/source/query.vue'),
      },
      {
        path: 'query',
        name: '资源上传.',
        component: () => import('@/views/manager/source/upload.vue'),
      }
    ],
  },
  {
    path: 'survey',
    name: '调研数据管理',
    children: [
      {
        path: 'list',
        name: '调研数据管理',
        component: () => import('@/views/manager/survey/list.vue'),
      },
      {
        path: 'upload',
        name: '数据上传',
        component: () => import('@/views/manager/survey/upload.vue'),
      }
    ],
  },
  {
    path: 'consult',
    name: '通知资讯管理',
    children: [
      {
        path: 'list',
        name: '通知资讯管理',
        component: () => import('@/views/manager/consult/list.vue'),
      },
      {
        path: 'upload',
        name: '上传资讯',
        component: () => import('@/views/manager/consult/upload.vue'),
      }
    ],
  },
  {
    path: 'file',
    name: '文件管理',
    component: () => import('@/views/manager/file.vue')
  },
  {
    path: 'user',
    name: '用户管理',
    component: () => import('@/views/manager/user.vue'),
  },
  //隐藏页面
  {
    path: 'page',
    name: '其他页面',
    meta:{disabled:true},
    children: [
      {
        path: 'preview',
        name: '查看-资源审核',
        component: () => import('@/views/manager/source/detail.vue'),
      }
    ],
  },
];

// 路由配置
export const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: '登录页面',
    component: () => import('@/views/login.vue'),
  }, {
    path: '/register',
    name: '注册页面',
    component: () => import('@/views/register.vue'),
  },
  {
    path: '/user',
    name: '课程资源交互教学平台-用户',
    component: () => import('@/views/user.vue'),
    children: modules,
  },
  {
    path: '/manager',
    name: '课程资源交互教学平台',
    component: () => import('@/views/manager.vue'),
    children: modules2,
  } 
  
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

// 前置路由守卫
// router.beforeEach((to, from, next) => {
//   const { isLogin } = $(useUser());
//   if (!to.path.includes('login')) {
//     if (!isLogin) next('/');
//     else next();
//   } else {
//     if (isLogin) next('/');
//     else next();
//   }
// });

export default router;

