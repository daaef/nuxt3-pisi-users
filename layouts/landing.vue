<template>
  <slot />
</template>

<script lang="ts" setup>
const openNav =ref(false)
const route = useRoute()
watch(() => route.query, () => openNav.value = false)
</script>