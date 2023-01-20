<script setup>
import {useStore} from "~/stores";
import {confirm, error} from "../../components/ROToastAndConfirmService";
const store = useStore()
const otpInput = ref(null)
const openOtp = ref(false)
const changeDetails = ref(false)
const authenticator = ref(false)

const clearInput = () => {
  otpInput.value.clearInput()
}
const confirmAuth = () => {
  confirm({
	message: 'Are you sure you want to proceed?',
	header: 'Confirm password change',
	icon: 'pi pi-exclamation-triangle',
	accept: () => {
	  authenticator.value = true
	},
	reject: () => {
	  error('Cancelled', 'You have cancelled password change');
	}
  });
}
</script>

<template>
  <div class="page-content account--page">
	<div class="flex justify-between items-end">
		<h4 class="header--title">My account</h4>
	  	<div class="badge bg-success/20 border-base-300/0 py-2 rounded">
		  <i class="iconly-Shield-Done text-success icbo mr-2" /> <span class="text-black">KYC verified</span>
		</div>
	</div>
	<div class="flex justify-between items-center my-5">
	  <div class="">
	  <h4 class="text-xl font-medium">Matthew Ero</h4>
	  <p>@mathewero</p>
	  <div class="text-gray-500">
		<i class="iconly-Location mr-1 text-xl icli" />
		<!--                  <el-icon><location /></el-icon>-->
		<span>Nigeria</span>
	  </div>
	  </div>
	  <div class="">
		<Button class="primary" label="Edit" icon="iconly-Edit icli" iconPos="right" />
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
		  <a href="#" class="btn block p-5 w-full" @click.prevent="openOtp = true">
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
	</div>
	<ROVerifyEmail :dialog="openOtp" @closeModal="openOtp = false" />
	<Dialog v-model:visible="authenticator">
	  <div
		  class="pb-4 flex flex-col items-center justify-center text-center"
	  >
		<h3 class="text-2xl font-medium">Verify your password change</h3>
		<div class="message mt-3">
		  <p>
			Click the link sent to <span class="text-primary">joe@gmail.com</span> to verify your password change.
		  </p>
		</div>
	  </div>
	</Dialog>
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