<template>
  <div class="rate--input">
	<ROInputWithAddon :crypto="crypto" :currency="currency" @input="handleInput" :addon="'rate'" />
	<span class="text-gray-400">
	  Official rate: <span class="font-medium text-black">1 {{ crypto }} = {{ currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '₦' }}{{ rateVal }}</span>
	</span>
  </div>
</template>

<script setup>
	import {useStore} from "~/stores";
	import {watch} from "vue";

	const emit = defineEmits([
	  'input'
	])

	const props = defineProps({
	  inputValue: String,
	  crypto: String,
	  currency: String,
	  rateVal: String
	})

	const store = useStore()
	const input1 = ref(null)
	const handleInput = (e) => {
	  emit('input', e)
	}
	watch(() => props.inputValue, () => input1.value = props.inputValue)
</script>

<style scoped>

</style>