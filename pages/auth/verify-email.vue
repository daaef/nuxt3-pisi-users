<template>
  <div class="auth--view flex justify-center">
    <div class="card auth--card bg-base-100/40 backdrop-blur">
      <div class="card-body items-center">
        <h2 class="card-title text-center text-primary font-medium text-h5">
          Verify email
        </h2>
        <p class="text-center mb-0">
          Input the verification code sent to <br />
          <span class="text-primary">{{ email }}</span>
        </p>
        <div class="w-full">
          <div class="form-control w-full">
			<vue3-otp-input
				ref="otpInput"
				input-classes="otp-input"
				separator=""
				:num-inputs="6"
				:should-auto-focus="true"
				:is-input-num="true"
				:conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']"
				:placeholder="['*', '*', '*', '*', '*', '*']"
				@on-complete="handleOnComplete"
				@on-change="handleOnChange"
			/>
          </div>
        </div>
        <div class="w-full flex justify-between">
          <span class="text-primary">
            <span class="font-mono font-medium text-xl">
			  <client-only>
				<countdown ref="countdown" :time="10 * 60 * 1000" v-slot="{ minutes, seconds }" @end="onCountdownEnd">
              		<span>{{ minutes }}</span>:<span>{{ seconds }}</span>
				</countdown>
			  </client-only>
            </span>
          </span>
          <a href="#" @click.prevent="sendOTP" class="text-primary font-semibold" :class="{'pointer-events-none disabled': countdownSecs > 0}"> Resend code </a>
        </div>
        <div v-if="!login" class="w-full mt-5">
          <button
            class="w-full btn btn-primary flex items-center"
			:class="loading ? 'loading' : ''"
            @click.prevent="verifyUser"
			:disabled="!complete"
          >
            <span>Verify OTP</span> <i class="icli Arrow-Right" />
          </button>
        </div>
        <div v-else class="w-full mt-5">
          <nuxt-link
			  to="/auth/login"
            class="w-full btn btn-primary flex items-center"
          >
            <span>Login to your account</span> <i class="icli iconly-Arrow-Right" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {userStore} from "~/stores/user";
import {error, success} from "../../components/ROToastAndConfirmService";

definePageMeta({
  layout: 'authentication',
  auth: 'guest'
});
export default {
  setup() {
	const route = useRoute()
	const store = userStore()
	const otpInput = ref(null)
	const countdown = ref(null)
	const otp = ref("")
	const complete = ref(false)
	const email = computed(()=> {
	  return route.query.email
	})
	const handleOnComplete = (value) => {
	  console.log('OTP completed: ', value);
	  complete.value = true
	};
	const handleOnChange = (value) => {
	  console.log('OTP changed: ', value);
	  complete.value = false
	  otp.value = value
	};

	const countdownSecs = computed(()=>countdown.value?.totalSeconds)

	const onCountdownEnd = (value) => {
	  console.log('OTP completed: ', value);
	};
	return {route, handleOnComplete, otpInput, onCountdownEnd, complete, handleOnChange, email, otp, store, countdown, countdownSecs}
  },
  data() {
    return {
      show: false,
      loading: false,
      message: false,
      notification: '',
      login: false
    }
  },
  methods: {
    async verifyUser() {
      this.loading = true
      try {
		await this.store.verifyMail(this.otp).then(res => console.log(res)).then(res => {
		  this.login = true
		  success('Successfully Activated!', res?.data?.msg)
		  this.otpInput.clearInput()
		  this.$router.push('/auth/login')
		})
      } catch (err) {
        console.log('We got an error folks', err.data.msg)
		this.otpInput.clearInput()
		error('Error!', err?.data?.msg)
        this.loading = false
      }
    },
    async sendOTP() {
	  try {
		await this.store.sendOTP({
		  email:this.email
		})
			.then((res) => {
			  console.log('res', res)
			  success('Successfully Sent OTP!', res)
			  this.otpInput.clearInput()
			  countdown.value.restart()
			})
	  } catch (err) {
		console.log('We got an error folks', err.data.msg)
		this.otpInput.clearInput()
		error('Error!', err?.data?.msg)
	  }
    },
  }
}
</script>
