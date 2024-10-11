import React from "react";
import "./ImageSection.css";

const Web3SectionThree = () => {
  return (
    <div>
      <section class="flex flex-wrap gap-10 justify-center items-start px-8 mt-16 max-w-full max-md:px-5 max-md:mt-10">
        <div class="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
          <article class="flex flex-col p-3 w-full rounded-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/543651d8116fea8847e62106707e54204e5b04ff90eb55edd876ba16d6e48255?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
              alt="Icon representing immutable proof of ownership"
              class="object-contain w-14 aspect-square"
            />
            <div class="flex flex-col mt-5 w-full">
              <h3 class="text-xl font-semibold leading-8 text-gray-900">
                Immutable Proof of Ownership
              </h3>
              <p class="mt-2 text-base leading-6 text-slate-600">
                Your YouTube channel is tokenized on the blockchain, ensuring
                you can always prove that you are the rightful owner of your
                content.
              </p>
            </div>
          </article>
          <article class="flex flex-col p-3 mt-12 w-full rounded-xl max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe640f8269ebb210919c24808318b9fb70c9b886f0a217cb681d203ad12fb319?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
              alt="Icon representing Web3 integration"
              class="object-contain w-14 aspect-square"
            />
            <div class="flex flex-col mt-5 w-full">
              <h3 class="text-xl font-semibold text-black">Web3 Integration</h3>
              <p class="mt-2 text-base leading-6 text-slate-600">
                Connect your YouTube channel to the growing world of
                decentralized applications (dApps), giving you a stake in the
                future of the internet.
              </p>
            </div>
          </article>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c2a609784b17fc44cb189bf47da2ee600523c59c9dcf0ab909d99bd46cacf33?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
          alt="Illustration of Web3 features"
          class="object-contain aspect-[0.75] min-w-[240px] w-[480px] max-md:max-w-full floating-image"
        />
        <div class="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
          <article class="flex flex-col p-3 w-full rounded-xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7815749b12c1f5434cbee4746f6159c21b3aef7a718fa145dbf95f6b68a79b1b?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
              alt="Icon representing digital identity"
              class="object-contain w-14 aspect-square"
            />
            <div class="flex flex-col mt-5 w-full">
              <h3 class="text-xl font-semibold text-gray-900">
                Digital Identity
              </h3>
              <p class="mt-2 text-base leading-6 text-slate-600">
                Your channel becomes a unique Web3 identity, verified and
                protected on-chain, allowing you to leverage it in future
                digital economies (NFTs, DAOs, virtual worlds, and more).
              </p>
            </div>
          </article>
          <article class="flex flex-col p-3 mt-12 w-full rounded-xl max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/82b876009ea3216e1ac5936626c72b050bfced1f155db6df65042091ef7147d7?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
              alt="Icon representing future opportunities"
              class="object-contain w-14 aspect-square"
            />
            <div class="flex flex-col mt-5 w-full">
              <h3 class="text-xl font-semibold leading-8 text-gray-900">
                Unlock Future Opportunities
              </h3>
              <p class="mt-2 text-base leading-6 text-slate-600">
                By owning your channel on-chain, you can unlock access to
                exclusive partnerships, collaborations, and monetization models
                within the Web3 ecosystem.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Web3SectionThree;
