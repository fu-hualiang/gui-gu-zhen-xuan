<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
  </div>
  <Test></Test>
</template>

<script setup lang="ts">
  import { Plus } from '@element-plus/icons-vue';
  import Test from '@/components/Test.vue';
</script>

<style scoped lang="scss"></style>
