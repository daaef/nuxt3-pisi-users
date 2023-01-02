<template>
  <div class="dialogs">
  <Dialog v-model:visible="verifyDialog" header="Input OTP">
	<div class="top--sect text-center text-lg p-3">
	  Input the One TIme Password sent to <br><span class="text-primary">joe@gmail.com</span>
	</div>
	<div class="flex justify-center">
	  <vue3-otp-input
		  ref="otpInput"
		  input-classes="otp-input"
		  separator=""
		  :num-inputs="6"
		  :should-auto-focus="true"
		  :is-input-num="true"
		  :conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']"
		  :placeholder="['*', '*', '*', '*', '*', '*']"
		  @on-change="handleOnChange"
		  @on-complete="handleOnComplete"
	  />
	</div>
	<a href="#" class="text-primary">Resend OTP</a>

	<template #footer>
	  <Button label="Verify OTP" icon="iconly-Arrow-Right text-xl icli" class="primary" iconPos="right" @click="openDialog" />
	</template>
  </Dialog>
	<Dialog v-model:visible="finDialog">
	  <div
		  class="pb-4 flex flex-col items-center justify-center text-center"
	  >
		<img src="/check.svg" alt="success check mark" />
		<div class="message">
		  <h3 class="text-primary text-lg my-2">2FA successful</h3>
		  <p>
			You have successfully set up your 2 Factor Authentication.
		  </p>
		</div>
	  </div>
	</Dialog>
  </div>
</template>


<script>
export default {
  props: {
	dialog: {
	  type: Boolean,
	  default() {
		return false
	  }
	}
  },
  setup() {
	const otpInput = ref(null)
	const verifyDialog = ref(false)
	const finDialog = ref(false)

	const handleOnComplete = (value) => {
	  console.log('OTP completed: ', value);
	};

	const handleOnChange = (value) => {
	  console.log('OTP changed: ', value);
	};
	return {
	  otpInput, verifyDialog, finDialog, handleOnChange, handleOnComplete
	}
  },
  watch: {
	dialog(val) {
	  this.verifyDialog = this.dialog
	},
	verifyDialog(val) {
	  if (val === false) {
		this.$emit('closeModal')
	  }
	}
  },
  methods: {
	openDialog() {
		this.verifyDialog = false
		this.finDialog = true
	}
  }
}
</script>

<style lang="scss" scoped>

</style>