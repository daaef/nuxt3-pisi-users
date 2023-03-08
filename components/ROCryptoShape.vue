<template>
	<i :class="`crypto-shape cf cf-${currency?.abbreviation?.toLowerCase()}`"/>
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
		margin-right: 5px;
		font-size: 2rem;
	}
</style>