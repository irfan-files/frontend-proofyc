import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MintNFTButton from "../components/MintNFTButton";
import DisplayNFT from "../components/DisplayNFT";
import ProfileCard from "../components/basicComponents/ProfileCard";
import { Basenames } from "../components/GetBasenameMint";
import { useAccount } from "wagmi";

const OAuthCallback = () => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [tokenURI, setTokenURI] = useState(null);
  const [proofDataObject, setProofDataObject] = useState(null);
  const [error, setError] = useState(null);
  const [mintedTokenId, setMintedTokenId] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const location = useLocation();
  const {isConnected} = useAccount();
  const account = useAccount();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get("access_token");
    const channelId = queryParams.get("channel_id");
    const tokenURI = queryParams.get("token_uri");
    const channelTitle = queryParams.get("channel_title");

    // Get image url
    const imageURL = queryParams.get("image_url");

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
      context: proofContext,
      parameters: proofParameters,
      provider: proofProvider,
    };

    const signedClaim = {
      claim: {
        epoch: proofEpoch,
        identifier: proofIdentifier,
        owner: proofOwner,
        timestampS: proofTimestamps,
      },
      signatures: [proofSignature],
    };

    const proofSend = {
      claimInfo: claimInfo,
      signedClaim: signedClaim,
    };

    if (
      accessToken &&
      channelId &&
      tokenURI &&
      channelTitle &&
      proofIdentifier &&
      proofSend &&
      imageURL
    ) {
      setChannelInfo({ channelId, channelTitle, proofIdentifier });
      setTokenURI(tokenURI);
      setProofDataObject(proofSend);
      setImageURL(imageURL);
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
  if (isConnected){
    return (
      <div>
        <section class="flex flex-col px-16 pt-14 pb-28 max-md:px-5 max-md:pb-24">
          <header class="flex overflow-hidden flex-col justify-center py-6 w-full text-black border-b-2 border-stone-300 max-md:max-w-full">
            <div class="flex gap-6 items-end w-full max-md:max-w-full">
              <div class="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
                <h1 class="text-2xl font-bold leading-snug max-md:max-w-full">
                  Channel Detail
                </h1>
                <p class="mt-2 text-base max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
            </div>
          </header>
          <main class="flex overflow-hidden flex-wrap gap-10 px-8 py-12 w-full max-md:px-5 max-md:max-w-full">
            <div class="flex flex-col gap-12 items-center self-start bg-gray-100 rounded-lg min-w-[240px] w-[375px]">
              <ProfileCard
                channelName={channelInfo.channelTitle}
                channelId={channelInfo.channelId}
                channelSubs="1.6M" // Dummy data, replace with actual if available
                videoViews="212M" // Dummy data, replace with actual if available
                country="Indonesia" // Dummy data, replace with actual if available
                accountCreated="Nov 29, 2019" // Dummy data, replace with actual if available
                imageURL={imageURL} // Pass the imageURL here
              />
            </div>
            <div class="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
              <div class="flex flex-col w-full max-md:max-w-full">
                {/* <h2 class="text-5xl font-bold tracking-tighter leading-none text-black max-md:max-w-full max-md:text-4xl"> */}
                {}
                <div className="flex flex-row gap-2">
                  <Basenames address={account.addresses?.[0]} />
                {/* </h2> */}
                </div>
                <hr class="mt-5 w-full h-px bg-gray-300 min-h-[1px] max-md:max-w-full" />
                <div class="flex flex-col mt-5 w-80 max-w-full text-base">
                  <div class="flex w-full max-w-xs bg-gray-200 rounded border-gray-300 shadow-sm">
                    <label
                      for="channelName"
                      class="self-start py-2.5 pr-3 pl-3.5 w-40 rounded-lg text-slate-600"
                    >
                      Channel Name
                    </label>
                    <input
                      id="channelName"
                      type="text"
                      value={channelInfo.channelTitle}
                      readonly
                      class="overflow-hidden flex-1 shrink gap-2 self-stretch py-2.5 pr-3 pl-3.5 h-full text-black whitespace-nowrap bg-white rounded-none border border-gray-300 border-solid"
                    />
                  </div>
                  <div class="flex mt-3 w-full max-w-xs bg-gray-200 rounded border-gray-300 border-solid shadow-sm border-[length:var(--sds-size-stroke-border)]">
                    <label
                      for="channelId"
                      class="self-start py-2.5 pr-3 pl-3.5 w-40 rounded-lg text-slate-600"
                    >
                      Channel ID
                    </label>
                    <input
                      id="channelId"
                      type="text"
                      value={channelInfo.channelId}
                      readonly
                      class="overflow-hidden flex-1 shrink gap-2 self-stretch py-2.5 pr-3 pl-3.5 h-full text-black whitespace-nowrap bg-white rounded-none border border-gray-300 border-solid"
                    />
                  </div>
                </div>
              </div>
              {!mintedTokenId ? (
                <MintNFTButton proofData={proofDataObject} tokenURI={tokenURI} />
              ) : (
                <DisplayNFT tokenId={mintedTokenId} imageURL={imageURL} />
              )}
            </div>
          </main>
        </section>
      </div>
    );
  }
};
export default OAuthCallback;
