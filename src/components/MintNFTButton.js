import * as React from 'react'
import { 
  useAccount,
  BaseError,
  useWaitForTransactionReceipt, 
  useWriteContract 
} from 'wagmi'
import abi from '../abiMintingAccount.json'
import { useState } from 'react'


const MintNFTButton = ({ proofData, tokenURI }) => {
  const [minting, setMinting] = useState(false);
  const [errorState, setError] = useState(null);
  const [txHash, setTxHash] = useState(null);
  const account = useAccount()
  const proofDataStringify = JSON.stringify(proofData) 
  console.log(proofDataStringify)
  const handleSwitchChain = async () => {
    try {
      if (account.chainId !== 84532) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x14a34" }],
        });
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setError("Failed to connect wallet. Please try again.");
    }
  };

  const { data: hash, error, isPending, writeContract } = useWriteContract()
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    })

  const handleMint = async (e) => {
    e.preventDefault()
    await handleSwitchChain()
    
    try {
      await writeContract({
        address: process.env.REACT_APP_CONTRACT_ADDRESS,
        abi: abi,
        functionName: 'mintAccount',
        args: [proofData, tokenURI],
      })
    } catch (err) {
      console.error('Failed to mint NFT:', err)
    }
  }

  return (
    <form onSubmit={handleMint}>
      <button 
        disabled={isPending || isConfirming} 
        type="submit"
      >
        {isPending ? 'Preparing...' : isConfirming ? 'Minting...' : 'Mint NFT'}
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {error && (
        <div>Error: {error instanceof BaseError ? error.shortMessage : error.message}</div>
      )}
      <p>

      </p>
    </form>
  )
}

export default MintNFTButton;