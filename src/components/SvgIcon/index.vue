<script lang="ts" setup>
  defineProps({
    prefix: {
      type: String,
      default: '#icon-',
    },
    name: String,
  });
</script>

<template>
  <svg>
    <use :xlink:href="prefix+name"></use>
  </svg>
</template>

<style lang="scss" scoped></style>
