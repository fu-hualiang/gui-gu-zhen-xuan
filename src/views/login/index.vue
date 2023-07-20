<script lang="ts" setup>
  import { reactive } from 'vue';
  import { Lock, User } from '@element-plus/icons-vue';
  import useUserStore from '@/store/modules/user.ts';

  const loginForm = reactive({
    username: 'admin',
    password: '111111',
  });

  const userStore = useUserStore();

  const login = ()=>{
    userStore.userLogin(loginForm);
  }
</script>

<template>
  <div class="login_container">
    <el-row :gutter="20">
      <el-col :span="12" :offset="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>硅谷甄选</h2>
          <el-form-item>
            <el-input
              v-model="loginForm.username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              v-model="loginForm.password"
              :prefix-icon="Lock"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" size="default" @click="login">
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
        margin: 20px 0px;
      }

      .login_btn {
        width: 100%;
      }
    }
  }
</style>
