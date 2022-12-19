<template>
  <main class="main">
    <ROSideBar />
    <slot />
  </main>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
</script>

<style scoped>

</style>