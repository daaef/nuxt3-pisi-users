<template>
  <div class="custom-dropdown">
	<h4 class="font-bold">{{ label }}</h4>
  <Dropdown class="addon" v-model="selectedData" :options="type === 'currency' ? currencies : coins" optionLabel="name" :filter="true" placeholder="Select a Country">
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
		<p class="ml-5 capitalize">{{slotProps.option.icon}}</p>
	  </div>
	</template>
  </Dropdown>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  currencies: Array,
  coins: Array,
  label: String,
  type: String
})

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

  const selectedData = ref(
	  {
		id: 1,
		coin: "Bitcoin",
		name: "BTC",
		icon: "btc",
		selected: false,
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