<script>
import { ethers } from 'ethers';
import {
  connect, disconnect, erc20ABI, fetchSigner, getAccount, getNetwork, getProvider, watchAccount, watchNetwork
} from '@wagmi/core';

definePageMeta({
  layout: 'landing',
  auth: 'guest'
});
export default {
  methods: {
	async connectMetaMask() {
	  console.log("connect");
	  const result = await connect({connector: this.$mmConnector});
	  console.log(result);
	},
	async disconnectWallet() {
	  console.log("disconnect");
	  await disconnect();
	},
	async fetchUsdcBalancePolygon() {
	  // read example
	  const newProvider = this.getProvider();
	  const contractRead = new ethers.Contract(
		  "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",  // USDC contract on Polygon
		  this.erc20ABI,
		  newProvider
	  );
	  const balance = await contractRead.balanceOf(this.address);
	  console.log("balance: ");
	  console.log(balance);
	  // write example
	  /*
	  const signer = await fetchSigner();
	  const contractWrite = new ethers.Contract(
		"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",  // USDC contract on Polygon
		this.erc20ABI,
		signer
	  );
	  await contractWrite.transfer(this.address, "100000"); // send 0.1 USDC
	  */
	},
  },
  setup() {
	const chainId = ref(0);
	const address = ref("");
	const account = getAccount();
	const { chain } = getNetwork();
	if (chain) {
	  chainId.value = chain.id;
	}
	if (account) {
	  address.value = account.address;
	}
	watchAccount(function(account) {
	  if (account.address) {
		address.value = account.address;
	  } else {
		address.value = "";
	  }
	});
	watchNetwork(function(network) {
	  if (network.chain) {
		chainId.value = network.chain.id;
	  } else {
		chainId.value = 0;
	  }
	});
	return { address, chainId, connect, disconnect, erc20ABI, fetchSigner, getProvider }
  },
}
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
	</header>
	<div>
	  <h1>Nuxt3 Wagmi Starter</h1>

	  <button @click="connectMetaMask">Connect MetaMask</button>
	  <button @click="disconnectWallet">Disconnect</button>
	  <button @click="fetchUsdcBalancePolygon">Fetch USDC balance</button>

	  <p>Chain: {{chainId}}</p>
	  <p>Address: {{address}}</p>

	</div>
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