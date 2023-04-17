import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue';
import router from './router';

import 'uno.css';
import '@unocss/reset/tailwind.css';
import '@/assets/css/global.css';

import * as Echarts from 'echarts';

import 'ant-design-vue/es/modal/style/css'
import 'ant-design-vue/es/message/style/css'
import 'ant-design-vue/es/notification/style/css'
import 'ant-design-vue/es/image/style/css'
import 'ant-design-vue/es/tooltip/style/css'

//日期组件汉化
import moment from 'moment'
import 'moment/locale/zh-cn'

import "dayjs/locale/zh-cn";

import * as Icons from '@ant-design/icons-vue'


moment.locale('zh-cn') //设置语言 或 moment.lang('zh-cn');


const app = createApp(App);

const pinia = createPinia()
app.use(pinia);
pinia.use(piniaPluginPersistedstate)

app.use(router);

// 注册图标组件
for (const i in Icons) {
    app.component(i, Icons[i])
}

app.mount('#app');

