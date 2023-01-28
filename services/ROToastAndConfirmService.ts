import {ToastSeverity} from 'primevue/api';
import {useNuxtApp} from "#app";

const lifeTime = 4000;

export function info(title: string = 'Hey there!', body: string = 'There should some info somewhere'): void {
    useNuxtApp().vueApp.config.globalProperties.$toast.add({severity: ToastSeverity.INFO, summary: title, detail: body, life: lifeTime});
}

export function error(title: string = 'Error!', body: string = 'What did you do this time?'): void {
    useNuxtApp().vueApp.config.globalProperties.$toast.add({severity: ToastSeverity.ERROR, summary: title, detail: body, life: lifeTime});
}

export function success(title: string = 'Success!', body: string = 'Successful!'): void {
    useNuxtApp().vueApp.config.globalProperties.$toast.add({severity: ToastSeverity.SUCCESS, summary: title, detail: body, life: lifeTime});
}


export function warn(title: string = 'Warning!', body: string = 'Be careful!'): void {
    useNuxtApp().vueApp.config.globalProperties.$toast.add({severity: ToastSeverity.WARN, summary: title, detail: body, life: lifeTime});
}

export function confirm({
                            header = 'Confirmation',
                            message = 'Are you sure you want to proceed?',
                            icon = 'pi pi-exclamation-triangle',
                            accept = () => {
                            },
                            reject = () => {
                            },
                            onShow = () => {
                            },
                            onHide = () => {
                            },
                        }): void {
    useNuxtApp().vueApp.config.globalProperties.$confirm.require({message, header, icon, accept, reject, onShow, onHide});
}