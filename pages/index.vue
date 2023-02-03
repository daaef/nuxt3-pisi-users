<script setup>
// import { utils } from 'web3';

// import { computed } from 'vue';


const {
  onConnect,
  connected,
  userAddress,
  chainId,
  networkId,
  assets,
  getAccountAssets,
} = useWallet();

const handleWalletConnect = async () => {
  await onConnect();
  if (connected) {
	console.log('afterConnectdWallet', connected);
  }
};

definePageMeta({
  layout: 'landing',
  auth: 'guest'
});
</script>

<template>
  <section class="page-content landing">
	<header>
	  <nav class="px-7 flex w-full justify-between">
		<nuxt-link class="flex items-center" to="/">
		  <img src="/auth-logo.png" alt="" />
		</nuxt-link>
		<div class="flex items-center flex-grow-0">
		  <nuxt-link
			  v-if="$route.name !== 'auth-login'"
			  class="flex flex-grow-0 items-center text-sm mr-4"
			  to="/auth/login"
		  >
			Login
		  </nuxt-link>
		  <nuxt-link
			  v-if="$route.name !== 'auth-signup'"
			  to="/auth/signup"
			  class="btn btn-primary flex-grow-0"
		  >
			<span class="text-white">Create Account</span>
		  </nuxt-link>
		</div>
	  </nav>
<!--	  <h3 class="banner&#45;&#45;title">
		<span>Change</span>
		<span class="currency-badge mx-3">
		  <span class="flag">
			  <i class="cf cf-btc" />
		  </span>
		  BTC
		</span>
		<span>easily for</span>
		<span class="currency-badge ml-3">
		  <span class="flag">
			  <span class="fi fi-ng fis"></span>
		  </span>
		  NGN
	  	</span>
	  </h3>-->
	  <p>
		Address:
		{{ userAddress }}
	  </p>
	  <p>balance:{{ assets }}</p>
	  <p>networkId: {{ networkId }}</p>
	  <p>chainId: {{ chainId }}</p>
	</header>
  </section>
</template>

<style lang="scss">
 .landing {
   background: #fafafa;
   header {
	 background-image: url("/landing/header.svg");
	 height: 100vh;
	 background-repeat: no-repeat;
	 background-size: cover;
	 background-position: bottom center;
	 padding-top: 150px;
	 display: flex;
	 justify-content: center;
	 align-items: flex-start;
	 nav {
	   position: fixed;
	   top: 10px;
	   @media (max-width: 400px){
		 .btn {
		   padding: 2px 8px;
		   font-size: .75rem;
		 }
	   }
	 }
	 @media  (max-width: 1500px) {
	   padding-top: 300px;
	 }
	 @media  (max-width: 620px) {
	   padding-top: 120px;
	 }
	 .flag {
	   display: flex;
	   align-items: center;
	   .fi {
		 border-radius: 50%;
		 height: 25px;
		 width: 25px;
	   }
	 }
	 .banner--title {
	   display: flex;align-items: center;
	   background: linear-gradient(180deg, #4B48DC 0%, #D048DC 100%), #FFFFFF;
	   -webkit-background-clip: text;
	   -webkit-text-fill-color: transparent;
	   background-clip: text;
	   text-fill-color: transparent;
	   font-size: 3rem;
	   font-weight: 500;
	   @media  (max-width: 620px) {
			flex-direction: column;
	   }
	   .cf {
		 -webkit-background-clip: unset;
		 background: none;
	   }

	   .cf.cf-btc {
		 color: #f2a900;
		 -webkit-text-fill-color: #f2a900;
	   }
	 }
	 .currency-badge {
	   background: #E8E8F3;
	   border-radius: 10px;
	   padding: 7px;
	   display: flex;
	   align-items: center;
	   -webkit-text-fill-color: #202020;
	   color: #202020;
	   font-size: 1rem;
	   font-weight: 600;
	   .flag {
		 margin-right: 5px;
	   }
	 }
   }
 }
</style>