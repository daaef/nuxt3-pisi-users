export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$filters = {
        authCode(value : any){
            const converted = value.match(/.{1,4}/g);
            return converted.join(' ')
        }
    }
})