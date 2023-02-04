import {defineNuxtPlugin} from "nuxt/app";
import {VueDapp} from "vue-dapp";
import {ethers} from "ethers";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueDapp, {
        autoConnect: true, // Automatically connect MetaMask wallet when the page is loaded
        networks: {
            43114: {
                chainId: ethers.utils.hexValue(43114),
                blockExplorerUrls: ['https://snowtrace.io/'],
                chainName: 'Avalanche Mainnet C-Chain',
                rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
                nativeCurrency: {
                    name: 'AVAX',
                    decimals: 18,
                    symbol: 'AVAX',
                },
            },
            43113: {
                chainId: ethers.utils.hexValue(43113),
                blockExplorerUrls: ['https://testnet.snowtrace.io/'],
                chainName: 'Avalanche Fuji C-Chain',
                rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
                nativeCurrency: {
                    name: 'AVAX',
                    decimals: 18,
                    symbol: 'AVAX',
                },
            },
        },
    });
})