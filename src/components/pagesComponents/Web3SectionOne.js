import React from "react";
import "../pagesComponents/ImageSection.css";

const Web3SectionOne = () => {
  return (
    <section class="flex overflow-hidden flex-col items-center py-24 bg-slate-200">
      <div class="flex flex-col max-w-full text-center w-[1280px]">
        <header class="flex flex-col items-center w-full max-md:max-w-full">
          <div class="flex flex-col max-w-full w-[818px]">
            <h1 class="w-full text-4xl font-bold tracking-tighter leading-10 text-gray-900 uppercase max-md:max-w-full text-center">
              Own, Monetize, and Control <br /> Your Digital Future with Web3
            </h1>
            <p class="mt-5 text-xl leading-8 text-slate-600 max-md:max-w-full">
              Seize your digital future with Web3. Own your content, explore new
              monetization options, and connect meaningfully with your audience.
              Control your brand and unlock your creative potential!
            </p>
          </div>
        </header>
      </div>
      <div class="flex flex-wrap gap-10 justify-center items-start mt-16 max-w-full w-[1280px] max-md:mt-10">
        <article class="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
          <div class="flex flex-col p-3 w-full rounded-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/543651d8116fea8847e62106707e54204e5b04ff90eb55edd876ba16d6e48255?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
              class="object-contain w-14 aspect-square"
              alt="Icon representing Immutable Proof of Ownership"
            />
            <div class="flex flex-col mt-5 w-full">
              <h2 class="text-xl font-semibold leading-8 text-gray-900">
                Immutable Proof of Ownership
              </h2>
              <p class="mt-2 text-base leading-6 text-slate-600">
                Your YouTube channel is tokenized on the blockchain, ensuring
                you can always prove that you are the rightful owner of your
                content.
              </p>
            </div>
          </div>
          <div class="flex flex-col p-3 mt-12 w-full rounded-xl max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe640f8269ebb210919c24808318b9fb70c9b886f0a217cb681d203ad12fb319?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
              class="object-contain w-14 aspect-square "
              alt="Icon representing Web3 Integration"
            />
            <div class="flex flex-col mt-5 w-full">
              <h2 class="text-xl font-semibold text-black">Web3 Integration</h2>
              <p class="mt-2 text-base leading-6 text-slate-600">
                Connect your YouTube channel to the growing world of
                decentralized applications (dApps), giving you a stake in the
                future of the internet.
              </p>
            </div>
          </div>
        </article>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c2a609784b17fc44cb189bf47da2ee600523c59c9dcf0ab909d99bd46cacf33?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
          class="object-contain aspect-[0.75] min-w-[240px] w-[480px] max-md:max-w-full floating-image"
          alt="Illustration of Web3 digital future concept"
        />
        <article class="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
          <div class="flex flex-col p-3 w-full rounded-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7815749b12c1f5434cbee4746f6159c21b3aef7a718fa145dbf95f6b68a79b1b?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
              class="object-contain w-14 aspect-square"
              alt="Icon representing Digital Identity"
            />
            <div class="flex flex-col mt-5 w-full">
              <h2 class="text-xl font-semibold text-gray-900">
                Digital Identity
              </h2>
              <p class="mt-2 text-base leading-6 text-slate-600">
                Your channel becomes a unique Web3 identity, verified and
                protected on-chain, allowing you to leverage it in future
                digital economies (NFTs, DAOs, virtual worlds, and more).
              </p>
            </div>
          </div>
          <div class="flex flex-col p-3 mt-12 w-full rounded-xl max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/82b876009ea3216e1ac5936626c72b050bfced1f155db6df65042091ef7147d7?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
              class="object-contain w-14 aspect-square"
              alt="Icon representing Unlock Future Opportunities"
            />
            <div class="flex flex-col mt-5 w-full">
              <h2 class="text-xl font-semibold text-gray-900">
                Unlock Future Opportunities
              </h2>
              <p class="mt-2 text-base leading-6 text-slate-600">
                By owning your channel on-chain, you can unlock access to
                exclusive partnerships, collaborations, and monetization models
                within the Web3 ecosystem.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Web3SectionOne;
