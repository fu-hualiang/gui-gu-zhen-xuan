import type { Router } from 'vue-router';
import setupUserLoginInfoGuard from './userLoginInfo';
import setupPermissionGuard from '@/router/guard/permission.ts';

export default function createRouteGuard(router: Router) {
  setupUserLoginInfoGuard(router);
  setupPermissionGuard(router);
}
