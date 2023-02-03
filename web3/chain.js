const supportedChains = [
    {
        name: 'Avalanche Mainnet C-Chain',
        short_name: 'AVAX',
        chain: 'Avalanche',
        network: 'mainnet',
        chain_id: 43114,
        network_id: 43114,
        rpc_url: 'https://api.avax.network/ext/bc/C/rpc',
        native_currency: {
            symbol: 'AVAX',
            name: 'AVAX',
            decimals: '18',
            contractAddress: '',
            balance: '',
        },
    },
    {
        name: 'Avalanche Fuji C-Chain',
        short_name: 'FUJI C-Chain',
        chain: 'Avalanche',
        network: 'testnet',
        chain_id: 43113,
        network_id: 43113,
        rpc_url: 'https://api.avax-test.network/ext/bc/C/rpc',
        native_currency: {
            symbol: 'AVAX',
            name: 'AVAX',
            decimals: '18',
            contractAddress: '',
            balance: '',
        },
    }
]

export default supportedChains;