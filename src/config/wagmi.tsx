import { http, cookieStorage, createConfig, createStorage } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
// import { publicProvider } from 'wagmi/provider/public'
import { coinbaseWallet } from 'wagmi/connectors'

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [baseSepolia],
//   [publicProvider()]
// )

export const config = createConfig({
  chains: [baseSepolia],
    connectors: [
      coinbaseWallet({
        appName: 'youtube-proof',
        preference: 'all', 
      }),
    ],
    ssr: true,
    transports: {
      [baseSepolia.id]: http('https://base-sepolia.g.alchemy.com/v2/FGE7dw4IyA3IcrGDZG-7bpDWpclk61H4'),
    },
})