import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import MintNFTButton from "./MintNFTButton";
import DisplayNFT from "./DisplayNFT";

const OAuthCallback = () => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [tokenURI, setTokenURI] = useState(null);
  const [error, setError] = useState(null);
  const [mintedTokenId, setMintedTokenId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get("access_token");
    const channelId = queryParams.get("channel_id");
    const tokenURI = queryParams.get("token_uri");
    const channelTitle = queryParams.get("channel_title");
    const proofDataIdentifier = queryParams.get("proof_data_identifier");
    const proofData = queryParams.get("proof_claimInfo");

    console.log("Query Parameters:", {
      accessToken,
      channelId,
      tokenURI,
      channelTitle,
      proofDataIdentifier,
      proofData,
    });

    const proofDataJSON = JSON.stringify(proofData);
    console.log("isi proof data JSON:", proofDataJSON);

    console.log("isi proof data", proofData);

    if (
      accessToken &&
      channelId &&
      tokenURI &&
      channelTitle &&
      proofDataIdentifier &&
      proofData
    ) {
      setChannelInfo({
        channelId,
        channelTitle,
        proofDataIdentifier,
        proofData,
        proofDataJSON,
      });
      setTokenURI(tokenURI);
    } else {
      setError("Required query parameters are missing.");
    }
  }, [location]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!channelInfo) {
    return <div>Loading...</div>; // Loading state until channelInfo is available
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Authenticated YouTube Account</h2>
      <p>
        <strong>Channel ID:</strong> {channelInfo.channelId}
      </p>
      <p>
        <strong>Channel Name:</strong> {channelInfo.channelTitle}
      </p>
      <p>
        <strong>Proof Data Identifier:</strong>{" "}
        {channelInfo.proofDataIdentifier}
      </p>
      <p>
        <strong>Token URI:</strong> {tokenURI}
      </p>

      <p>
        <strong>proof claim info: </strong> {channelInfo.proofDataJSON}
      </p>

      {!mintedTokenId ? (
        <MintNFTButton
          channelId={channelInfo.channelId}
          channelTitle={channelInfo.channelTitle}
          tokenURI={tokenURI}
          proofDataIdentifier={channelInfo.proofDataIdentifier}
          onMinted={(tokenId) => setMintedTokenId(tokenId)}
        />
      ) : (
        <DisplayNFT tokenId={mintedTokenId} />
      )}
    </div>
  );
};
export default OAuthCallback;
