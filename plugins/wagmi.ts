import { configureChains, createClient } from '@wagmi/core';
import { mainnet, optimism, polygon } from '@wagmi/core/chains';
import { publicProvider } from '@wagmi/core/providers/public';
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';

// Supported chains
const chains = [
    mainnet, optimism, polygon
];

// MetaMask
const mmConnector = new MetaMaskConnector({chains});

// connect chains and provider
const { provider, webSocketProvider } = configureChains(
    chains,
    [
        publicProvider()
    ],
);

const wagmiClient = createClient({
    autoConnect: true,
    connectors: [mmConnector, ],
    provider,
    webSocketProvider
});

export default defineNuxtPlugin(() => {
    return {
        provide: {
            mmConnector, wagmiClient
        }
    }
})