<template>
  <div>
	<h3>Wallet Address: {{ address }}</h3>
	<h3>Wallet Balance: {{ ethers.utils.formatEther(balance) }}</h3>
	<button @click="open">Connect Wallet</button>
	<button @click="disconnect">Disconnect Wallet</button>
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
import {ethers} from "ethers";
import {useCryptoStore} from "../stores/crypto";
import {abi, contractAddress} from "../constants/abi";

const emit = defineEmits([
  'connectedToStore'
])

const { open,  } = useBoard();
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
  emit('connectedToStore', store)
})

const store = useCryptoStore()

/*watch(provider,
	() => {
	  const signer = provider.value?.getSigner(address.value)
	  console.log('signer is', signer)
	})*/
onActivated(() => {
  store.$patch((state) => {
	state.address = address.value
	state.balance = balance.value
	state.wallet = wallet.value
	state.chainId = chainId.value
	state.isActivated = isActivated.value
	state.dnsAlias = dnsAlias.value
	state.network = network.value
  })
  store.$patch((state) => {
	state.provider = provider.value

	const signer = provider.value?.getSigner(address.value)
	console.log('signer is', signer)
	console.log('provider is', provider)
	console.log('state is', state)
	state.contract = new ethers.Contract(contractAddress, abi, signer)
  })
  emit('connectedToStore', store)
})

onChanged(()=> {
  store.$patch((state) => {
	state.address = address.value
	state.balance = balance.value
	state.wallet = wallet
	state.chainId = chainId.value
	state.isActivated = isActivated.value
	state.dnsAlias = dnsAlias.value
	state.network = network.value
  })
  console.log('state in onChanged is', store)
  store.$patch((state) => {
	state.provider = provider.value

	const signer = provider.value?.getSigner(address.value)
	console.log('signer is', signer)
	console.log('provider is', provider)
	console.log('state is', state)
	state.contract = new ethers.Contract(contractAddress, abi, signer)
  })
  emit('connectedToStore', store)
})


/*
watch(provider,
	() => {
	  emit('connected', store)
	})
*/

const connectors = [
  new MetaMaskConnector({
	appUrl: "http://localhost:3000",
  }),
  new WalletConnectConnector({
	qrcode: true,
	rpc: {
	  1: `https://rpc.ankr.com/eth_goerli/f8ba49aadf77f1a5cfbaade4d07c455711c68587f9f21ec8e0c7b3eff776d02a`,
	  56: `https://rpc.ankr.com/bsc_testnet_chapel/f8ba49aadf77f1a5cfbaade4d07c455711c68587f9f21ec8e0c7b3eff776d02a`
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