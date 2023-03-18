<script setup>
definePageMeta({
	pageTransition: {
		name: 'page',
		mode: 'out-in'
	}
})
import {useStore} from "~/stores";
import {confirm, error, success} from "~/components/ROToastAndConfirmService";
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
					<h4 class="text-xl font-medium">
						{{ auth?.$state?.user?.firstName }} {{ auth?.$state?.user?.lastName }}</h4>
			<!--	  <p>@mathewero</p>-->
					<div class="text-gray-500">
						<i class="iconly-Location mr-1 text-xl icli" />
						<!--                  <el-icon><location /></el-icon>-->
						<span>{{ useUtils()?.getCountry(useAuth()?.$state?.user?.countryId)?.name }}</span>
					</div>
				</div>
				<div class="" v-if="$route?.name === 'dashboard-account'">
					<nuxt-link to="/dashboard/account/update-account" class="btn btn-primary">
						<span>Edit</span>
						<i class="iconly-Edit icli" />
					</nuxt-link>
				</div>
			</div>
			<NuxtPage />
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