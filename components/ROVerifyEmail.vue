<template>
  <div class="dialogs">
  <Dialog v-model:visible="verifyDialog" header="Input OTP">
	<div class="top--sect text-center text-lg p-3">
	  Input the One TIme Password sent to <br><span class="text-primary">{{ auth?.$state?.user?.email }}</span>
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
	<a href="#" @click.prevent="sendOTP" class="text-primary">Resend OTP</a>

	<template #footer>
	  <Button :loading="loading" label="Verify OTP" icon="iconly-Arrow-Right text-xl icli" class="primary" iconPos="right" @click="verifyUser" />
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
			You have successfully set up your Email.
		  </p>
		</div>
	  </div>
	</Dialog>
  </div>
</template>


<script>
import { error, success} from "./ROToastAndConfirmService";
import {userStore} from "~/stores/user";

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
	const loading = ref(false)
	const verifyDialog = ref(false)
	const finDialog = ref(false)
	const auth = useAuth()
	const usrStore = userStore()

	const otp = ref("")
	const complete = ref(false)

	const handleOnComplete = (value) => {
	  console.log('OTP completed: ', value);
	  complete.value = true
	};
	const handleOnChange = (value) => {
	  console.log('OTP changed: ', value);
	  complete.value = false
	  otp.value = value
	};

	const sendOTP = () => {
		  try {
			usrStore.sendOTP({
			  email: auth.$state.user.email
			}).then((res) => {
			  success('Successfully Sent OTP!', res?.msg)
			  openOtp.value = true
			})
		  } catch (err) {
			console.log('We got an error folks', err.data.msg)
			error('Error!', err?.data?.msg)
		  }
		}

	return {
	  otpInput, verifyDialog, finDialog, handleOnChange, handleOnComplete, auth, sendOTP, otp, complete, loading, usrStore
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
	async verifyUser() {
	  this.loading = true
	  try {
		await this.usrStore.verifyMail(this.otp).then(res => console.log(res)).then(res => {
		  this.login = true
		  success('Successfully Activated!', res?.data?.msg)
		  this.otpInput.clearInput()
		  this.verifyDialog = false
		  this.finDialog = true
		})
	  } catch (err) {
		console.log('We got an error folks', err.data.msg)
		this.otpInput.clearInput()
		error('Error!', err?.data?.msg)
		this.loading = false
	  }
	},
  }
}
</script>

<style lang="scss" scoped>

</style>