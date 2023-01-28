import VueCountdown from '@chenfengyuan/vue-countdown'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("countdown", VueCountdown)
})