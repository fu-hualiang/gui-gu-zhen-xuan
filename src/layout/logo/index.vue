<script lang="ts" setup>
  import setting from '@/setting';
</script>

<template>
  <div class="logo">
    <img :src="setting.logo" alt="硅谷甄选" v-if="!setting.logoHidden" />
    <p>{{ setting.title }}</p>
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
    padding: 20px;

    img {
      width: 40px;
      height: 40px;
    }
    p {
      margin-left: 10px;
    }
  }
</style>
