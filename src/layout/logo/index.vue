<script lang="ts" setup>
  import useSettingStore from '@/store/modules/setting.ts';
  import setting from '@/setting';

  const settingStore = useSettingStore();
</script>

<template>
  <div class="logo">
    <img :src="setting.logo" alt="硅谷甄选" v-if="!setting.logoHidden" />
    <p v-if="!settingStore.fold">{{ setting.title }}</p>
  </div>
</template>

<style lang="scss" scoped>
  .logo {
    width: 100%;
    height: $base-menu-logo-height;
    color: white;
    display: flex;
    align-items: center;
    font-size: $base-menu-logo-fontSize;
    justify-content: center;

    img {
      width: 40px;
      height: 40px;
    }
    p {
      margin-left: 10px;
    }
  }
</style>
