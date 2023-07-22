<script lang="ts" setup>
  import Logo from './logo/index.vue';
  import Menu from './menu/index.vue';

  import useUserStore from '@/store/modules/user';

  const userStore = useUserStore();
</script>

<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 菜单 -->
      <el-scrollbar class="scrollbar">
        <el-menu mode="vertical" background-color="#001529" text-color="white" class="el-menu">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">456</div>
    <!-- 内容展示区域 -->
    <div class="layout_main">789</div>
  </div>
</template>

<style lang="scss" scoped>
  .layout_container {
    width: 100%;
    height: 100vh;
    background: purple;

    .layout_slider {
      width: $base-menu-width;
      height: 100vh;
      background: $base-menu-background;
      color: white;

      .scrollbar {
        width: 100%;
        height: calc(100vh - $base-menu-logo-height);

        .el-menu{
          border-right: none;
        }
      }
    }

    .layout_tabbar {
      position: fixed;
      top: 0px;
      left: $base-menu-width;
      width: calc(100% - $base-menu-width);
      height: $base-tabbar-height;
      background: goldenrod;
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
    }
  }
</style>
