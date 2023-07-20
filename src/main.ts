import { createApp } from 'vue';
import App from './App.vue';

import '@/styles/index.scss';

// Element plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
// Svg
import 'virtual:svg-icons-register';
// 全局组件
import globalComponent from '@/components';

import router from '@/router';
import pinia from './store';

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(globalComponent);
app.use(router);
app.use(pinia);
app.mount('#app');
