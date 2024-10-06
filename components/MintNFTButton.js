// src/components/MintNFTButton.js
import React, { useState } from "react";
import { ethers } from "ethers";
import HealthyFoodABI from "../HealthyFood.json"; // Adjust the path if necessary

const MintNFTButton = ({ channelId, channelTitle, tokenURI, onMinted }) => {
  const [minting, setMinting] = useState(false);
  const [error, setError] = useState(null);
  const [txHash, setTxHash] = useState(null);

  const handleMint = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask is not installed!");
        return;
      }

      setMinting(true);
      setError(null);

      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

      // Initialize the contract
      const contract = new ethers.Contract(
        contractAddress,
        HealthyFoodABI.abi,
        signer
      );

      // Call the mint function
      const tx = await contract.mint(tokenURI);
      setTxHash(tx.hash);
      console.log("Transaction sent: ", tx.hash);

      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      console.log("Transaction mined: ", receipt);

      // Extract the tokenId from the event
      const event = receipt.events.find((event) => event.event === "Minted");
      const tokenId = event.args.tokenId.toString();

      onMinted(tokenId);
    } catch (err) {
      console.error("Error minting NFT:", err);
      setError("Failed to mint NFT.");
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
            href={`https://etherscan.io/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View on Etherscan
          </a>
        </p>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default MintNFTButton;
