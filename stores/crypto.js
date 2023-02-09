import { defineStore } from "pinia";
import {usePisiFetch} from "~/composables/pisiFetch";
import {Handler} from "~/services/api.handle";
import {error, success} from "~/services/ROToastAndConfirmService";
import {ethers} from "ethers";
import {
    CoinbaseWalletConnector,
    MetaMaskConnector,
    useBoard,
    useEthers, useEthersHooks,
    useWallet,
    WalletConnectConnector
} from "vue-dapp";


const handler = new Handler()
export const useCryptoStore = defineStore({
  id: "crypto",
  state: () => ({
      loading: false,
      active: 'ETH',
      trx: '',
      matic: '',
      usd: '',
      ngn: '',
      eth: '',
      eur: '',
      connectors: [],
      contract: {},
      address: '',
      balance: null,
      chainId: '',
      isActivated: '',
      dnsAlias: '',
      network: '',
      provider: '',
      wallet: '',
      signer: '',
      disconnect: ()=>{},
      open: ()=>{},
  }),
  actions: {
    async eth2All() {
      await usePisiFetch().util.getConversion({from: 'ETH', to1: 'USD', to2: 'NGN', to3: 'EUR', to4: 'TRX', to5: 'MATIC'})
          .then(({EUR, MATIC, NGN, TRX, USD}) => {
              this.active = 'eth'
              this.eth = 1
              this.eur = EUR
              this.matic = MATIC
              this.ngn = NGN
              this.trx = TRX
              this.usd = USD
            // this.currencies = res.data.cryptoCurrencies
          }).catch(e => {
              this.loading = false
          })
    },
    async trx2All() {
      await usePisiFetch().util.getConversion({from: 'TRX', to1: 'USD', to2: 'NGN', to3: 'EUR', to4: 'ETH', to5: 'MATIC'})
          .then(({EUR, MATIC, NGN, ETH, USD}) => {
              this.active = 'trx'
              this.trx = 1
              this.eur = EUR
              this.matic = MATIC
              this.ngn = NGN
              this.eth = ETH
              this.usd = USD
            // this.currencies = res.data.cryptoCurrencies
          }).catch(e => {
              this.loading = false
          })
    },
    async matic2All() {
      await usePisiFetch().util.getConversion({from: 'MATIC', to1: 'USD', to2: 'NGN', to3: 'EUR', to4: 'TRX', to5: 'ETH'})
          .then(({EUR, ETH, NGN, TRX, USD}) => {
              this.active = 'matic'
              this.matic = 1
              this.eur = EUR
              this.eth = ETH
              this.ngn = NGN
              this.trx = TRX
              this.usd = USD
            // this.currencies = res.data.cryptoCurrencies
          }).catch(e => {
              this.loading = false
          })
    },
    async init() {
      const { open,  } = useBoard();
      const config = useRuntimeConfig()
      const infuraId = config.public.infura_id;
      const { wallet, onDisconnect, onAccountsChanged, onChainChanged, disconnect } = useWallet()
      const { chainId, isActivated, dnsAlias } = useEthers()
      const { onActivated, onChanged } = useEthersHooks()

      this.disconnect = disconnect
      this.open = open

      this.connectors = [
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
      ]
      onDisconnect(() => {
          console.log('disconnect')
      })
      onAccountsChanged(() => {
          console.log('accounts changed')
      })
      onChainChanged((chainId) => {
          console.log('chain changed', chainId)
      })

      onActivated(({ provider, address , signer, network, balance}) => {
          this.address = address
          this.provider = provider
          this.balance = balance
          this.wallet = wallet
          this.chainId = chainId
          this.isActivated = isActivated
          this.dnsAlias = dnsAlias
          this.network = network
          this.signer = signer
      })

      onChanged(({provider, address, balance, network, signer})=> {
          this.address = address
          this.provider = provider
          this.balance = balance
          this.wallet = wallet
          this.chainId = chainId
          this.isActivated = isActivated
          this.dnsAlias = dnsAlias
          this.network = network
          this.signer = signer
      })
      }
  },
  getters: {
      /*trxWei: (state) => {
          return ethers.utils.parseEther(state.trx)
      },
      maticWei: (state) => {
          return ethers.utils.parseEther(state.trx)
      }*/
  }
});
