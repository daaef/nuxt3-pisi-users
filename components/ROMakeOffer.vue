<template>
  <div class="dialogs">
		<Dialog header="Create sell offer" v-model:visible="mainDialog" >
		<div class="relative custom-input">
			<ROInputWithAddon type="coin" @change="handleCrypto" :coins="store.currencies" @input="handleSell" label="Sell" />
		</div>
		<div class="relative mt- custom-input">
			<ROInputWithAddon @change="handleCurrency" :drop="true" :input="true" type="currency" :inputValue="buy" :currencies="store.fiatCurrencies" label="Buy" />
		</div>

		<div class="custom-input">
			<RORateInput @input="handleRate" :crypto="crypto" :currency="currency" :cryptoValue="sell" />
		</div>
		<template #footer>
			<Button label="Make offer" icon="iconly-Arrow-Right text-xl icli" class="primary" iconPos="right" @click="openDialog($event, 'offer')"/>
			<Button label="Close" class="secondary" autofocus iconPos="right" @click="mainDialog = false" />
		</template>
		</Dialog>
		<Dialog
				class="back--type"
				v-model:visible="offerDialog"
				:class="{ danger: !useAuth()?.$state?.user?.bankAccount}"
		>
			<template #header>
				<a href="#" @click.prevent="openDialog($event, 'back')">
					<i class="iconly-Arrow-Left text-xl icli" />
				</a>

				<p v-if="!useAuth()?.$state?.user?.bankAccount" class="text-white px-3">
					<span class="font-bold">NB:</span> You need to have your Bank account setup to complete this step!.
				</p>
			</template>
		<div class="top--sect text-center text-lg p-3">
			Send your tokens to the Wallet Address provided below
		</div>
		<div class="grid gap-y-2">
			<h3>
				<span class="font-medium">Network : </span>
				{{ selectedCrypto?.network }}
			</h3>
			<h3>
				<span class="font-medium">Offer Value : </span>
				{{ sell }} {{ selectedCrypto?.abbreviation }}
			</h3>
			<h3>
				<span class="font-medium">Fee : </span>
				{{ sell / (fees?.percentage || 1) }} {{ selectedCrypto?.abbreviation }}
			</h3>
			<h3>
				<span class="font-medium">Total : </span>
				{{ sell + (sell / (fees?.percentage || 1)) }} {{ selectedCrypto?.abbreviation }}
			</h3>
			<div @click.prevent="copy(selectedCrypto?.depositWalletAddress)" class="wallet bg-primary/70 rounded text-white text-center grid gap-y-2 p-4 cursor-pointer hover:bg-primary/80">
				<h3>
					<span class="text-lg font-medium">Wallet Address </span>
					<span v-if="!text?.length">(Tap to Copy)</span>
					<span class="block text-xs text-green-300" v-else>Copied {{ text }}</span>
				</h3>
				<p>{{ selectedCrypto?.depositWalletAddress }}</p>
			</div>
			<h3>
				<span class="text-error">Ensure you send the total specified above, which is a sum of your offer and our fee. Verification will fail for transactions not including the fee.</span>
			</h3>
			<FormKit
					type="form"
					:actions="false"
					:disabled="!useAuth()?.$state?.user?.bankAccount"
					@submit="register"
			>
				<FormKit
						label="Transaction ID"
						v-model="transId"
						name="transactionId"
						type="text"
						placeholder="Transaction ID"
						validation="required"
						validation-visibility="live"
				/>
			</FormKit>
		</div>

		<template #footer>
			<Button :disabled="!useAuth()?.$state?.user?.bankAccount" label="Verify Transaction" icon="iconly-Arrow-Right text-xl icli" class="primary" iconPos="right" @click="openDialog($event, 'finish')" />
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
import {useTransitionState} from "vue";
import {transactionStore} from "../stores/transactions";


export default {
  name: 'ROMakeOffer',
  setup(){
	const store = useStore()
	const tranStore = transactionStore()
	const { text, isSupported, copy } = useClipboard()
	return { store, tranStore, copy, text }
  },
  props: {
	dialog: {
	  type: Boolean,
	  default() {
		return false
	  }
	}
  },
  data() {
		return {
			offerDialog: false,
			mainDialog: false,
			finDialog: false,
			sell: null,
			rate: null,
			buy: null,
			selectedCurrency: null,
			selectedCrypto: null,
			otpValue: '',
			transId: '',
			currency: 'NGN',
			crypto: 'ETH'
		}
  },
	beforeDestroy() {
		this.resetFields()
	},
	computed: {
		offerData() {
			return {
				cryptoCurrencyId: this.selectedCrypto?.id,
				amountInCrypto: this.sell,
				tokenPricePerUnit: this.rate,
				currencyId: useAuth()?.$state?.user?.country?.currency?.id,
				transactionId: this.transId
			}
		},
		fees(){
			return this.tranStore?.fees[0]
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
		resetFields(){
			this.selectedCrypto = null
			this.selectedCurrency = null
			this.currency = "NGN"
			this.crypto = "ETH"
			this.buy = null
			this.sell = null
			this.rate = null
		},
	async openDialog(_, type) {
	  if (type === 'offer') {
			this.mainDialog = false
			this.offerDialog = true
			this.fees = await this.tranStore.getFees()
	  } else if (type === 'back') {
			this.resetFields()
			this.offerDialog = false
			this.mainDialog = true
	  } else {
			await this.tranStore.createOffer(this.offerData)
			this.offerDialog = false
			this.finDialog = true
			setTimeout(()=> {
				this.$router.push("/transactions")
			}, 1000)
	  }
	},
	handleCrypto(e){
	  this.selectedCrypto = e
	  this.crypto = e.abbreviation
	},
	handleCurrency(e){
	  this.selectedCurrency = e
	  this.currency = e.currencyCode
	},
	handleRate(e){
	  this.rate = e
		if (e !== null && this.sell !== null){
		  this.buy = e * this.sell
		} else if(e === null || this.sell === null) {
		  this.buy = null
		}
	},
	handleSell(e){
	  this.sell = e
	  if (e !== null && this.sell !== null){
		this.buy = e * this.rate
	  } else if(e === null || this.sell === null) {
		this.buy = null
	  }
	}
  },
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
.grid {
	word-break: break-word;
}
</style>