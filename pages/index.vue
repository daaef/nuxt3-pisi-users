<script setup>
import {
  MetaMaskConnector,
  WalletConnectConnector,
  CoinbaseWalletConnector,
  useBoard,
  useWallet, useEthers, useEthersHooks
} from "vue-dapp";
import {onMounted} from "vue";
import abi from "../constants/abi";

const { open } = useBoard();
const config = useRuntimeConfig()
const infuraId = config.public.infura_id;
const { wallet, onDisconnect, onAccountsChanged, onChainChanged, disconnect } = useWallet()
const { address, balance, chainId, isActivated, dnsAlias, network } = useEthers()
const { onActivated, onChanged } = useEthersHooks()
onDisconnect(() => {
  console.log('disconnect')
})
onAccountsChanged(() => {
  console.log('accounts changed')
})
onChainChanged((chainId) => {
  console.log('chain changed', chainId)
})

const connectors = [
  new MetaMaskConnector({
	appUrl: "http://localhost:3000",
  }),
  new WalletConnectConnector({
	qrcode: true,
	rpc: {
	  1: `https://mainnet.infura.io/v3/${infuraId}`,
	  56: `https://rpc.ankr.com/bsc/f8ba49aadf77f1a5cfbaade4d07c455711c68587f9f21ec8e0c7b3eff776d02a`
	},
  }),
  new CoinbaseWalletConnector({
	appName: "Vue Dapp",
	jsonRpcUrl: `https://mainnet.infura.io/v3/${infuraId}`,
  }),
];
onMounted(()=> console.log('abi', abi))
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
	  <div class="w-full flex flex-col">
	  	<h3 class="banner--title">
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
	  </h3>
		<h3>Wallet Address: {{ address }}</h3>
		<h3>Wallet Balance: {{ balance }}</h3>
	  </div>
	  <button @click="open">Connect Wallet</button>
	  <ClientOnly>
		<vd-board :connectors="connectors" dark />

	  </ClientOnly>
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