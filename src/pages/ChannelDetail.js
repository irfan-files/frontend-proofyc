import React from "react";
import ProfileCard from "../components/basicComponents/ProfileCard";

const ChannelDetail = () => {
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
            <ProfileCard class="object-contain max-w-full rounded-3xl aspect-[0.78] w-[375px]" />
          </div>
          <div class="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
            <div class="flex flex-col w-full max-md:max-w-full">
              <h2 class="text-5xl font-bold tracking-tighter leading-none text-black max-md:max-w-full max-md:text-4xl">
                kontol.base.eth
              </h2>
              <hr class="mt-5 w-full h-px bg-gray-300 min-h-[1px] max-md:max-w-full" />
              <div class="flex flex-col mt-5 w-80 max-w-full text-base">
                <div class="flex w-full max-w-xs bg-gray-200 rounded border-gray-300 shadow-sm">
                  <label
                    for="channelName"
                    class="self-start py-2.5 pr-3 pl-3.5 w-40 rounded-lg text-slate-600"
                  >
                    Channel name
                  </label>
                  <input
                    id="channelName"
                    type="text"
                    value="fufufarah"
                    readonly
                    class="overflow-hidden flex-1 shrink gap-2 self-stretch px-3.5 py-2.5 h-full text-gray-900 whitespace-nowrap bg-white rounded-none border border-gray-300 border-solid"
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
                    value="dkondoa21a_a13k"
                    readonly
                    class="overflow-hidden flex-1 shrink gap-2 self-stretch py-2.5 pr-3 pl-3.5 h-full text-black whitespace-nowrap bg-white rounded-none border border-gray-300 border-solid"
                  />
                </div>
              </div>
            </div>
            <button class="overflow-hidden gap-3 self-stretch px-7 py-4 mt-16 max-w-full text-lg font-semibold leading-loose text-white bg-blue-600 rounded-lg border border-violet-500 border-solid shadow-sm w-[164px] max-md:px-5 max-md:mt-10">
              Mint Now
            </button>
          </div>
        </main>
      </section>
    </div>
  );
};

export default ChannelDetail;
