<script setup>
import {useStore} from "~/stores";
import ROCreateSellOffer from "../components/ROCreateSellOffer";

const store = useStore()
const selectedCustomer2 = ref();
const display = ref(false);
const display2 = ref(false);
</script>

<template>
  <div class="page-content">
	<ROCreateSellOffer />
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
  </div>
</template>

<style lang="scss">
.p-datatable {
  .p-datatable-tbody {
	& > tr {
	  position: relative;
	  z-index: 2;
	  &:after {
		content: '';
		z-index: 0;
		height: 69.5px;
	  }
	  &.p-highlight {
		position: relative;
		padding-left: 5px;
		color: #3063e9;
		border-radius: 15px;

		td {
		  position: relative;
		  z-index: 2;
		  background: #E8E8F3;

		  &:first-of-type {
			left: 5px;
			border-top-left-radius: 15px;
			border-bottom-left-radius: 15px;
		  }

		  &:last-of-type {
			border-top-right-radius: 15px;
			border-bottom-right-radius: 15px;
		  }
		}

		&:after {
		  content: '';
		  position: absolute;
		  width: calc(100% - 20px);
		  background: #3063e9;
		  left: 0;
		  border-radius: 15px;
		}
	  }
	}
  }
}
</style>