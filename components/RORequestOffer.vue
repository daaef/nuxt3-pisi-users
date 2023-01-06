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
                <ROCurrency :icon="store.us" type="currency"/>
		</div>
		<div>
		  <img src="/transfer--arrows.png" alt="" />
		</div>
		<div class="flex flex-none items-center">
		  <ROCurrency :icon="store.ng" type="currency"/>
		</div>
	  </div>
	  <div class="flex justify-between w-full">
		<span class="text-primary">$230.00</span>
		<span class="text-success">₦63,634.92.00</span>
	  </div>
	  <hr />
	  <div class="flex text-gray-500 justify-between w-full">
		<span>Official rate</span>
		<span class="font-medium">$1 = ₦433.72</span>
	  </div>
	</div>
	<span class="text-center w-full"
	>Input the amount you would like to buy</span
	>

	<div class="relative custom-input">
	  <ROInputWithAddon :selected-currency="store.us" label="Sell" :addon="'text'" />
	</div>
	<div class="relative custom-input">
	  <ROInputWithAddon :selected-currency="store.ng" label="Buy" :addon="'text'" />
	</div>

	<div class="bottom--sect mt-3 bg-secondary p-3">
	  <div class="flex justify-between w-full">
		<span class="text-gray-500"> Account name: </span>
		<span class="text-black font-medium text-lg"> John Joe </span>
	  </div>
	  <div class="flex justify-between w-full">
		<span class="text-gray-500"> Account number: </span>
		<span class="text-primary font-medium text-lg"> 123456789 </span>
	  </div>
	  <div class="flex justify-between w-full">
		<span class="text-gray-500"> Bank: </span>
		<span class="text-black font-medium text-lg">
                First Bank of Nigeria
              </span>
	  </div>
	</div>
	<template #footer>
	  <Button label="Continue" icon="iconly-Arrow-Right text-xl icli" class="primary" iconPos="right" @click="openDialog($event, 'offer')"/>
	  <Button label="Close" class="secondary" autofocus iconPos="right" @click="mainDialog = false" />
	</template>
  </Dialog>
  <Dialog class="back--type" v-model:visible="offerDialog" >
	<template #header>
	  <a href="#" @click.prevent="openDialog($event, 'back')">
		<i class="iconly-Arrow-Left text-xl icli" />
	  </a>
	</template>
	<div class="top--sect bg-secondary p-3">
	  <div class="flex justify-between w-full">
		<span class="text-black"> Amount payable </span>
		<span class="text-primary text-lg"> $200 </span>
	  </div>
	</div>

	<div class="bottom--sect bg-secondary p-3">
	  <div class="flex justify-between w-full">
		<span class="text-gray-500"> Account name: </span>
		<span class="text-black font-medium text-lg"> John Joe </span>
	  </div>
	  <div class="flex justify-between w-full">
		<span class="text-gray-500"> Account number: </span>
		<span class="text-primary font-medium text-lg"> 123456789 </span>
	  </div>
	  <div class="flex justify-between w-full">
		<span class="text-gray-500"> Bank: </span>
		<span class="text-black font-medium text-lg">
                First Bank of Nigeria
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

export default {
  name: 'RequestOffer',
  setup(){
	const store = useStore()
	return { store }
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
	openDialog(_, type) {
	  if (type === 'offer') {
		this.mainDialog = false
		this.offerDialog = true
	  } else if (type === 'back') {
		this.offerDialog = false
		this.mainDialog = true
	  } else {
		this.offerDialog = false
		this.finDialog = true
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