<template>
  <div class="dialogs">
  <Dialog header="Create sell offer" v-model:visible="mainDialog" >
	<div class="relative custom-input">
	  <ROInputWithAddon type="coin" :coins="store.currencies" label="Sell" />
	</div>
	<div class="relative mt- custom-input">
	  <ROInputWithAddon type="coin" :coins="store.currencies" label="Buy" />
	</div>

	<div class="custom-input">
	  <RORateInput />
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
  </div>
</template>

<script>
import { useStore } from "~/stores";


export default {
  name: 'ROMakeOffer',
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
	  sell: '100000',
	  buy: '230.56',
	  otpValue: ''
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