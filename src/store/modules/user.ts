import { reqLogin, reqUserInfo } from '@/api/user';
import { defineStore } from 'pinia';
import type { loginForm, loginResponseData } from '@/api/user/type';
import type { userState } from './types/type';
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token';

const useUserStore = defineStore('User', {
  state: (): userState => {
    return {
      token: GET_TOKEN(),
      username: '',
      avatar: '',
    };
  },
  actions: {
    async userLogin(data: loginForm) {
      const res: loginResponseData = await reqLogin(data);
      if (res.code === 200) {
        this.token = res.data.token as string;
        SET_TOKEN(res.data.token as string);
        return 'ok';
      } else {
        return Promise.reject(new Error(res.data.message));
      }
    },
    userLogout() {
      this.$reset();
      REMOVE_TOKEN();
    },
    async userInfo() {
      const res = await reqUserInfo();
      this.username = res.data.checkUser.username;
      this.avatar = res.data.checkUser.avatar;
    },
  },
  getters: {},
});

export default useUserStore;
