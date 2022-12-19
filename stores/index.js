import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'main',
    state: () => ({
        loading: false,
        users: [
            {
                id: 1,
                name: 'Matthew Ero',
                location: 'Nigeria',
                active: false
            },
            {
                id: 2,
                name: 'Jace Rodman',
                location: 'Nigeria',
                active: false
            },
            {
                id: 3,
                name: 'Tunde Ojigho',
                location: 'Nigeria',
                active: false
            },
            {
                id: 4,
                name: 'Jace Rodman',
                location: 'Nigeria',
                active: false
            },
            {
                id: 5,
                name: 'Jace Rodman',
                location: 'Nigeria',
                active: false
            },
            {
                id: 6,
                name: 'Jace Rodman',
                location: 'Nigeria',
                active: false
            }
        ],
        payments: [
            {
                id: 1,
                name: 'Matthew Ero',
                amount: '₦72,347.50',
                rate: '$1 = ₦433.72',
                payState: 'Request',
                country: 'NGN'
            },
            {
                id: 2,
                name: 'Jace Rodman',
                amount: '₦72,347.50',
                rate: '$1 = ₦433.72',
                payState: 'Waiting...',
                country: 'NGN'
            },
            {
                id: 3,
                name: 'Tunde Ojigho',
                amount: '₦72,347.50',
                rate: '$1 = ₦433.72',
                payState: 'Request',
                country: 'NGN'
            },
            {
                id: 4,
                name: 'Jace Rodman',
                amount: '₦72,347.50',
                rate: '$1 = ₦433.72',
                payState: 'Paid',
                country: 'NGN'
            },
            {
                id: 5,
                name: 'Jace Rodman',
                amount: '₦72,347.50',
                rate: '$1 = ₦433.72',
                payState: 'Request',
                country: 'NGN'
            },
            {
                id: 6,
                name: 'Jace Rodman',
                amount: '₦72,347.50',
                rate: '$1 = ₦433.72',
                payState: 'Request',
                country: 'NGN'
            }
        ],
        coins: [
            {
                id: 1,
                coin: 'Bitcoin',
                name: 'BTC',
                icon: 'btc',
                selected: false
            },
            {
                id: 2,
                coin: 'Ethereum',
                name: 'ETH',
                icon: 'eth',
                selected: false
            },
            {
                id: 3,
                coin: 'TRON',
                name: 'TRX',
                icon: 'tron',
                selected: false
            },
            {
                id: 4,
                coin: 'Tether',
                name: 'USDT',
                icon: 'tether',
                selected: false
            },
            {
                id: 5,
                coin: 'Yearn',
                name: 'YFI',
                icon: 'yearn',
                selected: false
            },
            {
                id: 6,
                coin: 'Dogecoin',
                name: 'DOGE',
                icon: 'dodgecoin',
                selected: false
            },
            {
                id: 7,
                coin: 'Polygon',
                name: 'MATIC',
                icon: 'polygon',
                selected: false
            }
        ],
        currencies: [
            {
                id: 1,
                coin: 'Naira',
                name: 'NGN',
                icon: 'ngn',
                selected: false
            },
            {
                id: 2,
                coin: 'Euros',
                name: 'EUR',
                icon: 'eur',
                selected: false
            },
            {
                id: 3,
                coin: 'Dollars',
                name: 'USD',
                icon: 'usd',
                selected: false
            }
        ]
    }),
    actions: {
        connect(){},
        disconnect(){},
    }
})