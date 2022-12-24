<template>
    <span :class="`currency--circle large ${currency?.toLowerCase()} mr-2 rounded-circle`">
	  {{
		currency === 'NGN' ? '₦' :
			currency === 'EUR' ? '€' : '$'
	  }}</span>
</template>

<script lang="ts" setup>
  defineProps({
	currency: String,
  })
</script>

<style lang="scss" scoped>
	.currency--circle {
	  width: 25px;
	  min-width: 25px;
	  height: 25px;
	  min-height: 25px;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  color: #fafafa;
	  border-radius: 50%;
	  &.large {
		height: 35px;
		width: 35px;
		font-size: 1.5rem;
	  }
	  &.eur {
		background: #51E7DE;
	  }
	  &.ngn {
		background: #0A6A30;
	  }
	  &.usd	 {
		background: #2A58FA;
	  }
	}
</style>