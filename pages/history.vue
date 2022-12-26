<script setup>
import {useStore} from "~/stores";

const store = useStore()
const selectedCustomer2 = ref();
const display = ref(false);
const display2 = ref(false);
</script>

<template>
  <div class="page-content">
    <Button class="primary" label="Create sell offer" @click.prevent="display2 = true" />
    <h4 class="header--title">Buy</h4>
    <LazyROStack />

	<DataTable :value="store.payments" :paginator="true" :rows="10"
			   v-model:selection="selectedCustomer2" selectionMode="single" dataKey="id"
			   stateStorage="local" stateKey="dt-state-demo-local" responsiveLayout="scroll">
	  <Column field="amount" header="Price" :sortable="true" style="width:25%">
		<template #body="slotProps">
		  <div class="flex items-center">
			<div class="curr-shape">
			  <ROCurrencyShape :currency="slotProps.data.country" />
			</div>
			<div class="flex flex-col">
			  <span class="text-sm font-bold">{{slotProps.data.country}}</span>
			  <span class="font-bold">{{slotProps.data.amount}}</span>
			</div>
		  </div>
		</template>
	  </Column>
	  <Column field="name" header="Sender" :sortable="true" style="width:25%">
	  </Column>
	  <Column field="rate" header="Rate" :sortable="true" style="width:25%">
	  </Column>
	  <Column field="payState" header="" :sortable="true" style="width:25%">
		<template #body="slotProps">
		  <Button @click.prevent="slotProps.data.payState === 'Request' ? (display = true) : ''" :class="`primary `" :label="slotProps.data.payState" />
		</template>
	  </Column>
	  <template #empty>
		No Data found.
	  </template>
	</DataTable>
	<RORequestOffer :dialog="display" @closeModal="display = false" />
	<ROMakeOffer :dialog="display2" @closeModal="display2 = false" />
  </div>
</template>

<style scoped>
</style>