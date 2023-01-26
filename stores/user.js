import { defineStore } from "pinia";
import {usePisiFetch} from "~/composables/pisiFetch";
import {Handler} from "~/services/api.handle";

const handler = new Handler()
export const userStore = defineStore({
  id: "user",
  state: () => ({
    loading: false,
  }),
  actions: {
    async addBank(payload) {
      console.log('adding bank')
      await handler
          .handle(usePisiFetch().user.addBank, {
              headers: { 'Authorization': useAuth().strategy.token.get() },
              data: payload
            })
          .then(res => {
            console.log(res.data)
            // this.currencies = res.data.cryptoCurrencies
          })
    },
    async sendOTP(payload) {
      console.log('Sending OTP')
      const config = useRuntimeConfig();
      await $fetch(`${config.public.api_url}/auth/resend-otp/`, {
        method: "POST",
        body: payload
      }).then(res => {
        return Promise.resolve(res?.msg)
        // this.currencies = res.data.cryptoCurrencies
      }).catch(err => {
        console.log('error gotten',err)
        return Promise.reject(err)
      })
    },
    async resetPassword(payload) {
      console.log('Resetting Password')
      const config = useRuntimeConfig();
      await $fetch(`${config.public.api_url}/auth/init-password-reset`, {
        method: "POST",
        body: payload
      }).then(res => {
        return Promise.resolve(res?.msg)
        // this.currencies = res.data.cryptoCurrencies
      }).catch(err => {
        console.log('error gotten',err)
        return Promise.reject(err)
      })
    },
    async changePassword(payload) {
      console.log('Resetting Password')
      const config = useRuntimeConfig();
      await $fetch(`${config.public.api_url}/auth/complete-password-reset`, {
        method: "POST",
        body: payload
      }).then(res => {
        return Promise.resolve(res?.msg)
        // this.currencies = res.data.cryptoCurrencies
      }).catch(err => {
        console.log('error gotten',err)
        return Promise.reject(err)
      })
    },
    async verifyMail(payload) {
      console.log('Verify User')
      const config = useRuntimeConfig();
      await $fetch(`${config.public.api_url}/auth/verify-email/${payload}`).then(res => {
          console.log(res)
          return Promise.resolve(res?.data?.msg)
          // this.currencies = res.data.cryptoCurrencies
        }).catch(err => {
          console.log('error gotten',err)
        return Promise.reject(err)
      })
    },
  }
});
