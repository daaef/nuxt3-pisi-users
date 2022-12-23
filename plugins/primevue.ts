import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
// @ts-ignore
import ToastService from "primevue/toastservice/toastservice.esm";
import Toast from "primevue/toast";
import InputText from "primevue/inputtext";
import Menu from "primevue/menu";
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: false, inputStyle: "filled" });
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("InputNumber", InputNumber);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("Menu", Menu);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  //other components that you need
});
