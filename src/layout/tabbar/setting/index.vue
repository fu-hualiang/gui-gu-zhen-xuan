<script setup lang='ts'>

</script>

<template>
  <el-button size="small" icon="Refresh" circle></el-button>
  <el-button size="small" icon="FullScreen" circle></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <el-avatar src="https://v2.cn.vuejs.org/images/logo.svg" size="small" style='margin-left: 30px'></el-avatar>
  <el-dropdown>
        <span class="el-dropdown-link">
          Dropdown List
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang='scss'>

</style>