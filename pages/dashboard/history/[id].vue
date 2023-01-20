<script setup>
definePageMeta({
  pageTransition: {
	name: 'page',
	mode: 'out-in' // default
  }
})
import {useStore} from "~/stores";
import {useRouter} from "nuxt/app";
const store = useStore()
const router = useRouter()
</script>

<template>
  <div class="page-extension">
	<div class="history-info">
	  <div class="flex items-center justify-between mb-10">
		<h3 class="text-2xl font-medium">History</h3>
		<a href="#" @click.prevent="router.push('/history')">
		  <i class="pi pi-times" />
		</a>
	  </div>
	  <div class="history-card">

		<div class="history--content">
		  <div class="history--title">
			<i class="iconly-Paper icli mr-1" /> <span>Details</span>
		  </div>
		  <div class="flex justify-between">
			<p class="text-gray-400 font-medium">Date:</p>
			<h4 class="text-black">14th-15th October, 2022</h4>
		  </div>
		  <div class="flex justify-between mt-2">
			<p class="text-gray-400 font-medium">Time:</p>
			<h4 class="text-black">12:17pm, WAT</h4>
		  </div>
		  <div class="flex justify-between mt-2">
			<p class="text-gray-400 font-medium">Transaction ID::</p>
			<h4 class="text-black">6728390-465322</h4>
		  </div>
		</div>
		<div class="history--content">
		  <div class="history--title">
			<i class="iconly-Activity icli mr-1" /> <span>Transaction</span>
		  </div>
		  <div class="relative">
			<div class="flex justify-between">
			  <p
				  class="text-gray-400 font-medium inline-flex items-center"
			  >
				<i class="iconly-Upload icli mr-1"></i><span>From</span>
			  </p>
			  <h4
				  class="text-gray-400 font-medium inline-flex items-center"
			  >
				<i class="iconly-Download icli mr-1"></i><span>To</span>
			  </h4>
			</div>
			<div class="flex mt-2 justify-between">
			  <div class="amount-down">
				<div class="currency--holder">
				  <span class="currency">$</span>
				  USD
				</div>
			  </div>
			  <div class="amount-ngn">
				<div class="currency--holder">
				  <span class="currency">₦</span>
				  NGN
				</div>
			  </div>
			</div>
			<div class="flex justify-between mt-1">
			  <p class="text-primary">$230.00</p>
			  <h4 class="text-success">₦165,600.00</h4>
			</div>
			<img
				src="/transfer--arrows.png"
				alt="Transfer arrows"
				class="transfer-arrows"
			/>
		  </div>
		  <div
			  class="flex justify-between mt-2 pb-2 border-b border-gray-400 border-dashed"
		  >
			<p class="text-gray-400 font-medium">Rate:</p>
			<h4 class="text-black">$1 = ₦720</h4>
		  </div>
		  <div class="flex justify-between mt-2">
			<p class="text-gray-400 font-medium">Tunde Ojigho</p>
			<h4 class="text-black">$100</h4>
		  </div>
		  <div class="flex justify-between mt-2">
			<p class="text-gray-400 font-medium">Jace Rodman</p>
			<h4 class="text-black">$70</h4>
		  </div>
		</div>
		<div class="history--content">
		  <div class="history--title">
			<i class="iconly-Profile icli mr-1" /> <span>Senders Info</span>
		  </div>
		  <div class="flex justify-between">
			<p class="text-gray-400 font-medium">Sender:</p>
			<h4 class="text-black">
			  <span class="block">Tunde Ojigho</span>
			  <span class="block">Jace Rodman</span>
			</h4>
		  </div>
		  <div class="flex justify-between mt-2">
			<p class="text-gray-400 font-medium">Location:</p>
			<h4 class="text-black">Nigeria</h4>
		  </div>
		</div>
	  </div>
	  <div class="flex justify-center">
	  	<div class="history-share--download">
		<a href="#" class="text-primary">
		  <i class="iconly-Arrow-Down-Square icli"></i>
		  <span>Download</span>
		</a>
		<span class="text-primary">|</span>
		<a href="#" class="text-primary">
		  <i class="iconly-Send icli"></i>
		  <span>Share</span>
		</a>
	  </div>
	  </div>
	</div>
  </div>
</template>
<style lang="scss">
.history-card {
  padding: 25px 10px;
  border-radius: 15px;
  background: #fafafa url("/history-backdrop.svg") no-repeat top left;

  .history--title {
	margin-bottom: 15px;
	display: flex;
	color: #3063E9;
	font-size: 1rem;
	align-items: center;

	i {
	  color: #3063E9;
	}
  }

  p {
	margin-bottom: 0 !important;
  }

  .history--content {
	display: grid;
	grid-gap: 8px;
	&:not(:last-of-type) {
	  border-bottom: solid 1px #3063E9;
	}

	padding: 8px 0 !important;
	i {
	  font-size: 1.5rem;
	}
  }

  .transfer-arrows {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  }
}
.history-share--download {
  display: flex;
  max-width: 250px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-size: 1rem;
  & > span {
	font-size: 1.4rem;
  }
  a {
	display: flex;
	align-items: center;
  }

  i {
	font-size: 2rem;
	margin-right: 5px;
  }
}
</style>