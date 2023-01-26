/**
 * Author: Afekhide Gbadamosi
 * Date: 4th December 2021
 **/

// import {useRuntimeConfig} from "nuxt/app";
import {useNuxtApp} from "#app";
import authService from "~/services/api/auth.service";
import businessService from "~/services/api/business.service";
import supportService from "~/services/api/support.service";
import utilService from "~/services/api/util.service";
import userService from "~/services/api/user/user.service";
import kycService from "~/services/api/user/kyc.service";

// header for Axios calls
// Axios instance registered in nuxt.config is received here for api calls
export default () => {
    const config = useRuntimeConfig();
    const nuxt = useNuxtApp()
    const $fetch = nuxt?.$http

    return ({
        logStuff(){
            console.log('useNuxt App', useNuxtApp())
            console.log('process is', process)
            console.log('config is', config)
        },
        auth: authService($fetch, config),
        business: businessService($fetch, config),
        support: supportService($fetch, config),
        util: utilService($fetch, config),
        user: userService($fetch, config),
        kyc: kycService($fetch, config)
    });
}


