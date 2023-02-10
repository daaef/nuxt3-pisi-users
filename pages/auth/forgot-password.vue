<template>
  <div class="auth--view flex justify-center">
    <div class="card auth--card bg-base-100/40 backdrop-blur">
      <div class="card-body items-center">
        <h2 class="card-title text-center text-primary font-medium text-h5">
          Forgot Password
        </h2>
        <p class="text-center mb-0">
          Input your account email and we'll send you an OTP
        </p>
		<div class="w-full mt-4">
		  <div class="form-control w-full">
			<label class="label">
			  <span class="label-text text-lg">Email</span>
			</label>
			<input
				v-model="email"
				type="email"
				placeholder="joe@gmail.com"
				class="input bg-base-content/10 input-bordered w-full"
			/>
		  </div>
		</div>
        <div class="w-full mt-5">
          <button
            class="w-full btn btn-primary flex items-center"
			:class="store.loading ? 'loading' : ''"
            @click.prevent="getOTP"
          >
            <span>Get OTP</span> <i class="icli Arrow-Right" />
          </button>
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
	const email = ref('')
	const store = userStore()

	const getOTP = () => {
	  console.log('OTP completed: ', email.value);
	  store.resetPassword({
		email: email.value
	  })
	};
	return { email, getOTP, store }
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
}
</script>
