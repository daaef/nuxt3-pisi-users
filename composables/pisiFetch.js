import apiService from "~/services/api.service";

export const usePisiFetch = () => {
    return {
        auth: apiService().auth,
        business: apiService().business,
        support: apiService().support,
        util: apiService().util,
        user: apiService().user,
        kyc: apiService().kyc,
        transaction: apiService().transaction
    }
}