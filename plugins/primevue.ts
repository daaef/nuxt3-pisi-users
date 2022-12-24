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
import MultiSelect from "primevue/multiselect";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import {FilterMatchMode} from "primevue/api";
import Dialog from "primevue/dialog";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true, inputStyle: "filled" });
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.use(FilterMatchMode);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("InputNumber", InputNumber);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("Menu", Menu);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("MultiSelect", MultiSelect);
  nuxtApp.vueApp.component("Column", Column);
  nuxtApp.vueApp.component("DataTable", DataTable);
  nuxtApp.vueApp.component("Dialog", Dialog);
  //other components that you need
});
