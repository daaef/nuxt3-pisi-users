<template>
  <span class="a-icon flex items-center" v-if="type === 'currency'">
    <span :class="`currency--circle ${currentIcon.name?.toLowerCase()} mr-2 rounded-circle`">{{ currentIcon.icon }}</span>
    {{ currentIcon.name }}
  </span>
  <span v-else class="a-icon flex items-center">
    <i :class="`cf cf-${icon.abbreviation?.toLowerCase()} mr-2`" />
    {{ icon.abbreviation }}
  </span>
</template>

<script lang="ts" setup>
  import {useStore} from "~/stores";

  const props = defineProps({
    icon: Object,
    name: String,
    type: String
  })
  const store = useStore()
  const currentIcon = computed(() => {
	if (props?.icon?.icon) return props.icon
	return store.countryCurr.find(country => country.name === props.icon.currencyCode)
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