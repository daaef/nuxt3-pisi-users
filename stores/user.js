import { defineStore } from "pinia";
import {usePisiFetch} from "~/composables/pisiFetch";
import {Handler} from "~/services/api.handle";
import {error, success} from "~/services/ROToastAndConfirmService";

const handler = new Handler()
export const userStore = defineStore({
  id: "user",
  state: () => ({
    loading: false,
    twoFA: null
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
            console.log('returned for bank addition', res)
            success(undefined, 'Successfully added Bank Account')
            // this.currencies = res.data.cryptoCurrencies
          }).catch(e => {
              if (typeof e !== 'string'){
                  e.forEach(err => {
                      error(undefined, err)
                  })
              } else {
                  error(undefined, e)
              }
              this.loading = false
          })
    },
    async register(payload) {
      console.log('registering User')
      this.loading = true
      await handler
          .handle(usePisiFetch().auth.register, {
              data: payload
            })
          .then(res => {
            console.log('returned for Registration', res)
            success(undefined, 'Successfully Registered User')

            this.loading = false
            useRouter().push({
              path: '/auth/verify-email',
              query: { email: payload?.email },
            })
            // this.currencies = res.data.cryptoCurrencies
          }).catch(e => {
              if (typeof e !== 'string'){
                  e.forEach(err => {
                      error(undefined, err)
                  })
              } else {
                  error(undefined, e)
              }
            this.loading = false
          })
    },
    async sendOTP(payload) {
        await handler
        .handle(usePisiFetch().auth.resendOTP, {
            data: payload
        })
        .then(res => {
            success(undefined, 'Successfully Sent OTP')

            this.loading = false``
            // this.currencies = res.data.cryptoCurrencies
        }).catch(e => {
            console.dir( e)
            if (typeof e !== 'string'){
                console.log(e)
                /*e.forEach(err => {
                    error(undefined, err)
                })*/
            } else {
                error(undefined, e)
            }
            this.loading = false
        })
    },
    async verifyMail(payload) {
        console.log('Verify User code', payload)
        await handler
            .handle(usePisiFetch().auth.verifyEmail, {
                data: payload
            })
            .then(res => {
                console.log('Verify User code, got something', res)
                success('Successfully Verified!', 'Now login to your account')

                this.loading = false
                useRouter().push({
                    path: '/auth/login'
                })
                return Promise.resolve(res)
                // this.currencies = res.data.cryptoCurrencies
            }).catch(e => {
                if (typeof e !== 'string'){
                    e.forEach(err => {
                        error(undefined, err)
                    })
                } else {
                    error(undefined, e)
                }
                this.loading = false
            })
      },
    async resetPassword(payload) {
        this.loading = true
      await handler
          .handle(usePisiFetch().auth.initPasswordReset, {
              data: payload
          }).then(() => {

              this.loading = false
        success(undefined, 'Check your mail for an otp')
              useRouter().push({
                  path: '/auth/complete-reset',
                  query: { email: payload?.email },
              })
        // this.currencies = res.data.cryptoCurrencies
      }).catch(err => {
              this.loading = false
          error(undefined, err)
      })
    },
    async changePassword(payload) {
        this.loading = true
        await handler
            .handle(usePisiFetch().auth.completePasswordReset, {
                data: payload
            }).then(() => {
                this.loading = false
                success(undefined, 'Password reset successfully!')
                useRouter().push('/auth/login')
                // this.currencies = res.data.cryptoCurrencies
            }).catch(err => {
                this.loading = false
                error(undefined, err)
            })
    },
    async enable2FA(payload) {
        await handler
            .handle(usePisiFetch().auth.enable2fa, {
                headers: { 'Authorization': useAuth().strategy.token.get() },
                data: payload
            }).then((res) => {
                this.loading = false
                this.twoFA = res
                // this.currencies = res.data.cryptoCurrencies
            }).catch(err => {
                this.loading = false
                error(undefined, err)
            })
    },
  }
});
