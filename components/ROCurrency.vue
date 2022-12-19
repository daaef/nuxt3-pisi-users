<template>
  <span class="a-icon flex items-center">
    <i :class="`cf cf-${icon.toLowerCase()} text-2xl mr-2`" />
    {{ name }}
  </span>
</template>

<script lang="ts" setup>
  defineProps({
    icon: String,
    name: String
  })
</script>

<style scoped>

</style>