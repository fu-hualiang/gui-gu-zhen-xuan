<script setup lang="ts">
  import useSettingStore from '@/store/modules/setting.ts';
  import { nextTick, ref, watch } from 'vue';
  const settingStore = useSettingStore();


  const display = ref<boolean>(true)
  watch(settingStore.refreshInfo,(refresh)=>{
    if (refresh){
      display.value=false;
      nextTick(()=>{
        display.value=true;
      })
      settingStore.finishRefresh();
    }
  })
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if='display'/>
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
  .fade-enter-from {
    opacity: 0;
  }

  .fade-enter-active {
    transition: all 0.5s;
  }

  .fade-enter-to {
    opacity: 1;
  }
</style>
