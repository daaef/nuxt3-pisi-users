<script setup>
import {useStore} from "~/stores";
const store = useStore()
const selectedHistory = ref();
const display = ref(false);
const display2 = ref(false);
</script>

<template>
  <div class="page-content">
    <Button class="primary" label="Create sell offer" @click.prevent="display2 = true" />
    <h4 class="header--title">History</h4>

	<DataTable class="mt-7 history--table" :value="store.history" :paginator="true" :rows="10"
			   v-model:selection="selectedHistory" selectionMode="single" dataKey="key"
			   stateStorage="local" stateKey="dt-history" responsiveLayout="scroll">
	  <Column field="sentAmount" header="Sent" :sortable="true" style="width:33.3%">
		<template #body="slotProps">
		  <div class="sent-info flex items-center">
			<div class="mr-3">
			  <i class="iconly-Arrow-Up icli text-primary"></i>
			</div>
			<div class="amount-up">
			  <div class="currency--holder">
				<ROCurrency type="currency" :icon="store[slotProps.data.sendCurrency]" />
			  </div>
			  <div class="cost mt-2">{{ store[slotProps.data.sendCurrency].icon }}{{ slotProps.data.sentAmount }}</div>
			</div>
		  </div>
		</template>
	  </Column>
	  <Column field="date" :sortable="true" style="width:33.3%">
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
	  <Column field="recieveAmount" header="Received" :sortable="true" style="width:33.333%">
		<template #body="slotProps">
		  <div class="received-info flex justify-end items-center">
			<div class="amount-down text-right">
			  <div class="currency--holder">
				<ROCurrency type="currency" :icon="store[slotProps.data.recieveCurrency]" />
			  </div>
			  <div class="cost mt-2">{{ store[slotProps.data.recieveCurrency].icon }}{{ slotProps.data.recieveAmount }}</div>
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
	<RORequestOffer :dialog="display" @closeModal="display = false" />
	<ROMakeOffer :dialog="display2" @closeModal="display2 = false" />
  </div>
</template>

<style lang="scss">
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