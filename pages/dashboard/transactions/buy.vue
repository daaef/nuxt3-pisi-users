<script setup>
import {useStore} from "~/stores";
defineProps({
	buy: Array,
})
const utils = useUtils()

const store = useStore()
const display2 = ref('')
</script>

<template>
  <div class="tab-content mt-10 grid gap-y-3">
		<div class="transaction" v-for="trans in buy" :key="trans?.id">
<!--			<p class="mb-2">
				<span class="block mr-2">@jacerodman</span>
			</p>-->
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
				<ROCurrency type="currency" :icon="store[`${trans?.offer?.currency?.currencyCode?.toLowerCase()}`]" />

				<ROCurrency :icon="trans?.offer?.CryptoCurrency" />
			</div>
			<div class="flex justify-between mt-1">
				<p class="font-medium">
					{{ store[`${trans?.offer?.currency?.currencyCode?.toLowerCase()}`].icon }}{{ trans?.amountInFiat }}
				</p>
				<h4 class="font-medium">
					{{ trans?.amountInCrypto?.toFixed(7) }} {{ trans?.offer?.CryptoCurrency?.abbreviation }}
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
<!--			<div class="flex justify-center mt-3">
				<span>Rate: $1 = 466.72</span>
			</div>
			<div class="flex justify-center mt-2">
				<span class="text-gray-400">Official rate: $1 = 433.72</span>
			</div>-->
		<!--	<div class="border-t border-primary my-3"></div>-->
<!--			<div class="flex justify-between mt-3">-->
<!--				<span class="text-black">Amount left in escrow</span>-->
<!--				<span class="text-primary">$330.00</span>-->
<!--			</div>-->
			<div class="flex justify-between mt-3">
				<span class="text-black">Transaction status</span>
				<div class="badge text-black badge-secondary">{{ trans?.status }}</div>
			</div>
		</div>
  </div>
</template>

<style lang="scss">
	.transaction {
		border-radius: 10px;
		padding: 15px;
		box-shadow: 0 0 5px -2px;
		transition: .3s ease-in-out;
		cursor: pointer;
	  &:hover{
			background: #efefef;
		}
	}
</style>