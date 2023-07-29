<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  import Logo from './logo/index.vue';
  import Menu from './menu/index.vue';
  import Tabbar from './tabbar/index.vue';
  import Main from './main/index.vue';
  import useSettingStore from '@/store/modules/setting.ts';
  import { constantRoute } from '@/router/routers';

  const settingStore = useSettingStore();
  const route = useRoute();
</script>

<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="{ fold: !!settingStore.fold }">
      <Logo />
      <!-- 菜单 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="route.name"
          mode="vertical"
          background-color="#001529"
          text-color="white"
          class="el-menu"
          :collapse="settingStore.fold"
          :collapse-transition="false"
        >
          <Menu :menuList="constantRoute" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{ fold: !!settingStore.fold }">
      <Tabbar />
    </div>
    <!-- 内容展示区域 -->
    <div class="layout_main" :class="{ fold: !!settingStore.fold }">
      <Main />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
      width: $base-menu-width;
      height: 100vh;
      background: $base-menu-background;
      color: white;
      transition: all 0.1s;

      .scrollbar {
        width: 100%;
        height: calc(100vh - $base-menu-logo-height);

        .el-menu {
          border-right: none;
        }
      }

      &.fold {
        width: $base-menu-fold-width;
      }
    }

    .layout_tabbar {
      position: fixed;
      top: 0px;
      left: $base-menu-width;
      width: calc(100% - $base-menu-width);
      height: $base-tabbar-height;
      transition: all 0.1s;

      &.fold {
        width: calc(100vw - $base-menu-fold-width);
        left: $base-menu-fold-width;
      }
    }

    .layout_main {
      position: absolute;
      width: calc(100% - $base-menu-width);
      height: calc(100vh - $base-tabbar-height);
      background: greenyellow;
      left: $base-menu-width;
      top: $base-tabbar-height;
      padding: 20px;
      overflow: auto;
      transition: all 0.1s;

      &.fold {
        width: calc(100vw - $base-menu-fold-width);
        left: $base-menu-fold-width;
      }
    }
  }
</style>