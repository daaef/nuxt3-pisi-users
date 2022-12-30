<script setup>
import {useStore} from "~/stores";
const store = useStore()
</script>

<template>
  <div class="page-content account--page">
	<div class="flex justify-between items-end">
		<h4 class="header--title">My account</h4>
	  	<div class="badge bg-success/20 border-base-300/0 py-2 rounded">
		  <i class="iconly-Shield-Done text-success icbo mr-3" /> <span class="text-black">KYC verified</span>
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
	  <div tabindex="0" class="collapse collapse-arrow border-b w-full border-base-300 bg-base-100">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium pl-0">
		  <div class="flex">
		  	<i class="iconly-Scan icli text-primary"></i> 2FA
		  </div>
		  <div class="flex text-gray-400 text-sm">
			Enable your 2 Factor Authentification
		  </div>
		</div>
		<div class="collapse-content">
		  <p>tabindex="0" attribute is necessary to make the div focusable</p>
		</div>
	  </div>
	  <div tabindex="0" class="collapse collapse-arrow border-b w-full border-base-300 bg-base-100">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium pl-0">
		  <div class="flex">
			<i class="iconly-More-Square text-primary icli"></i> Password
		  </div>
		  <div class="flex text-gray-400 text-sm">
			Change your password
		  </div>
		</div>
		<div class="collapse-content">
		  <p>tabindex="0" attribute is necessary to make the div focusable</p>
		</div>
	  </div>
	  <div tabindex="0" class="collapse collapse-arrow border-b w-full border-base-300 bg-base-100">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium pl-0">
		  <div class="flex">
			<i class="iconly-Plus text-primary icli"></i> Account details
		  </div>
		  <div class="flex text-gray-400 text-sm">
			Change account number
		  </div>
		</div>
		<div class="collapse-content">
		  <p>tabindex="0" attribute is necessary to make the div focusable</p>
		</div>
	  </div>
	  <div tabindex="0" class="collapse collapse-arrow border-b w-full border-base-300 bg-base-100">
		<input type="checkbox" class="peer" />
		<div class="collapse-title text-xl font-medium pl-0">
		  <div class="flex">
			<i class="iconly-Wallet text-primary icli"></i> Connect Wallet
		  </div>
		  <div class="flex text-gray-400 text-sm">
			Connect your crypto wallet
		  </div>
		</div>
		<div class="collapse-content">
		  <p>tabindex="0" attribute is necessary to make the div focusable</p>
		</div>
	  </div>
	</div>
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
		i {
		  font-size: 1.5rem;
		  margin-right: 5px;
		}
	  }
	  .collapse-arrow .collapse-title:after {
		transform: rotate(-45deg) translateY(-50%);
		color: #3063E9FF;
	  }
	}
</style>