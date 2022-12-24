<template>
  <span class="a-icon flex items-center" v-if="type === 'currency'">
    <span :class="`currency--circle ${icon.name?.toLowerCase()} mr-2 rounded-circle`">{{ icon.icon }}</span>
    {{ icon.name }}
  </span>
  <span v-else class="a-icon flex items-center">
    <i :class="`cf cf-${icon.name?.toLowerCase()} mr-2`" />
    {{ icon.name }}
  </span>
</template>

<script lang="ts" setup>
  defineProps({
    icon: Object,
    name: String,
    type: String
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