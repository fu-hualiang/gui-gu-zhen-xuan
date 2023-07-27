<script lang="ts" setup>
  import { useRouter } from 'vue-router';

  defineProps(['menuList']);

  const router = useRouter();

  const goRouter = (name: string) => {
    router.push({
      name: name,
    });
  };
</script>

<script lang="ts">
  export default {
    name: 'Menu',
  };
</script>

<template>
  <template v-for="item in menuList" :key="item.name">
    <template v-if="!item.children">
      <!-- 不折叠 -->
      <el-menu-item :index="item.name" v-if="!item.meta.hidden" @click="goRouter(item.name)">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <template v-else>
      <!-- 折叠 -->
      <el-sub-menu :index="item.name" v-if="!item.meta.hidden">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
      <!-- 忽略这一级菜单 -->
      <template v-else>
        <Menu :menuList="item.children"></Menu>
      </template>
    </template>
  </template>
</template>

<style lang="scss" scoped></style>
