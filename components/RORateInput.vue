<template>
  <div class="rate--input">
	<ROInputWithAddon :addon="'rate'" />
	<span class="text-gray-400">
	  Official rate: <span class="font-medium text-black">$1 = ₦433.72</span>
	</span>
  </div>
</template>

<script lang="ts" setup>
	import {useStore} from "~/stores";

	const store = useStore()
</script>

<style scoped>

</style>