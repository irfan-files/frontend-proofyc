import React from "react";

const Web3SectionTwo = () => {
  return (
    <section class="flex overflow-hidden flex-col gap-16 justify-center items-center py-24 bg-slate-200">
      <div class="flex flex-col max-w-full w-[1280px]">
        <header class="flex flex-col items-center w-full text-center">
          <div class="flex flex-col max-w-full w-[768px]">
            <h2 class="w-full text-4xl font-bold tracking-tighter leading-none text-gray-900 uppercase max-md:max-w-full">
              Why Creator Hub?
            </h2>
            <p class="mt-5 text-xl leading-8 text-slate-600 max-md:max-w-full">
              Our platform is designed for YouTube creators looking to grow
              their presence beyond Web2. Whether you're just starting or
              already have a loyal fanbase, Web3 offers new ways to interact,
              monetize, and secure your brand.
            </p>
          </div>
        </header>
        <div class="flex flex-wrap gap-10 items-center px-8 mt-16 w-full max-md:px-5 max-md:mt-10">
          <div class="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <section class="flex flex-col justify-center py-4 pr-0 pl-6 w-full border-l-4 border-sky-600 border-solid border-l-sky-600 max-md:pl-5 max-md:max-w-full">
              <div class="flex flex-col w-full max-md:max-w-full">
                <h3 class="text-xl font-semibold text-gray-900 max-md:max-w-full">
                  Creators Seeking Ownership in Web3
                </h3>
                <p class="mt-2 text-base leading-6 text-slate-600 max-md:max-w-full">
                  Harness Web3 to gain true ownership of your content. Protect
                  your intellectual property and ensure fair compensation for
                  your creativity.
                </p>
              </div>
            </section>
            <section class="flex flex-col justify-center py-4 pr-0 pl-6 w-full border-l-4 border-gray-100 border-solid border-l-gray-100 max-md:pl-5 max-md:max-w-full">
              <div class="flex flex-col w-full max-md:max-w-full">
                <h3 class="text-xl font-semibold text-gray-900 max-md:max-w-full">
                  Creators Exploring New Revenue Opportunities
                </h3>
                <p class="mt-2 text-base leading-6 text-slate-600 max-md:max-w-full">
                  Discover new ways to monetize your content in a decentralized
                  world. Engage your audience with exclusive experiences and
                  build a loyal community.
                </p>
              </div>
            </section>
            <section class="flex flex-col justify-center py-4 pr-0 pl-6 w-full border-l-4 border-gray-100 border-solid border-l-gray-100 max-md:pl-5 max-md:max-w-full">
              <div class="flex flex-col w-full max-md:max-w-full">
                <h3 class="text-xl font-semibold text-gray-900 max-md:max-w-full">
                  Crypto-Curious YouTubers Ready for Web3
                </h3>
                <p class="mt-2 text-base leading-6 text-slate-600 max-md:max-w-full">
                  If you're a YouTuber exploring crypto, now's the time to dive
                  into Web3. Leverage blockchain technology to enhance your
                  content and connect with your audience like never before.
                </p>
              </div>
            </section>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc1077a6818fd30c6fdda09fe3263be36300ee696e79468ba5d8895ed6e52cfb?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
            alt="Creator Hub illustration"
            class="object-contain flex-1 shrink self-stretch my-auto w-full rounded-2xl aspect-[1.6] basis-0 min-w-[240px] max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Web3SectionTwo;
