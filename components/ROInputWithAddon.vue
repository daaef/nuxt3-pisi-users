<template>
  <div class="">
  <h4 class="font-bold">{{ label }}</h4>
  <div class="p-inputgroup mt-1">
    <Dropdown v-if="!addon" class="addon" v-model="selected" :options="type === 'currency' ? currencies : coins" optionLabel="name" :filter="coins?.length" placeholder="Select a Currency">
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
	  <span class="text-gray-500">$1</span>
	  <span class="text-2xl text-primary font-bold"> = </span>
	</div>
	<div class="addon" v-if="addon === 'text'" >
		<ROCurrency type="currency" :icon="selectedCurrency" />
	</div>
	<InputNumber v-if="addon === 'rate'" v-model="input1" mode="decimal" :minFractionDigits="2" :maxFractionDigits="5" prefix="₦"/>
    <InputNumber v-else inputId="minmaxfraction" v-model="input3" mode="decimal" :minFractionDigits="2" :maxFractionDigits="5" />
  </div>

  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  currencies: Array,
  coins: Array,
  label: String,
  type: String,
  addon: String,
  selectedCurrency: String
})
const selected = ref(null)
const input3 = ref('')
const input1 = ref('700')
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