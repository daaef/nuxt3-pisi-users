<template>
  <div>
	<h3>Wallet Address: {{ address }}</h3>
	<h3>Wallet Balance: {{ balance }}</h3>
	<button @click="open">Connect Wallet</button>
	<ClientOnly>
	  <vd-board :connectors="connectors" dark />

	</ClientOnly>
  </div>
</template>

<script setup>
import {
  MetaMaskConnector,
  WalletConnectConnector,
  CoinbaseWalletConnector,
  useBoard,
  useWallet, useEthers, useEthersHooks
} from "vue-dapp";
import {onMounted, watch} from "vue";
import {watchEffect} from "@vue/runtime-core";

const emit = defineEmits([
  'connected'
])

const { open } = useBoard();
const config = useRuntimeConfig()
const infuraId = config.public.infura_id;
const { wallet, onDisconnect, onAccountsChanged, onChainChanged, disconnect } = useWallet()
const { address, balance, chainId, isActivated, dnsAlias, network, provider } = useEthers()
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
onMounted(()=> {
  emit('connected', provider)
})

watch(provider,
	() => {
	  emit('connected', provider)
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
</script>

<style scoped>

</style>