import { reqLogin } from '@/api/user';
import { loginForm } from '@/api/user/type';
import { defineStore } from 'pinia';

const useUserStore = defineStore('User', {
  state: () => {
    return {
      token: '',
    };
  },
  actions: {
    async userLogin(data: loginForm) {
      const res = await reqLogin(data);
      if (res.code === 200) {
        this.token = res.data.token;
      }
    },
  },
  getters: {},
});

export default useUserStore;
