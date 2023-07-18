<script lang="ts" setup>
  defineProps({
    prefix: {
      type: String,
      default: '#icon-',
    },
    name: String,
    color: {
      type: String,
      default: '',
    },
    width:{
      type: String,
      default: '16px'
    }
  });
</script>

<template>
  <svg>
    <use :xlink:href="prefix + name" :fill="color" :width="width"></use>
  </svg>
</template>

<style lang="scss" scoped></style>
