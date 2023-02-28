<template>
  <div class="dialogs">
  <Dialog header="Request offer" v-model:visible="mainDialog" >

	<div class="top--sect bg-secondary p-3">
	  <div class="flex justify-between w-full">
              <span class="text-gray-500">
                <i class="iconly-Upload icli"></i>
                Sell
              </span>
		<span class="text-gray-500">
                <i class="iconly-Download icli"></i>
                Buy
              </span>
	  </div>
	  <div class="px-3 flex items-center justify-between w-full">
		<div class="flex flex-none items-center">
			<ROCurrency
			  :icon='cryptoCurrency'
			/>
		</div>
		<div>
		  <img src="/transfer--arrows.png" alt="" />
		</div>
		<div class="flex flex-none items-center">
		  <ROCurrency :icon="currency" type="currency"/>
		</div>
	  </div>
	  <div class="flex justify-between w-full">
		<span class="text-primary">{{ amount }} {{ cryptoCurrency?.abbreviation }}</span>
		<span class="text-success">{{currency?.icon}}{{ payable }}</span>
	  </div>
<!--	  <hr />
	  <div class="flex text-gray-500 justify-between w-full">
		<span>Official rate</span>
		<span class="font-medium">$1 = ₦433.72</span>
	  </div>-->
	</div>
	<span class="text-center w-full"
	>Input the amount you would like to buy</span
	>
		<FormKit
				ref="purchaseForm"
				type="form"
				:actions="false"
				@submit="openDialog($event, 'offer')"
		>
			<FormKit
					type="text"
					v-model="amount"
					name="location"
					label="Amount"
					help="How much you want to purchase"
					validation="required|number"
			/>
			<FormKit
					v-model="walletAddress"
					type="text"
					name="duration"
					label="Wallet Address"
					help="Where you'd like to receive the amount."
					validation="required"
			/>

		</FormKit>
	<template #footer>
	  <Button label="Purchase" icon="iconly-Arrow-Right text-xl icli" class="primary" iconPos="right"
						@click="purchaseForm?.node?.submit"/>
	  <Button label="Close" class="secondary" autofocus iconPos="right" @click="mainDialog = false" />
	</template>
  </Dialog>
  <Dialog class="back--type" :class="{ danger: !useAuth()?.$state?.user?.identityIsVerified}"
					v-model:visible="offerDialog" >
	<template #header>
	  <a href="#" @click.prevent="openDialog($event, 'back')">
		<i class="iconly-Arrow-Left text-xl icli" />
	  </a>

		<p v-if="!useAuth()?.$state?.user?.identityIsVerified" class="text-white px-3">
			<span class="font-bold">NB:</span> You need to have your KYC verified for this step!.
		</p>
	</template>
	<div class="top--sect bg-secondary p-3">
	  <div class="flex justify-between w-full">
		<span class="text-black"> Amount payable </span>
		<span class="text-primary text-lg"> {{currency?.icon}}{{ payable }} </span>
	  </div>
	</div>

	<div v-for="account in offer?.createdBy?.bankAccounts" class="bottom--sect bg-secondary p-3">
	  <div class="flex justify-between w-full">
		<span class="text-gray-500"> Account name: </span>
		<span class="text-black font-medium text-lg">
			{{ offer?.createdBy?.firstName }} {{ offer?.createdBy?.lastName }}
		</span>
	  </div>
	  <div class="flex justify-between w-full">
		<span class="text-gray-500"> Account number: </span>
		<span class="text-primary font-medium text-lg"> {{ account?.number }} </span>
	  </div>
	  <div class="flex justify-between w-full">
		<span class="text-gray-500"> Bank: </span>
		<span class="text-black font-medium text-lg">
                {{ account?.bankName }}
              </span>
	  </div>
	</div>
	<template #footer>
	  <Button label="Continue" icon="iconly-Arrow-Right text-xl icli" class="primary" iconPos="right" @click="openDialog($event, 'finish')" />
	  <Button label="Close" class="secondary" autofocus iconPos="right" @click="offerDialog = false" />
	</template>
  </Dialog>
  <Dialog v-model:visible="finDialog">
	<div
		class="pb-4 flex flex-col items-center justify-center text-center"
	>
	  <img src="/check.svg" alt="success check mark" />
	  <div class="message">
		<h3 class="text-primary text-lg my-2">Payment successful</h3>
		<p>
		  You will recieve your token once your payment has been confirmed
		  by the 2nd party.
		</p>
	  </div>
	</div>
  </Dialog>
  </div>
</template>

<script>
import { useStore } from "~/stores";
import {useUtils} from "~/composables/utils";
import {watch} from "vue";
import {error} from "~/services/ROToastAndConfirmService";
import {transactionStore} from "~/stores/transactions";

export default {
  	name: 'RequestOffer',
		props: {
		dialog: {
			type: Boolean,
			default() {
				return false
			}
		},
		offer: {
			type: Object,
			default() {
				return {}
			}
		}
	},
		setup(props){
				const store = useStore()
				const purchaseForm = ref(null)
				const amount = ref(0)
	  		const walletAddress = ref('')
				const selectedData = ref({
					abbreviation:"ETH",
					id:"8e6cd915-0afc-410e-a220-93132e64d7b9",
					name:"Ether",
					network:"ETHEREUM"
				})
				const currency = computed(()=> {
					const main = useUtils()?.getCurrency(props?.offer.currencyId)
					return store.countryCurr.find(count => {
						return count.name === main.currencyCode
					})
				})

			const payable = computed(() => props?.offer?.tokenPricePerUnit * amount.value)

			const cryptoCurrency = computed(()=> useUtils()?.getCryptoCurrency(props?.offer?.cryptoCurrencyId))
				return { store, selectedData, purchaseForm, currency, cryptoCurrency, amount, walletAddress, payable }
  	},
  data() {
	return {
	  offerDialog: false,
	  mainDialog: false,
	  finDialog: false,
	  sell: '',
	  buy: '',
	}
  },
  watch: {
	dialog(val) {
	  this.mainDialog = this.dialog
	},
	mainDialog(val) {
	  if (val === false) {
		this.$emit('closeModal')
	  }
	}
  },
  methods: {
		useUtils,
			async openDialog(_, type) {
				if (type === 'offer') {
					this.mainDialog = false
					this.offerDialog = true
				} else if (type === 'back') {
					this.offerDialog = false
					this.mainDialog = true
				} else {
						try {
							await transactionStore().respondToOffer({
								amountInCrypto: this.amount,
								buyerWalletAddress: this.walletAddress,
								offerId: this.offer.id
							}).then(res => {
								this.offerDialog = false
								this.finDialog = true
							})
						} catch (e) {

						}
						/*error('Cannot perform action!', 'Your KYC verification is not completed!')*/
					}
			}
  }
}
</script>

<style lang="scss" scoped>
.p-dialog-content {
  display: grid;
  grid-gap: 15px;
  .top--sect {
	border-radius: 10px;
	width: 100%;
	display: grid;
	grid-gap: 7px;
	.flex {
	  flex: none !important;
	}
	img {
	  height: 10px;
	}
	hr {
	  border-top: solid 1px #2936ac;
	}
  }
  .bottom--sect {
	border-radius: 10px;
	width: 100%;
	display: grid;
	grid-gap: 7px;

	.flex {
	  flex: none !important;
	}
  }
}
</style>