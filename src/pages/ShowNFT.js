import React from "react";

const ShowNFT = () => {
  return (
    <section class="flex flex-col px-16 pt-14 pb-28 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
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
        <figure class="flex flex-col gap-12 items-center self-start bg-gray-100 rounded-lg min-w-[240px] w-[375px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e38b37dd227f7b8f8d09c2dc48af19b450a263ea0869ba0cfcf526d7e59de23e?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
            alt="Channel image"
            class="object-contain max-w-full rounded-3xl aspect-[0.78] w-[375px]"
          />
        </figure>
        <article class="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <div class="flex flex-col w-full max-md:max-w-full">
            <div class="flex flex-col w-full max-md:max-w-full">
              <div class="flex flex-col justify-center w-full max-md:max-w-full">
                <div class="flex flex-wrap gap-10 items-center w-full text-base text-black max-md:max-w-full">
                  <h2 class="self-stretch my-auto font-semibold w-[120px]">
                    Channel Name
                  </h2>
                  <p class="flex-1 shrink gap-2 self-stretch p-3 my-auto whitespace-nowrap rounded-lg min-w-[240px] max-md:max-w-full">
                    Fufufarah
                  </p>
                </div>
                <div class="flex flex-wrap gap-10 items-center mt-3 w-full text-base text-black max-md:max-w-full">
                  <h2 class="self-stretch my-auto font-semibold w-[120px]">
                    Channel ID
                  </h2>
                  <p class="flex-1 shrink gap-2 self-stretch p-3 my-auto whitespace-nowrap rounded-lg min-w-[240px] max-md:max-w-full">
                    dkondoa21a_a13k
                  </p>
                </div>
                <div class="flex flex-wrap gap-10 items-center mt-3 w-full text-base text-black whitespace-nowrap max-md:max-w-full">
                  <h2 class="self-stretch my-auto font-semibold w-[120px]">
                    Proof
                  </h2>
                  <p class="flex-1 shrink gap-2 self-stretch p-3 my-auto rounded-lg min-w-[240px] max-md:max-w-full">
                    -
                  </p>
                </div>
                <div class="flex flex-wrap gap-10 items-center mt-3 w-full text-base text-black max-md:max-w-full">
                  <h2 class="self-stretch my-auto font-semibold w-[120px]">
                    Txn Hash
                  </h2>
                  <p class="flex-1 shrink gap-2 self-stretch p-3 my-auto whitespace-nowrap rounded-lg min-w-[240px] max-md:max-w-full">
                    0x8acf95e3fa00d8e3288171975c3d65e7ca36f301ebabca5b6aa7b8df30d74ac6
                  </p>
                </div>
                <div class="flex flex-wrap gap-10 items-center mt-3 w-full whitespace-nowrap max-md:max-w-full">
                  <h2 class="self-stretch my-auto text-base font-semibold text-black w-[120px]">
                    Status
                  </h2>
                  <div class="flex flex-1 shrink gap-2 items-center self-stretch p-3 my-auto text-sm font-medium leading-none text-center text-emerald-700 rounded-lg basis-0 min-w-[240px] max-md:max-w-full">
                    <div class="flex gap-1 items-center self-stretch py-1 pr-3 pl-2.5 my-auto bg-emerald-50 rounded-2xl border border-emerald-200 border-solid mix-blend-multiply">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea4351516364ffa75905ab9833bb85d19665089326de6bd204813fa0bee06649?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
                        alt=""
                        class="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                      />
                      <span class="self-stretch my-auto">Success</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <footer class="flex gap-4 py-6 w-full min-h-[108px] max-md:max-w-full"></footer>
    </section>
  );
};

export default ShowNFT;
