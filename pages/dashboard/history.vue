<script setup>
import {useStore} from "~/stores";
import {useRouter} from "nuxt/app";
import {info} from "../../components/ROToastAndConfirmService";
const store = useStore()
const router = useRouter();
const selectedHistory = ref();
const display = ref(false);
const display2 = ref(false);
const rowClicked = (e)=> {
  router.push(`/dashboard/history/${e.data.key}`)
}

</script>

<template>
  <div class="page-content history-content">
	<div class="page--data">
	  <ROCreateSellOffer />
	  <h4 class="header--title">History</h4>

	  <DataTable @row-click="rowClicked" class="mt-7 history--table" :value="store.history" :paginator="true" :rows="7"
				 v-model:selection="selectedHistory" selectionMode="single" dataKey="key"
				 stateStorage="local" stateKey="dt-history" responsiveLayout="scroll">
		<Column field="sentAmount" header="Sent" :sortable="true" style="min-width:204px">
		  <template #body="slotProps">
			<div class="sent-info flex items-center">
			  <div class="mr-3">
				<i class="iconly-Arrow-Up icli text-primary"></i>
			  </div>
			  <div class="amount-up">
				<div class="currency--holder">
				  <ROCurrency type="currency" :icon="store[slotProps.data.sendCurrency]" />
				</div>
				<div class="cost mt-1">{{ store[slotProps.data.sendCurrency].icon }}{{ slotProps.data.sentAmount }}</div>
			  </div>
			</div>
		  </template>
		</Column>
		<Column field="date" :sortable="true" style="min-width:204px">
		  <template #header>
			<img src="/exchange-primary.svg" alt="exchnage image">
		  </template>
		  <template #body="slotProps">
		  <div class="sent-info text-center flex flex-col justify-center">
			<div class="">{{ slotProps.data.id }}</div>
			<div class="text-gray-500">{{ $dayjs(slotProps.data.date).format('MMMM DD, YYYY') }}</div>
		  </div>
		</template>
		</Column>
		<Column field="recieveAmount" header="Received" :sortable="true" style="min-width:204px">
		  <template #body="slotProps">
			<div class="received-info flex justify-end items-center">
			  <div class="amount-down text-right">
				<div class="currency--holder">
				  <ROCurrency type="currency" :icon="store[slotProps.data.recieveCurrency]" />
				</div>
				<div class="cost mt-1">{{ store[slotProps.data.recieveCurrency].icon }}{{ slotProps.data.recieveAmount }}</div>
			  </div>
			  <div class="ml-3">
				<i class="iconly-Arrow-Down icli text-2xl text-success"></i>
			  </div>
			</div>
		  </template>
		</Column>
		<template #empty>
		  No Data found.
		</template>
	  </DataTable>
	</div>
	<NuxtPage />
  </div>
  <ROMakeOffer :dialog="display2" @closeModal="display2 = false" />
</template>

<style lang="scss">
	.history-content {
	  display: flex;
	  .page--data {
		min-width: calc(100% - 380px);
		flex: 1;
	  }
	  .page-extension {
		width: fit-content;
		transition: .3s ease-in-out;
		.history-info {
		  width: 380px;
		  padding: 40px 20px;
		  height: 100vh;
		  background: #E8E8F3;
		  display: flex;
		  flex-direction: column;
		  justify-content: space-between;
		  .pi-times {
			font-size: 1.5rem;
		  }
		}
	  }
	  &:has(.history-info){
	  	padding: 0;
		.page--data {
		  padding: 20px;
		  height: 100vh;
		  overflow-y: auto;
		}
	  }
	}
	.sent-info, .received-info {
	  i {
		font-size: 1.7rem;
	  }
	  .cost {
		font-size: 1.3rem;
	  }
	}
	.received-info {
	  .amount-down {
		display: flex;
		align-items: flex-end;
		flex-direction: column;

	  }
	}
	.history--table {
	  .p-sortable-column {
		.p-column-header-content {
		  justify-content: center;
		  span {
			color: #3063E9;
		  }
		}
		&:first-of-type {
		  .p-column-header-content {
			justify-content: flex-start;
		  }
		}
		&:last-of-type {
		  .p-column-header-content {
			justify-content: flex-end;
		  }
		}
	  }
	}
</style>