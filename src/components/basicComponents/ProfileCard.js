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
    <section class="flex flex-col px-6 pt-6 pb-12 mt-0 bg-black rounded-2xl max-w-[548px] max-md:px-5">
    <img
      loading="lazy"
      src={imageURL}
      class="object-contain self-center w-full rounded-xl"
      alt="Channel profile image"
    />
    <div class="flex flex-col mt-2 w-full">
      <header class="flex flex-col items-center text-center w-full">
        <h2 class="text-lg font-medium leading-loose text-gray-200">
          Channel Name
        </h2>
        <h1 class="mt-1 text-3xl font-black leading-none text-lime-400 uppercase">
          {channelName}
        </h1>
      </header>
      
      <div class="grid grid-cols-2 gap-4 mt-6 w-full">
        <article class="flex flex-col items-center">
          <h3 class="text-base font-medium text-gray-200">Subscribers</h3>
          <p class="text-lg font-semibold text-lime-400">
            {channelSubs}
          </p>
        </article>
        <article class="flex flex-col items-center">
          <h3 class="text-base font-medium text-gray-200">Total Videos</h3>
          <p class="text-lg font-semibold text-lime-400">
            {videoCount}
          </p>
        </article>
      </div>

      <div class="grid grid-cols-2 gap-4 mt-6 w-full">
        <article class="flex flex-col items-center">
          <h3 class="text-base font-medium text-gray-200">Total Views</h3>
          <p class="text-lg font-semibold text-lime-400">
            {videoViews}
          </p>
        </article>
        <article class="flex flex-col items-center">
          <h3 class="text-base font-medium text-gray-200">Account Created</h3>
          <time class="text-lg font-semibold text-lime-400">
            {accountCreated}
          </time>
        </article>
      </div>
    </div>
  </section>

  );
};

export default ProfileCard;
