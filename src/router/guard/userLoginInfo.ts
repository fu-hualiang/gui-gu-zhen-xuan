import type { LocationQueryRaw, Router } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import useUserStore from '@/store/modules/user.ts';
import { GET_TOKEN } from '@/utils/token.ts';

import setting from '@/setting.ts';

export default function setupUserLoginInfoGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();

    document.title = setting.title + '-' + to.meta.title;

    const userStore = useUserStore();
    if (GET_TOKEN()) {
      try {
        await userStore.userInfo();
        next();
      } catch (error) {
        userStore.userLogout();
        next({
          name: 'Login',
          query: {
            redirect: to.path,
            ...to.query,
          } as LocationQueryRaw,
        });
      }
    } else {
      if (to.name === 'Login') {
        next();
        return;
      }
      next({
        name: 'Login',
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      });
    }
  });
}
