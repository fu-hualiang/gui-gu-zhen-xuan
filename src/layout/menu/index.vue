<script lang="ts" setup>
  defineProps(['menuList']);
</script>

<script lang="ts">
  export default {
    name: 'Menu',
  };
</script>

<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 不折叠 -->
    <el-menu-item :index="item.path" v-if="!item.children">
      <template #title>
        <span>icon-</span>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 折叠 -->
    <el-sub-menu :index="item.path" v-else>
      <template #title>
        <span>icon-</span>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<style lang="scss" scoped></style>
