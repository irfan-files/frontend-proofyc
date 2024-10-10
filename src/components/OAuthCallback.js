import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MintNFTButton from "./MintNFTButton";
import DisplayNFT from "./DisplayNFT";

const OAuthCallback = () => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [tokenURI, setTokenURI] = useState(null);
  const [proofDataObject, setProofDataObject] = useState(null);
  const [error, setError] = useState(null);
  const [mintedTokenId, setMintedTokenId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get("access_token");
    const channelId = queryParams.get("channel_id");
    const tokenURI = queryParams.get("token_uri");
    const channelTitle = queryParams.get("channel_title");

    // Get data from proof
    const proofContext = queryParams.get("context");
    const proofParameters = queryParams.get("parameters");
    const proofProvider = queryParams.get("provider");
    const proofEpoch = queryParams.get("epoch");
    const proofIdentifier = queryParams.get("identifier");
    const proofOwner = queryParams.get("owner");
    const proofTimestamps = queryParams.get("timestamp_s");
    const proofSignature = queryParams.get("signature");

    const claimInfo = {
      context:proofContext,
      parameters:proofParameters,
      provider:proofProvider,
    }

    const signedClaim = {
      claim:{
        epoch:proofEpoch,
        identifier:proofIdentifier,
        owner:proofOwner,
        timestampS:proofTimestamps
      },
      signatures: [proofSignature]
    }

    const proofSend = {
      claimInfo: claimInfo,
      signedClaim: signedClaim
    }

    if (
      accessToken &&
      channelId &&
      tokenURI &&
      channelTitle &&
      proofIdentifier &&
      proofSend
    ) {
      setChannelInfo({ channelId, channelTitle, proofIdentifier });
      setTokenURI(tokenURI);
      setProofDataObject(proofSend);
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
        {channelInfo.proofIdentifier}
      </p>
      <p>
        <strong>Token URI:</strong> {tokenURI}
      </p>

      {!mintedTokenId ? (
        <MintNFTButton
          proofData={proofDataObject}
          tokenURI={tokenURI}
        />
      ) : (
        <DisplayNFT tokenId={mintedTokenId} />
      )}
    </div>
  );
};
export default OAuthCallback;