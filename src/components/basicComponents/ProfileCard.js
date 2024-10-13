import React from "react";

const ProfileCard = ({
  channelName,
  channelId,
  channelSubs,
  videoCount,
  videoViews,
  accountCreated,
  imageURL,
}) => {
  return (
    <section class="flex overflow-hidden flex-col px-6 pt-6 pb-12 mt-px -ml-px bg-black rounded-2xl max-w-[548px] max-md:px-5">
      <img
        loading="lazy"
        src={imageURL}
        class="object-contain self-center w-full rounded-xl aspect-square"
        alt="Channel profile image"
      />
      <div class="flex flex-col mt-2 w-full max-md:max-w-full">
        <div class="flex flex-col w-full max-md:max-w-full">
          <header class="flex flex-col items-center self-center max-w-full text-center w-[230px]">
            <h2 class="text-lg font-medium leading-loose text-gray-200">
              {channelName}
            </h2>
            <h1 class="mt-1 text-3xl font-black leading-none text-lime-400 uppercase">
              {channelName}
            </h1>
          </header>
          <div class="flex flex-wrap justify-between items-center mt-6 w-full min-h-[52px] max-md:max-w-full">
            <article class="flex flex-col justify-center self-stretch my-auto whitespace-nowrap min-w-[240px] w-[250px]">
              <h3 class="text-base font-medium leading-none text-center text-gray-200 capitalize">
                Subscribers
              </h3>
              <p class="gap-2 self-stretch mt-1 w-full text-lg font-semibold leading-loose text-lime-400">
                {channelSubs}
              </p>
            </article>
            <article class="flex flex-col self-stretch my-auto text-center min-w-[240px] w-[250px]">
              <h3 class="text-base font-medium leading-none text-gray-200 capitalize">
                Total Videos
              </h3>
              <p class="gap-2 self-center mt-1 text-lg font-semibold leading-loose text-lime-400 whitespace-nowrap">
                {videoCount}
              </p>
            </article>
          </div>
          <div class="flex flex-wrap justify-between items-center mt-6 w-full min-h-[52px] max-md:max-w-full">
            <article class="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[250px]">
              <h3 class="text-base font-medium leading-none text-center text-gray-200 capitalize">
                Total Views
              </h3>
              <p class="gap-2 self-stretch mt-1 w-full text-lg font-semibold leading-loose text-lime-400 whitespace-nowrap">
                {videoViews}
              </p>
            </article>
            <article class="flex flex-col self-stretch my-auto text-center min-w-[240px] w-[250px]">
              <h3 class="text-base font-medium leading-none text-gray-200 capitalize">
                Account Created
              </h3>
              <time class="gap-2 self-center mt-1 text-lg font-semibold leading-loose text-lime-400">
                {accountCreated}
              </time>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
