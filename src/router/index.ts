import { createRouter, createWebHashHistory } from 'vue-router';
import { constantRoute } from './routers';
import createRouteGuard from '@/router/guard';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});

createRouteGuard(router);
export default router;
