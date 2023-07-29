<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { Lock, User } from '@element-plus/icons-vue';
  import useUserStore from '@/store/modules/user.ts';
  import { useRouter,useRoute } from 'vue-router';
  import { ElNotification } from 'element-plus';
  import { getTime } from '@/utils/time';

  const loginForm = reactive({
    username: 'admin',
    password: '111111',
  });

  const userStore = useUserStore();
  const router = useRouter();
  const route = useRoute();

  const loading = ref<boolean>(false);

  const loginForms = ref();

  const login = async () => {
    await loginForms.value.validate();

    loading.value = true;
    try {
      await userStore.userLogin(loginForm);
      await router.push(route.query.redirect as string || '/');
      ElNotification({
        type: 'success',
        message: '欢迎回来',
        title: `Hi,${getTime()}好`,
      });
    } catch (error) {
      ElNotification({
        type: 'error',
        message: (error as Error).message,
      });
    } finally {
      loading.value = false;
    }
  };
</script>

<template>
  <div class="login_container">
    <el-row :gutter="20">
      <el-col :span="12" :offset="12" :xs="24">
        <el-form class="login_form" :model="loginForm" ref="loginForms">
          <h1>Hello</h1>
          <h2>硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" :prefix-icon="User"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              :prefix-icon="Lock"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
              :loading="loading"
            >
              登陆
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
  .login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
    overflow:hidden;

    .login_form {
      position: relative;
      width: 80%;
      top: 30vh;
      background: url('@/assets/images/login_form.png') no-repeat;
      background-size: cover;
      padding: 40px;

      h1 {
        color: white;
        font-size: 40px;
      }

      h2 {
        font-size: 20px;
        color: white;
        margin: 20px 0;
      }

      .login_btn {
        width: 100%;
      }
    }
  }
</style>
