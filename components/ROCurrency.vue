<template>
  <span class="a-icon flex items-center" v-if="type === 'currency'">
    <span :class="`${name?.toLowerCase()} mr-2 rounded-circle`">{{ icon }}</span>
    {{ name }}
  </span>
  <span v-else class="a-icon flex items-center">
    <i :class="`cf cf-${name?.toLowerCase()} mr-2`" />
    {{ name }}
  </span>
</template>

<script lang="ts" setup>
  defineProps({
    icon: String,
    name: String,
    type: String
  })
</script>

<style scoped>

</style>