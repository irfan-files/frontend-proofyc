import React, { useEffect, useState } from "react";
import { ethers, JsonRpcProvider } from "ethers"; // Import JsonRpcProvider directly

import HealthyFoodABI from "../HealthyFood.json"; // Adjust the path if necessary

const DisplayNFT = ({ tokenId }) => {
  const [metadata, setMetadata] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        // Check if MetaMask is installed
        if (!window.ethereum) {
          throw new Error("MetaMask is not installed!");
        }

        const provider = new JsonRpcProvider(window.ethereum); // Use JsonRpcProvider directly

        const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

        // Validate contract address
        if (!contractAddress) {
          throw new Error("Contract address is not defined.");
        }

        const contract = new ethers.Contract(
          contractAddress,
          HealthyFoodABI,
          provider
        );

        // Fetch tokenURI from the contract
        const tokenURI = await contract.tokenURI(tokenId);
        console.log("Token URI:", tokenURI);

        // Convert IPFS URI if necessary
        const metadataURL = tokenURI.startsWith("ipfs://")
          ? `https://gateway.pinata.cloud/ipfs/${tokenURI.split("ipfs://")[1]}`
          : tokenURI;

        // Fetch metadata
        const response = await fetch(metadataURL);
        if (!response.ok) {
          throw new Error("Failed to fetch metadata.");
        }
        const data = await response.json();
        setMetadata(data);
      } catch (err) {
        console.error("Error fetching metadata:", err);
        setError(err.message || "Failed to fetch NFT metadata.");
      }
    };

    fetchMetadata();
  }, [tokenId]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!metadata) {
    return <div>Loading NFT details...</div>;
  }

  return (
    <div className="mt-6 p-4 border rounded shadow">
      <h3 className="text-xl font-bold mb-2">Your NFT</h3>
      {metadata.image && (
        <img
          src={metadata.image}
          alt={metadata.name}
          className="w-64 h-64 object-cover mb-4"
        />
      )}
      <p>
        <strong>Name:</strong> {metadata.name}
      </p>
      <p>
        <strong>Description:</strong> {metadata.description}
      </p>
      {metadata.attributes?.length > 0 && (
        <div className="mt-2">
          <strong>Attributes:</strong>
          <ul>
            {metadata.attributes.map((attr, index) => (
              <li key={index}>
                {attr.trait_type}: {attr.value}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="mt-2">
        <strong>Token ID:</strong> {tokenId}
      </p>
    </div>
  );
};

export default DisplayNFT;
