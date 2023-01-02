import Vue3OTPInput from 'vue3-otp-input'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Vue3OTPInput)
})