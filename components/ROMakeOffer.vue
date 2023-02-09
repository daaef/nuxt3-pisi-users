<template>
  <div class="dialogs">
  <Dialog header="Create sell offer" v-model:visible="mainDialog" >
	<div class="relative custom-input">
	  <ROInputWithAddon type="coin" @change="handleCrypto" :coins="store.currencies" @input="handleSell" label="Sell" />
	</div>
	<div class="relative mt- custom-input">
	  <ROInputWithAddon @change="handleCurrency" :input="true" type="currency" :inputValue="buy" :currencies="store.fiatCurrencies" label="Buy" />
	</div>

	<div class="custom-input">
	  <RORateInput @input="handleRate" :rateVal=currentRate :crypto="crypto" :currency="currency" />
	</div>
	<template #footer>
	  <Button label="Make offer" icon="iconly-Arrow-Right text-xl icli" class="primary" iconPos="right" @click="openDialog($event, 'offer')"/>
	  <Button label="Close" class="secondary" autofocus iconPos="right" @click="mainDialog = false" />
	</template>
  </Dialog>
  <Dialog v-model:visible="offerDialog" header="Complete transaction">
	<div class="top--sect text-center text-lg p-3">
	  Input your 4-digit transaction pin to complete transaction.
	</div>
	<div class="flex justify-center">
	  <ROotp :digit-count="4" @update:otp="otpValue = $event" />
	</div>

	<template #footer>
	  <Button label="Verify OTP" icon="iconly-Arrow-Right text-xl icli" class="primary" iconPos="right" @click="openDialog($event, 'finish')" />
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
	<Connect @connectedToStore="setStore" />
  </div>
</template>

<script>
import { useStore } from "~/stores";
import {useTransitionState} from "vue";
import {transactionStore} from "../stores/transactions";
import {ethers} from "ethers";
import {abi, contractAddress} from "../constants/abi";
import {useCryptoStore} from "../stores/crypto";


export default {
  name: 'ROMakeOffer',
  setup(){
	const store = useStore()
	const tranStore = transactionStore()
	const crypStore = useCryptoStore()
	return { store, tranStore, crypStore }
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
	  converted: '',
	  selectedCurrency: null,
	  selectedCrypto: null,
	  otpValue: '',
	  currency: 'NGN',
	  crypto: 'eth',
	  provider: {},
	  contract: null,
	  ourStore: {}
	}
  },
  computed: {
	offerData() {
	  return {
		cryptoCurrencyId: this.selectedCrypto?.id,
		amountInCrypto: this.sell,
		tokenPricePerUnit: this.rate,
		currencyId: this.selectedCurrency?.id,
		provider: {}
	  }
	},
	valInWei(){
	  return ethers.utils.parseEther(`${this.crypStore[`${this.crypto.toLowerCase()}`] * this.sell}`)
	},
	currentRate(){
	  return this.crypStore[`${this.currency.toLowerCase()}`]
	}
  },
  mounted(){
	this.crypStore.eth2All()
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
	/*createContract(){
	  this.contract = new ethers.Contract(contractAddress, abi, prov )
	},
	testProvider(e){
	  this.provider = e
	  setTimeout(()=> {
		this.createContract()
	  }, 500)
	  // this.converted = ethers.utils.parseUnits("23.2", 'tron')
	},*/
	setStore(e){
	  this.ourStore = e
	  console.log('store is', e)
	},
	async openDialog(_, type) {
	  if (type === 'offer') {
		console.log('crypto store is', this.crypStore.address)
		// await this.tranStore.createOffer(this.offerData)
		// const res = await this.crypStore.contract.deposit(this.valInWei)
		// console.log(res)
		// console.log(this.valInWei)
		this.mainDialog = false
	  } else if (type === 'back') {
		this.offerDialog = false
		this.mainDialog = true
	  } else {
		this.offerDialog = false
		this.finDialog = true
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
</style>