<template>
	<img class="crypto-shape" :src="currency?.imgUri" alt="Crypto logo">
</template>

<script lang="ts" setup>
  defineProps({
		currency: Object,
  })
</script>

<style lang="scss" scoped>
	.crypto-shape {
	  width: 45px;
	  min-width: 45px;
	  height: 45px;
	  min-height: 45px;
	}
</style>