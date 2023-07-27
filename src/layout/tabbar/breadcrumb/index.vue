<script setup lang="ts">
  import useSettingStore from '@/store/modules/setting.ts';

  const settingStore = useSettingStore();
  const changeIcon = () => {
    settingStore.switchFold();
  };
</script>

<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <Expand v-if="settingStore.fold" />
    <Fold v-else />
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss"></style>
