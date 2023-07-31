import type { Router } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function setupPermissionGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    next();
    NProgress.done();
  });
}
