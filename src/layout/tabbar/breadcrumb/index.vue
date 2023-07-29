<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import useSettingStore from '@/store/modules/setting.ts';

  const route = useRoute();
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
    <el-breadcrumb-item
      v-for="(item, index) in route.matched"
      :key="index"
      v-show="!item.meta.hidden"
    >
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss"></style>
