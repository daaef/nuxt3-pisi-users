<script setup>
import {useStore} from "~/stores";
import {confirm, error, success} from "../../components/ROToastAndConfirmService";
import {userStore} from "~/stores/user";
const store = useStore()
const usrStore = userStore()
const auth = useAuth()
const otpInput = ref(null)
const selCountry = ref(null)
const openOtp = ref(false)
const account = ref(false)
const loading = ref(false)
const changeDetails = ref(false)
const authenticator = ref(false)
const show = ref(false);
const show1 = ref(false);
const password1 = ref('');
const password = ref('');
const otpCode = ref('');

const clearInput = () => {
  otpInput.value.clearInput()
}
const updateUser = () => {
  otpInput.value.clearInput()
}
const changePassword = () => {
  try {
	usrStore.changePassword({
	  password: password.value,
	  token: otpCode
	}).then((res) => {
	  authenticator.value = false
	  console.log(res)
	  success('Successful!', res.msg)
	})
  } catch (err) {
	console.log('We got an error folks', err.data.msg)
	error('Error!', err?.data?.msg)
  }
}
const confirm2FA = () => {
  confirm({
	message: 'Are you sure you want to proceed?',
	header: 'Send email OTP',
	icon: 'pi pi-exclamation-triangle',
	accept: () => {
	  try {
		usrStore.sendOTP({
		  email: auth.$state.user.email
		}).then((res) => {
			  openOtp.value = true
			  console.log(res)
			  success('Successfully Sent!', res)
			})
	  } catch (err) {
			console.log('We got an error folks', err.data.msg)
			error('Error!', err?.data?.msg)
	  }
	},
	reject: () => {
	  error('Cancelled', 'You have cancelled email 2FA OTP');
	}
});
}
const confirmAuth = () => {
  confirm({
	message: 'Are you sure you want to proceed?',
	header: 'Confirm password change',
	icon: 'pi pi-exclamation-triangle',
	accept: () => {
	  try {
		usrStore.resetPassword({
		  email: auth.$state.user.email
		}).then((res) => {
		  authenticator.value = true
		  console.log(res)
		  success('Successful!', res)
		})
	  } catch (err) {
		console.log('We got an error folks', err.data.msg)
		error('Error!', err?.data?.msg)
	  }
	},
	reject: () => {
	  error('Cancelled', 'You have cancelled password change');
	}
  });
}
const userData = ref({
  firstName: auth?.$state?.user?.firstName,
  lastName: auth?.$state?.user?.lastName,
  email: auth?.$state?.user?.email,
  otherNames: auth?.$state?.user?.otherNames,
  countryId: auth?.$state?.user?.countryId,
  phoneNumber: auth?.$state?.user?.phoneNumber,
})

onMounted(()=> {
	store.fetchBanks()
})
</script>

<template>
  <div class="page-content account--page">
	<div class="flex justify-between items-end">
		<h4 class="header--title">My account</h4>
		<div v-if="!useAuth()?.$state?.user?.identityIsVerified" class="badge bg-error/20 border-base-300/0 py-2 rounded">
		  <nuxt-link active-class="exact-active-link" class="persist flex items-center" to="/dashboard/kyc">
		  	<i class="iconly-Shield-Fail text-error icbo mr-2" /> <span class="text-black">KYC not verified</span>
		  </nuxt-link>
		</div>
	</div>
	<div class="flex justify-between items-center my-5">
	  <div class="">
	  <h4 class="text-xl font-medium">{{ auth?.$state?.user?.firstName }} {{ auth?.$state?.user?.lastName }}</h4>
<!--	  <p>@mathewero</p>-->
		<div class="text-gray-500">
		  <i class="iconly-Location mr-1 text-xl icli" />
		  <!--                  <el-icon><location /></el-icon>-->
		  <span>{{ store?.userCountry?.name }}</span>
		</div>
	  </div>
	  <div class="">
		<Button @click.prevent="account = true" class="primary" label="Edit" icon="iconly-Edit icli" iconPos="right" />
	  </div>
	</div>
	<div class="grid gap-4">
	  <div tabindex="0" class="collapse border-b w-full border-base-300 bg-base-100">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium pl-0">
		  <div class="flex">
		  	<i class="iconly-Scan icli text-primary"></i> 2FA
		  </div>
		  <div class="flex text-gray-400 text-sm">
			Enable your 2 Factor Authentification
		  </div>
		  <i class="iconly-Arrow-Right-2 icli text-primary"></i>
		</div>
		<div class="collapse-content p-0">
		  <a href="#" class="btn block p-5 w-full" @click.prevent="confirm2FA">
			<span class="link--title block mb-3">Email</span>
			<span class="link--text text-gray-400">An OTP will be sent to your email.</span>
		  </a>
		  <a href="#" class="btn block p-5 w-full">
			<span class="link--title block mb-3">Authenticator app</span>
			<span class="link--text text-gray-400">Generate a code from an authenticator app, e.g. Duo or Google Authenticator.</span>
		  </a>
		</div>
	  </div>
	  <a href="#" @click.prevent="confirmAuth()" class="border-b w-full border-base-300 bg-base-100">
		<div class="collapse-title text-xl font-medium pl-0">
		  <div class="flex">
			<i class="iconly-More-Square text-primary icli"></i> Password
		  </div>
		  <div class="flex text-gray-400 text-sm">
			Change your password
		  </div>
		  <i class="iconly-Arrow-Right-2 icli text-primary"></i>
		</div>
	  </a>
	  <a tabindex="0" href="#" @click.prevent="changeDetails = true" class="collapse border-b w-full border-base-300 bg-base-100">
		<div class="collapse-title text-xl font-medium pl-0">
		  <div class="flex">
			<i class="iconly-Plus text-primary icli"></i> Account details
		  </div>
		  <div class="flex text-gray-400 text-sm">
			Change account number
		  </div>
		  <i class="iconly-Arrow-Right-2 icli text-primary"></i>
		</div>
	  </a>
		<!--
			<a tabindex="0" href="#" class="collapse border-b w-full border-base-300 bg-base-100">
				<div class="collapse-title text-xl font-medium pl-0">
					<div class="flex">
					<i class="iconly-Wallet text-primary icli"></i> Connect Wallet
					</div>
					<div class="flex text-gray-400 text-sm">
					Connect your crypto wallet
					</div>
					<i class="iconly-Arrow-Right-2 icli text-primary"></i>
				</div>
			</a>
	  -->
	</div>
	<ROVerifyEmail :dialog="openOtp" @closeModal="openOtp = false" />
	<Dialog v-model:visible="authenticator">
	  <div
		  class="pb-4 flex flex-col items-center justify-center text-center"
	  >
		<h3 class="text-2xl font-medium">Verify your password change</h3>
		<div class="message mt-3">
		  <p>
			Fill in the OTP sent to <span class="text-primary">{{ auth.$state.user.email }}</span> and new password to verify your password change.
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
				  v-model="otpCode"
				  type="number"
				  placeholder="362735"
				  class="input bg-base-content/10 input-bordered w-full"
			  />
			</div>
		  </div>
		  <button disabled
				  class="w-full btn btn-primary flex items-center"
				  :class="loading ? 'loading' : ''"
				  @click.prevent="changePassword"
		  >
			<span>Change Password</span> <ic name="Arrow-Right" />
		  </button>
		</div>
	  </div>
	</Dialog>
<!--	<Dialog v-model:visible="account">
	  <div
		  class="pb-4 flex flex-col items-center justify-center text-center"
	  >
		  <div class="w-full">
			<h2 class="card-title w-full justify-center font-medium text-h5">
			  Update your profile
			</h2>
			<div class="w-full mt-4">
			  <div class="form-control w-full">
				<label class="label">
				  <span class="label-text text-lg">First name</span>
				</label>
				<input
					disabled
					v-model="userData?.firstName"
					type="text"
					placeholder="Jon"
					class="input bg-base-content/10 input-bordered w-full"
				/>
			  </div>
			</div>
			<div class="w-full mt-4">
			  <div class="form-control w-full">
				<label class="label">
				  <span class="label-text text-lg">Last name</span>
				</label>
				<input
					disabled
					v-model="userData.lastName"
					type="text"
					placeholder="Snow"
					class="input bg-base-content/10 input-bordered w-full"
				/>
			  </div>
			</div>
			<div class="w-full mt-4">
			  <div class="form-control w-full">
				<label class="label">
				  <span class="label-text text-lg">Email</span>
				</label>
				<input
					disabled
					v-model="userData.email"
					type="email"
					placeholder="joe@gmail.com"
					class="input bg-base-content/10 input-bordered w-full"
				/>
			  </div>
			</div>
			<div class="w-full mt-4">
			  <div class="form-control w-full">
				<label class="label">
				  <span class="label-text text-lg">Phone Number</span>
				</label>
				<input
					disabled
					v-model="userData.phoneNumber"
					type="number"
					placeholder="23409063546780"
					class="input bg-base-content/10 input-bordered w-full"
				/>
			  </div>
			</div>
			<div class="w-full mt-4">
			  <div class="form-control w-full">
				<label class="label">
				  <span class="label-text text-lg">Other Names</span>
				</label>
				<input
					disabled
					v-model.trim="userData.otherNames"
					type="text"
					placeholder="Jane Catherine"
					class="input bg-base-content/10 input-bordered w-full"
				/>
			  </div>
			</div>
			<div class="w-full mt-4">
			  <div class="form-control w-full basic">
				<label class="label" for="country">
				  <span class="label-text text-lg">Country</span>
				</label>
				<Dropdown disabled input-id="country" v-model="selCountry" :options="store.countries" optionLabel="name" placeholder="Select a Country" />
			  </div>
			</div>
			<div class="w-full mt-5">
			  &lt;!&ndash;          <button
						  class="w-full btn btn-primary flex items-center"
						  :class="loading ? 'loading' : ''"
						  @click.prevent="$router.push('/kyc/')"
						>
						  <span>Continue</span> <ic name="Arrow-Right" /></button
						>&ndash;&gt;
			  <button disabled
				  class="w-full btn btn-primary flex items-center"
				  :class="loading ? 'loading' : ''"
				  @click.prevent="updateUser"
			  >
				<span>Update</span> <ic name="Arrow-Right" />
			  </button>
			</div>
		  </div>
	  </div>
	</Dialog>-->
	<ROChangeDetails :dialog="changeDetails" @closeModal="changeDetails= false" />
  </div>
</template>
<style lang="scss">
	.badge {
	  border-radius: 8px;
	  padding: 12px;
	  i {
		font-size: 1.2rem;
	  }
	}
	.account--page {
	  .collapse-title {
		display: flex;
		flex-direction: column;
		position: relative;
		i {
		  font-size: 1.5rem;
		  margin-right: 5px;
		  &.iconly-Arrow-Right-2 {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			transition: .1s ease-in-out;
			transform-origin: center center;
		  }
		}
	  }
	  .collapse-title:after {
		transform: rotate(-45deg) translateY(-50%);
		color: #3063E9FF;
	  }
	  .peer:checked {
		& ~ .collapse-title {
		  .iconly-Arrow-Right-2 {
			transform: rotate(-90deg) translateY(-50%);
		  }
		}
	  }
	}
</style>