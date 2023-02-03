<template>
  <div class="auth--view flex justify-center">
	<div class="card auth--card bg-base-100/40 backdrop-blur">
	  <div class="card-body items-center">

		<div
			class="pb-4 flex flex-col items-center justify-center text-center"
		>
		  <h3 class="text-2xl font-medium">Complete password reset</h3>
		  <div class="message mt-3">
			<p>
			  Fill in the OTP sent to <span class="text-primary">{{ email }}</span> and new password to verify your password change.
			</p>
			<div class="w-full mt-3">
			  <div class="form-control w-full">
				<label class="label">
				  <span class="label-text text-lg">Password</span>
				</label>
				<div class="relative">
				  <input
					  v-model="password"
					  :type="show ? 'text' : 'password'"
					  placeholder="**********"
					  class="input bg-base-content/10 input-bordered w-full"
				  />
				  <div
					  class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
				  >
					<i
						class="iconly-Show icbo text-primary"
						:class="{ hidden: show, block: !show }"
						@click="show = !show"
					></i>
					<i
						class="iconly-Hide icbo text-primary"
						:class="{ block: show, hidden: !show }"
						@click="show = !show"
					></i>
				  </div>
				</div>
			  </div>
			</div>
			<div class="w-full mt-3">
			  <div class="form-control w-full">
				<label class="label">
				  <span class="label-text text-lg">Confirm Password</span>
				</label>
				<div class="relative">
				  <input
					  v-model="password1"
					  :type="show1 ? 'text' : 'password'"
					  placeholder="**********"
					  class="input bg-base-content/10 input-bordered w-full"
				  />
				  <div
					  class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
				  >
					<i
						class="iconly-Show icbo text-primary"
						:class="{ hidden: show1, block: !show1 }"
						@click="show1 = !show1"
					></i>
					<i
						class="iconly-Hide icbo text-primary"
						:class="{ block: show1, hidden: !show1 }"
						@click="show1 = !show1"
					></i>
				  </div>
				</div>
			  </div>
			</div>
			<div class="w-full mt-4">
			  <div class="form-control w-full">
				<label class="label">
				  <span class="label-text text-lg">OTP Code</span>
				</label>
				<input
					v-model="otp"
					type="number"
					placeholder="362735"
					class="input bg-base-content/10 input-bordered w-full"
				/>
			  </div>
			</div>
		  </div>
		</div>
		<div class="w-full mt-5">
		  <button
			  class="w-full btn btn-primary flex items-center"
			  :class="store.loading ? 'loading' : ''"
			  @click.prevent="resetPassword"
		  >
			<span>Verify OTP</span> <i class="icli Arrow-Right" />
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
	const route = useRoute()
	const store = userStore()
	const otpInput = ref(null)
	const otp = ref("")
	const password1 = ref('');
	const password = ref('');
	const show1 = ref(false);
	const show = ref(false);
	const email = computed(()=> {
	  return route.query.email
	})

	const resetPassword = () => {
	  store.changePassword({
		password: password.value,
		token: `${otp.value}`
	  })
	}
	return {route, otpInput, email, otp, store, password, password1, show, show1, resetPassword}
  },
}
</script>
