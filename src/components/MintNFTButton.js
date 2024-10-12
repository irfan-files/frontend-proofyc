import * as React from "react";
import {
  useAccount,
  BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import abi from "../abiMintingAccount.json";
import { useState } from "react";

const MintNFTButton = ({ proofData, tokenURI }) => {
  const [minting, setMinting] = useState(false);
  const [errorState, setError] = useState(null);
  const [txHash, setTxHash] = useState(null);
  const account = useAccount();
  const proofDataStringify = JSON.stringify(proofData);
  
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

  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const handleMint = async (e) => {
    e.preventDefault();
    await handleSwitchChain();

    try {
      await writeContract({
        address: "0x393c916BC6dBbb855392498C79451a4eD696E081",
        abi: abi,
        functionName: "mintAccount",
        args: [proofData, tokenURI],
      });
    } catch (err) {
      console.error("Failed to mint NFT:", err);
    }
  };

  return (
    <form onSubmit={handleMint}>
      <button
        class="overflow-hidden gap-3 self-stretch px-7 py-4 mt-16 max-w-full text-lg font-semibold leading-loose text-white bg-blue-600 rounded-lg border border-violet-500 border-solid shadow-sm w-[164px] max-md:px-5 max-md:mt-10"
        disabled={isPending || isConfirming}
        type="submit"
      >
        {isPending ? "Preparing..." : isConfirming ? "Minting..." : "Mint NFT"}
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {error && (
        <div>
          Error:{" "}
          {error instanceof BaseError ? error.shortMessage : error.message}
        </div>
      )}
      <p></p>
    </form>
  );
};

export default MintNFTButton;
