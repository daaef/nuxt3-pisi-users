<template>
  <div class="rate--input">
		<ROInputWithAddon :crypto="crypto" :currency="currency" @input="handleInput" :addon="'rate'" />
		<span class="text-gray-400 mt-2 block">
			Rate: <span class="font-medium text-black">{{ cryptoValue }} {{crypto}} = {{ store[currency.toLowerCase()].icon }}{{ input1 }}</span>
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
	  cryptoValue: String,
	  crypto: String,
	  currency: String
	})

	const store = useStore()
	const input1 = ref(null)
	const handleInput = (e) => {
		input1.value = e
	  emit('input', e)
	}
	watch(() => props.inputValue, () => input1.value = props.inputValue)
</script>

<style scoped>

</style>