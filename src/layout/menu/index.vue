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
  <template v-for="item in menuList" :key="item.path">
    <!-- 不折叠 -->
    <template v-if="!item.children">
      <el-menu-item :index="item.path" v-if="!item.meta.hidden" @click="goRouter(item.name)">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 折叠 -->
    <template v-else>
      <el-sub-menu :index="item.path" v-if="!item.meta.hidden">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </template>
</template>

<style lang="scss" scoped></style>
