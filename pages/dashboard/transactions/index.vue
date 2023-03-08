<script setup>
import {useStore} from "~/stores";
import {useUtils} from "~/composables/utils";
defineProps({
	sell: Array,
})

const store = useStore()
const display2 = ref('')
</script>

<template>
  <div class="tab-content mt-10">
		<div class="my--offers" v-for="trans in sell" :key="trans?.id">
			<div class="flex justify-between px-1">
				<div class="inline-flex items-center">
				<i class="iconly-Arrow-Up icli text-primary mr-1"></i>
				<h3 class="text-primary text-sm font-bold">Sent</h3>
				</div>

				<div class="inline-flex items-center">
				<i class="iconly-Arrow-Down icli text-success mr-1"></i>
				<h3 class="text-primary text-sm font-bold">To receive</h3>
				</div>
			</div>
			<div class="flex justify-between mt-3">
				<ROCurrency :icon="useUtils().getCryptoCurrency(trans?.cryptoCurrencyId)" />

				<ROCurrency type="currency" :icon="useUtils().getCurrency(trans?.currencyId)" />
			</div>
			<div class="flex justify-between mt-1">
				<p class="font-medium">{{ trans?.amountInCrypto }} {{ useUtils().getCryptoCurrency(trans?.cryptoCurrencyId)?.abbreviation }}</p>
				<h4 class="font-medium">
					{{ store[useUtils().getCurrency(trans?.currencyId)?.currencyCode?.toLowerCase()]?.icon }}
					{{ (trans?.tokenPricePerUnit * trans?.amountInCrypto).toFixed(4) }}
				</h4>
			</div>
			<div class="flex justify-between mt-1">
				<div class="border-gray-400 border-t border-dashed w-16" />
				<div class="border-gray-400 border-t border-dashed w-16" />
			</div>
			<div class="flex justify-center mt-1">
				<p class="text-sm text-gray-400">{{ $dayjs(trans?.createdAt).format('MMMM DD, YYYY') }}</p>
			</div>
			<div class="flex justify-center mt-3">
				<img
					src="/transfer--arrows.png"
					alt="Transfer arrows"
					class="transfer-arrows"
				/>
			</div>
			<div class="flex justify-center mt-3">
				<span>
					Rate: {{ trans?.amountInCrypto }} {{ useUtils().getCryptoCurrency(trans?.cryptoCurrencyId)?.abbreviation }}
					= {{ store[useUtils().getCurrency(trans?.currencyId)?.currencyCode?.toLowerCase()]?.icon }}{{ trans?.tokenPricePerUnit }}</span>
			</div>
<!--			<div class="flex justify-center mt-2">-->
<!--				<span class="text-gray-400">Official rate: $1 = 433.72</span>-->
<!--			</div>-->
<!--			<div class="flex trans&#45;&#45;card items-center justify-between mt-3">
				<p class="text-sm flex">
				<span class="block mr-2">@jacerodman</span>
				</p>
				<span class="block mr-2 text-primary">Confirmed received</span>
				<p class="text-sm">$100.00</p>
			</div>
			<div class="flex trans&#45;&#45;card items-center justify-between mt-2">
				<p class="text-sm flex">
				<span class="block mr-2">@tundeojigho</span>
				</p>
				<span class="block mr-2 text-success">Confirmed <i class="pi pi-check-circle"></i></span>
				<p class="text-sm">$70.00</p>
			</div>
		&lt;!&ndash;	<div class="border-t border-primary my-3"></div>&ndash;&gt;
			<div class="flex justify-between mt-3">
				<span class="text-black">Amount left in escrow</span>
				<span class="text-primary">$330.00</span>
			</div>-->
			<div class="flex justify-end mt-5">
				<button class="btn btn-primary">Withdraw from Escrow</button>
			</div>
		</div>
  </div>
</template>

<style lang="scss">
	.transactions {
	  
	}
</style>