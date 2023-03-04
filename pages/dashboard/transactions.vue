<script setup>
import {useStore} from "~/stores";
import {transactionStore} from "~/stores/transactions";
const transStore = transactionStore()

const sell = computed(() => transStore.sell)
const buy = computed(() => transStore.buy)

const store = useStore()
const display2 = ref('')
await transStore.fetchBuy({start: 0})
await transStore.fetchSale({start: 0})
</script>

<template>
  <div class="page-content">
	<ROCreateSellOffer />
    <h4 class="header--title">Ongoing transactions</h4>
		<div class="transaction--tabs tabs mt-10">
			<nuxt-link
				:exact-active-class="'tab-active'"
				:to="`/dashboard/transactions/`"
				class="tab tab-lifted"
			>
			<i class="iconly-Upload icli mr-2"></i> <span>Sell</span></nuxt-link>
			<nuxt-link
				:exact-active-class="'tab-active'"
				:to="`/dashboard/transactions/buy`"
				class="tab tab-lifted"
			><i class="iconly-Download icli mr-2"></i>  Buy</nuxt-link>
		</div>
		<NuxtPage :sell="sell" :buy="buy" />
  </div>
</template>

<style lang="scss">
	.transaction--tabs {
		a {
		  font-size: 1.2rem;
		}
	  i {
		font-size: 1.2rem;
	  }
	  .tab {
		height: 2.5rem;
	  }
	}
</style>