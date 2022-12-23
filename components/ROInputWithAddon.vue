<template>
  <div class="">
  <h4 class="font-bold">From</h4>
  <div class="p-inputgroup mt-1">
    <Dropdown class="addon" v-model="selectedData" :options="type === 'currency' ? currencies : coins" optionLabel="name" :filter="true" placeholder="Select a Country">
      <template #value="slotProps">
        <div class="country-item country-item-value" v-if="slotProps.value">
          <ROCurrency :icon="slotProps.value.name" :name="slotProps.value.name" :type="coins?.length ? '' : 'currency'"/>
        </div>
        <span v-else>
          {{slotProps.placeholder}}
      </span>
      </template>
      <template #option="slotProps">
        <div class="flex justify-between items-center w-full">
          <ROCurrency :icon="slotProps.option.icon" :name="slotProps.option.name" :type="coins?.length ? '' : 'currency'"/>
          <p class="ml-5 capitalize">{{slotProps.option.icon}}</p>
        </div>
      </template>
    </Dropdown>
    <InputNumber inputId="minmaxfraction" v-model="input3" mode="decimal" :minFractionDigits="2" :maxFractionDigits="5" />
  </div>

  </div>
</template>

<script lang="ts" setup>
defineProps({
  currencies: Array,
  coins: Array,
  name: String,
  type: String
})
const selectedData = ref(
    {
      id: 1,
      coin: "Bitcoin",
      name: "BTC",
      icon: "btc",
      selected: false,
    })
const input3 = ref('')
const selected = ref('')
</script>

<style>

</style>