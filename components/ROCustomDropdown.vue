<template>
  <div class="custom-dropdown">
	<h4 class="font-bold">{{ label }}</h4>
  <Dropdown class="addon" v-model="selected" :options="type === 'currency' ? currencies : coins" optionLabel="name" :filter="true" placeholder="Select a Currency">
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
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  currencies: Array,
  coins: Array,
  label: String,
  type: String,
  selected: Object
})

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const selected = ref(null)
const selectedData = ref({
  id:"56d62338-2744-4409-ac96-acb0eda66f1d",
  name:"US Dollar",
  currencyCode:"USD",
  countryId:1,
})
const selectedCrypto = ref({
  abbreviation:"ETH",
  id:"8e6cd915-0afc-410e-a220-93132e64d7b9",
  name:"Ether",
  network:"ETHEREUM"
})
  const input3 = ref('')
</script>

<style lang="scss" scoped>
	.custom-dropdown {
	  .p-dropdown {
		background: #EEEEEE;
		border-radius: 8px;
		border: none;
		box-shadow: none !important;
	  }
	}
</style>