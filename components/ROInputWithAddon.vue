<template>
  <div class="">
    <h4 class="font-bold">{{ label }}</h4>
    <div class="p-inputgroup mt-1">
      <Dropdown v-if="!addon" :disabled="drop" @change="handleChange" class="addon" v-model="selected" :options="type === 'currency' ? currencies : coins" optionLabel="name" :filter="coins?.length" placeholder="Select a Currency">
        <template #value="slotProps">
          <div class="country-item country-item-value" v-if="slotProps.value">
            <ROCurrency :icon="slotProps.value" :type="coins?.length ? '' : 'currency'"/>
          </div>
          <span v-else>
            {{slotProps.placeholder}}
        </span>
        </template>
        <template #option="slotProps">
          <div class="flex justify-between items-center w-full">
            <ROCurrency :icon="slotProps.option" :type="coins?.length ? '' : 'currency'"/>
            <p class="ml-5 capitalize">{{slotProps.option.network}}</p>
          </div>
        </template>
      </Dropdown>
      <div class="addon rate" v-if="addon === 'rate'">
        <span class="flex items-center">
         <span class="font-bold">1</span> <i :class="`cf cf-${selCrypto?.toLowerCase()} ml-2`" /></span>
        <span class="text-2xl text-primary font-bold"> = </span>
      </div>
      <div class="addon" v-if="addon === 'text'" >
        <ROCurrency type="currency" :icon="selectedCurrency" />
      </div>
      <InputNumber :disabled="input" @input="handleInput" v-if="addon === 'rate'" v-model="input1" mode="decimal" :minFractionDigits="2" :maxFractionDigits="5" :prefix="selCurrency"/>
        <InputNumber :disabled="input" @input="handleInput" v-else inputId="minmaxfraction" v-model="input1" mode="decimal" :minFractionDigits="2" :maxFractionDigits="10" />
      </div>
  </div>
</template>

<script setup>
import {watch} from "vue";

	const emit = defineEmits([
	  'input',
	  'change'
	])
	const props = defineProps({
	  currencies: Array,
	  coins: Array,
	  label: String,
	  type: String,
	  addon: String,
	  selectedCurrency: String,
	  input: Boolean,
	  drop: Boolean,
	  inputValue: String,
	  currency: String,
	  crypto: String
	})

	const selected = ref( props?.drop ? useAuth()?.$state?.user?.country?.currency : null)
	const input1 = ref(null)
	const handleInput = (e) => {
		emit('input', e.value)
	}
	const handleChange = (e) => {
		emit('change', e.value)
	}
	const selCurrency = ref('₦')
	const selCrypto = ref('eth')
	watch(() => props.inputValue, () => input1.value = props.inputValue)
	watch(() => props.currency, () => {
	  if (props.currency === 'NGN'){
		selCurrency.value = '₦'
	  } else if(props.currency === 'EUR'){
		selCurrency.value = '€'
	  } else selCurrency.value = '$'
	})
	watch(() => props.crypto, () => {
	  selCrypto.value = props.crypto
	})
</script>

<style lang="scss">
.custom-input {
  .p-inputgroup {
	.p-dropdown .p-dropdown-trigger{
	  width: 1.5rem;
	}
	span.p-dropdown-label.p-inputtext{
	  padding: 0 0;
	}
	.addon {
	  &.rate {
		width: 50% !important;
		display: flex;
		justify-content: space-between;
	  }
	}
  }
}
</style>