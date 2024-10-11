import { http, cookieStorage, createConfig, createStorage } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'
import { coinbaseWallet, injected } from 'wagmi/connectors'

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
      // [base.id]: http('https://base-mainnet.g.alchemy.com/v2/FGE7dw4IyA3IcrGDZG-7bpDWpclk61H4'),
      [baseSepolia.id]: http('https://base-sepolia.g.alchemy.com/v2/FGE7dw4IyA3IcrGDZG-7bpDWpclk61H4'),
    },
})