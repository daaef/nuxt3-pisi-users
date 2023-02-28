<script setup>
import {useStore} from "~/stores";
import {transactionStore} from "~/stores/transactions";
import {useUtils} from "~/composables/utils";

const store = useStore()
const transStore = transactionStore()

const offers = computed(() => transStore.offers)
const selectedOffer = ref(null);
const display = ref(false);
const display2 = ref(false);
const auth = useAuth()
const utils = useUtils()
const openOffer = (e) => {
	selectedOffer.value = e
	display.value = true
}
</script>

<template>
  <div class="page-content">
	<ROCreateSellOffer />
    <h4 class="header--title">Buy</h4>
    <LazyROStack />
	<DataTable :loading="transStore.loading" :value="transStore.offers" :paginator="true" :rows="10"
			   v-model:selection="selectedOffer" selectionMode="single" dataKey="id"
			   stateStorage="local" stateKey="dt-state-demo-local" responsiveLayout="scroll">
	  <Column field="amountInCrypto" header="Price" :sortable="true" style="width:25%">
		<template #body="slotProps">
		  <div class="flex items-center">
			<div class="curr-shape">
			  <ROCryptoShape :currency="utils?.getCryptoCurrency(slotProps?.data?.cryptoCurrencyId)" />
			</div>
			<div class="flex flex-col">
			  <span class="text-sm font-bold">{{utils?.getCryptoCurrency(slotProps?.data?.cryptoCurrencyId).blockchain}}</span>
			  <span class="font-bold">{{slotProps?.data?.amountInCrypto}}</span>
			</div>
		  </div>
		</template>
	  </Column>
	  <Column field="createdBy" header="Sender" :sortable="true" style="width:25%">
			<template #body="slotProps">
				{{ slotProps?.data?.createdBy?.firstName }}	{{ slotProps?.data?.createdBy?.lastName }}
			</template>
	  </Column>
	  <Column field="feeAmount" header="Rate" :sortable="true" style="width:25%">
			<template #body="slotProps">
				1 {{ utils?.getCryptoCurrency(slotProps?.data?.cryptoCurrencyId).abbreviation }} =	{{ slotProps?.data?.tokenPricePerUnit }} {{
					utils?.getCurrency(slotProps?.data?.currencyId).currencyCode }}
			</template>
	  </Column>
	  <Column field="status" header="" :sortable="true" style="width:25%" />
	  <Column field="status" header="" :sortable="true" style="width:25%">
		<template #body="slotProps">
		  <Button @click.prevent="openOffer(slotProps?.data)" class="primary"
							label="Request" />
		</template>
	  </Column>
	  <template #empty>
		No Data found.
	  </template>
	</DataTable>
	<RORequestOffer :dialog="display" :offer="selectedOffer" @closeModal="display = false" />
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