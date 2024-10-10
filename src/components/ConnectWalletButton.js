import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from 'wagmi'
import { useEffect } from 'react'
import { baseSepolia } from 'wagmi/chains'

function ConnectWalletButton() {
    const account = useAccount()
    const { connectors, connect, status, error } = useConnect()
    const { disconnect } = useDisconnect()
    const { switchChain } = useSwitchChain()
    const { address, isConnected } = useAccount()
    const chainId = useChainId()
    const coinbaseConnector = connectors.find(connector => connector.name === 'Coinbase Wallet')
    const metamaskConnector = connectors.find(connector => connector.name === 'MetaMask')

    const REQUIRED_CHAIN = baseSepolia

    useEffect(() => {
        const checkAndSwitchChain = async () => {
          if (isConnected && chainId !== REQUIRED_CHAIN.id) {
            try {
              await switchChain({ chainId: REQUIRED_CHAIN.id })
            } catch (error) {
              console.error('Failed to switch chain:', error)
              // Optionally handle error (e.g., show user notification)
            }
          }
        }
    
        checkAndSwitchChain()
      }, [isConnected, chainId, switchChain])

    const handleLogin = () => {
        // Redirect user to the backend to initiate Google OAuth2 flow
        window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth`;
      };

    

    return (
        <>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', maxWidth: '600px', margin: '20px auto', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>Account</h2>
            <div style={{ fontFamily: 'Arial, sans-serif', color: '#555', fontSize: '16px' }}>
                <strong>Status:</strong> <span style={{ color: '#007bff' }}>{account.status}</span>
                <br />
                <strong>Addresses:</strong> <span style={{ color: '#007bff' }}>{account.addresses}</span>
                <br />
                <strong>Chain ID:</strong> <span style={{ color: '#007bff' }}>{account.chainId}</span>
            </div>
        </div>

        {!account.isConnected ? (
            <div>
            <button type="button" className='bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600' onClick={() => coinbaseConnector && connect({ connector: coinbaseConnector })}>
            Connect Wallet
            </button>
            
            </div>
        ) : (
            <div>
            <button type="button" className='bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600' onClick={() => disconnect()}>
                Disconnect
            </button>
            <br />
            <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">HealthyFood NFT</h1>
            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600"
            >
                Login with YouTube
            </button>
            </div>
            </div>
        )}
        </>
    )
}export default ConnectWalletButton