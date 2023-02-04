import { init } from '@web3-onboard/vue'
import injectedModule from '@web3-onboard/injected-wallets'

const injected = injectedModule()
const infuraKey = 'ccf20e72cea4456f9bd684e17b97b73a'
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

export default defineNuxtPlugin((nuxtApp) => {
    init({
        wallets: [injected],
        chains: [
            {
                id: '1',
                token: 'ETH',
                label: 'Ethereum Mainnet',
                rpcUrl: `https://mainnet.infura.io/v3/${infuraKey}`,
            },
            {
                id: '43114',
                token: 'AVAX',
                label: 'Avalanche Mainnet',
                rpcUrl: `https://avalanche-mainnet.infura.io/v3/${infuraKey}`,
            },
        ]
    })
})