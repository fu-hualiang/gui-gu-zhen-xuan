<script setup lang="ts">
  import useSettingStore from '@/store/modules/setting.ts';
  import useUserStore from '@/store/modules/user.ts';
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();
  const settingStore = useSettingStore();
  const userStore = useUserStore();

  // 刷新
  const refresh = () => {
    settingStore.startRefresh();
  };

  //全屏
  const fullScreen = () => {
    const status = document.fullscreenElement;
    if (!status) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  };

  //退出
  const logout = () => {
    userStore.userLogout();
    router.push({
      name: 'Login',
      query: { redirect: route.path },
    });
  };
</script>

<template>
  <el-button size="small" icon="Refresh" circle @click="refresh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <el-avatar
    :src="userStore.avatar"
    size="default"
    style="margin-left: 30px; margin-right: 10px"
  ></el-avatar>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss"></style>