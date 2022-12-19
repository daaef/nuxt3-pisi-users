import 'assets/scss/index.scss'
import { ID_INJECTION_KEY } from "element-plus";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';

export default defineNuxtPlugin(nuxtApp => {
    // ElementPlus
    const elementPlusPlugin = {};
    nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
        prefix: Math.floor(Math.random() * 10000),
        current: 0,
    });
    nuxtApp.vueApp.use(ElementPlus, { size: 'small', zIndex: 3000 });
    // ElementPlus Icons
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        nuxtApp.vueApp.component(key, component)
    }
})