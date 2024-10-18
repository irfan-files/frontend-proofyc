import { http, cookieStorage, createConfig, createStorage } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import { coinbaseWallet } from 'wagmi/connectors'

export const config = createConfig({
  chains: [baseSepolia],
    connectors: [
      coinbaseWallet({
        appName: 'Creator Hub',
        preference: 'all', 
      }),
    ],
    ssr: true,
    transports: {
      // [base.id]: http('https://base-mainnet.g.alchemy.com/v2/FGE7dw4IyA3IcrGDZG-7bpDWpclk61H4'),
      [baseSepolia.id]: http('https://base-sepolia.g.alchemy.com/v2/FGE7dw4IyA3IcrGDZG-7bpDWpclk61H4'),
    },
})