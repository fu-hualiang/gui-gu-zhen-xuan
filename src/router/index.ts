import { createRouter, createWebHashHistory } from 'vue-router';
import { constantRoute } from './routers';
import createRouteGuard from '@/router/guard';

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
