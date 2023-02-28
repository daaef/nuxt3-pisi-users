import {useStore} from "~/stores";


export const useUtils = () => {
    return {
        getCountry: (id) => {
            return useStore()?.countries?.find(country => {
                return country.id === id
            })
        },
        getCryptoCurrency: (id) => {
            const curr = useStore()?.currencies?.find(currency => {
                return currency.id === id
            })
            return curr
        },
        getCurrency: (id) => {
            const curr = useStore()?.fiatCurrencies?.find(currency => {
                return currency.id === id
            })
            return curr
        }
    }
}