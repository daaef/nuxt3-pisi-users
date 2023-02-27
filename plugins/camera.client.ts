import {defineNuxtPlugin} from "#app";
import Camera from 'simple-vue-camera';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('camera', Camera)
})