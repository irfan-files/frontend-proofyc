import React, { useState } from "react";
import { ethers } from "ethers";
import HealthyFoodABI from "../HealthyFood.json"; // Adjust the path if necessary

// const url = "https://sepolia.base.org";
const provider = new ethers.BrowserProvider(window.ethereum);

const MintNFTButton = ({ channelId, channelTitle, tokenURI, onMinted }) => {
  const [minting, setMinting] = useState(false);
  const [error, setError] = useState(null);
  const [txHash, setTxHash] = useState(null);

  const handleConnectWallet = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const network = await provider.getNetwork();
      if (network.chainId !== 84532) {
        // Base Sepolia testnet chain ID
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x14a34" }], // Base Sepolia testnet chain ID in hex
        });
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setError("Failed to connect wallet. Please try again.");
    }
  };

  // const handleMint = async () => {
  //   try {
  //     // Check if MetaMask is installed
  //     if (!window.ethereum) {
  //       alert("MetaMask is not installed!");
  //       return;
  //     }

  //     setMinting(true);
  //     setError(null);

  //     // Request account access if needed
  //     await window.ethereum.request({ method: "eth_requestAccounts" });

  //     const signer = await provider.getSigner();

  //     const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

  //     // Validate contract address
  //     if (!contractAddress) {
  //       throw new Error("Contract address is not defined.");
  //     }

  //     // Log the ABI and Contract Address for debugging
  //     console.log("HealthyFoodABI:", HealthyFoodABI);
  //     console.log("Contract Address:", contractAddress);

  //     // Initialize the contract
  //     const contract = new ethers.Contract(
  //       contractAddress,
  //       HealthyFoodABI,
  //       signer
  //     );

  //     // Call the mint function on the contract with tokenURI
  //     const tx = await contract.mint(tokenURI);
  //     setTxHash(tx.hash);
  //     console.log("Transaction sent: ", tx.hash);

  //     // Wait for the transaction to be mined
  //     const receipt = await tx.wait();
  //     console.log("Transaction mined: ", receipt);

  //     // Extract the tokenId from the event
  //     const event = receipt.events.find((event) => event.event === "Minted");
  //     if (!event || !event.args[1]) {
  //       // Adjusted index to 1 for tokenId
  //       throw new Error("Minting event not found or tokenId is missing.");
  //     }
  //     const tokenId = event.args[1].toString(); // Adjusted index to 1

  //     onMinted(tokenId); // Pass the minted tokenId to the parent component
  //   } catch (err) {
  //     console.error("Error minting NFT:", err);
  //     setError(err.message || "Failed to mint NFT.");
  //   } finally {
  //     setMinting(false);
  //   }
  // };

  const handleMint = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask is not installed!");
        return;
      }

      setMinting(true);
      setError(null);

      await handleConnectWallet();

      const signer = await provider.getSigner();
      const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

      if (!contractAddress) {
        throw new Error("Contract address is not defined.");
      }

      const contract = new ethers.Contract(
        contractAddress,
        HealthyFoodABI,
        signer
      );

      const tx = await contract.mint(tokenURI);
      setTxHash(tx.hash);
      console.log("Transaction sent: ", tx.hash);

      const receipt = await tx.wait();
      console.log("Transaction mined: ", receipt);

      const event = receipt.events.find((event) => event.event === "Minted");
      if (!event || !event.args[1]) {
        throw new Error("Minting event not found or tokenId is missing.");
      }
      const tokenId = event.args[1].toString();

      onMinted(tokenId);
    } catch (err) {
      console.error("Error minting NFT:", err);
      setError(err.message || "Failed to mint NFT.");
    } finally {
      setMinting(false);
    }
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleMint}
        disabled={minting}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
      >
        {minting ? "Minting..." : "Mint NFT"}
      </button>
      {txHash && (
        <p className="mt-2">
          Transaction Hash:{" "}
          <a
            href={`https://sepolia.basescan.org/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View on BaseScan
          </a>
        </p>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default MintNFTButton;
