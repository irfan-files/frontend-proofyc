import React from "react";

const ProfileCard = ({
  channelName,
  channelId,
  channelSubs,
  videoViews,
  country,
  accountCreated,
  imageURL,
}) => {
  return (
    <div className="w-[375px] h-[573px] bg-black rounded-[14px] shadow flex-col justify-start items-start inline-flex font-coinbase animate-float">
      <div className="self-stretch h-[573px] pb-[38px] flex-col justify-start items-center gap-8 flex">
        <div className="self-stretch h-[381px] flex-col justify-start items-start gap-5 flex">
          <div className="self-stretch h-[381px] flex-col justify-start items-start flex">
            <div className="h-[249px] justify-center items-center inline-flex">
              <img
                className="w-[375px] h-[249px] relative"
                // src="https://via.placeholder.com/375x249"
                src={imageURL}
                alt="Profile"
              />
            </div>
            <div className="self-stretch h-[180px] px-4 flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch h-[180px] flex-col justify-start items-center gap-4 flex">
                <div className="w-24 h-24 rounded-full justify-center items-center inline-flex">
                  <div className="w-24 h-24 rounded-full shadow border-4 border-white justify-center items-center inline-flex">
                    <img
                      className="w-24 h-24 rounded-full"
                      src={imageURL}
                      alt="Avatar"
                    />
                  </div>
                </div>
                <div className="self-stretch flex-col justify-start items-center flex">
                  <div className="text-center text-[#bfff00] text-[32px] font-black uppercase leading-tight">
                    {channelName}
                  </div>
                  <div className="text-center mt-1 text-base font-medium text-gray-300">
                    Channel Name
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col mt-5 justify-start items-center gap-[18px] flex">
          <div className="w-[280px] h-[52px] justify-center items-center gap-6 inline-flex">
            <div className="w-32 flex-col justify-start items-center gap-1 inline-flex">
              <div className="self-stretch text-center text-[#eaecf0] text-xs font-medium capitalize leading-tight">
                Subscribers
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-[#bfff00] text-lg font-semibold leading-7">
                  {channelSubs}
                </div>
              </div>
            </div>
            <div className="w-32 flex-col justify-start items-center gap-1 inline-flex">
              <div className="self-stretch text-center text-[#eaecf0] text-xs font-medium capitalize leading-tight">
                Video Views
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-center text-[#bfff00] text-lg font-semibold leading-7">
                  {videoViews}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[280px] h-[52px] justify-center items-center gap-6 inline-flex">
            <div className="w-32 flex-col justify-start items-center gap-1 inline-flex">
              <div className="self-stretch text-center text-[#eaecf0] text-xs font-medium capitalize leading-tight">
                Country
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="self-stretch justify-start items-center gap-2 flex">
                  <div className="text-[#bfff00] text-lg font-semibold leading-7">
                    {country}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-32 flex-col justify-start items-center gap-1 inline-flex">
              <div className="self-stretch text-center text-[#eaecf0] text-xs font-medium capitalize leading-tight">
                Account Created
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-[#bfff00] text-lg font-semibold leading-7">
                  {accountCreated}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
