import React from "react";

const HowItWorks = () => {
  return (
    <div>
      <section class="flex overflow-hidden flex-col px-16 py-28 bg-neutral-900 max-md:px-5 max-md:py-24">
        <header class="flex flex-col self-center max-w-full text-4xl font-bold tracking-tighter leading-none text-center text-white uppercase w-[768px]">
          <h2 class="w-full max-md:max-w-full">HOW IT WORKS</h2>
        </header>
        <div class="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div class="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
            <article class="flex flex-col p-5 rounded-xl shadow-2xl min-w-[240px] w-[343px]">
              <div class="flex gap-2.5 items-center w-11">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4479ca9200aeefb21a759433043739b52e566bfb0f6df392d8d66ecf720e67b?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
                  alt=""
                  class="object-contain self-stretch my-auto w-11 aspect-square"
                />
              </div>
              <div class="flex flex-col mt-6 w-full">
                <div class="flex flex-col w-full">
                  <h3 class="text-xl font-semibold leading-8 text-white">
                    Connect Your YouTube Channel
                  </h3>
                  <p class="mt-1 text-lg leading-7 text-slate-50">
                    With just a few clicks, link your YouTube account to Creator
                    Hub
                  </p>
                </div>
              </div>
            </article>
            <article class="flex flex-col p-5 rounded-xl shadow-2xl min-w-[240px] w-[343px]">
              <div class="flex items-center w-[42px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ea13a2c2ad79c6b28a7c3ba637983d676bc0f814ec57a2ed2b09d76fe8b31d0?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
                  alt=""
                  class="object-contain self-stretch my-auto aspect-square w-[42px]"
                />
              </div>
              <div class="flex flex-col mt-6 w-full">
                <div class="flex flex-col w-full">
                  <h3 class="text-xl font-semibold text-white">
                    Mint Your Proof of Ownership
                  </h3>
                  <p class="mt-1 text-lg leading-7 text-slate-50">
                    We generate an on-chain NFT (Non-Fungible Token) that serves
                    as the official proof that you own the rights to your
                    channel. This NFT is verifiable on blockchain explorers,
                    ensuring authenticity.
                  </p>
                </div>
              </div>
            </article>
            <article class="flex flex-col p-5 rounded-xl shadow-2xl min-w-[240px] w-[343px]">
              <div class="flex gap-2.5 items-center w-[42px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c978c4c185a613724dfd424b67c1f54154228362426e5ab641d173837d5d7c7?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
                  alt=""
                  class="object-contain self-stretch my-auto backdrop-blur aspect-square w-[42px]"
                />
              </div>
              <div class="flex flex-col mt-6 w-full">
                <div class="flex flex-col w-full">
                  <h3 class="text-xl font-semibold text-white">
                    Claim Your Web3 Identity
                  </h3>
                  <p class="mt-1 text-lg leading-7 text-slate-50">
                    Once minted, your channel is tied to your Web3 wallet and
                    can be accessed, managed, and traded across various
                    platforms in the decentralized ecosystem.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
