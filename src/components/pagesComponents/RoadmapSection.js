import React from "react";

const RoadmapSection = () => {
  return (
    <div>
      <section className="flex overflow-hidden flex-col self-stretch px-16 py-28 bg-slate-200 max-md:px-5 max-md:py-24">
        <header className="flex flex-col self-center max-w-full text-4xl font-bold tracking-tighter leading-none text-center text-black uppercase w-[768px]">
          <h2 className="w-full max-md:max-w-full">Our Roadmap</h2>
        </header>
        <div className="flex flex-col items-start mt-20 w-full text-black max-md:mt-10 max-md:max-w-full">
          <article className="flex flex-col max-w-full w-[564px]">
            <h3 className="text-4xl font-bold tracking-tighter leading-none max-md:max-w-full">
              Q4 2024
            </h3>
            <p className="mt-6 text-lg leading-7 max-md:max-w-full">
              Minting Videos: Soon, creators will be able to mint individual
              videos as NFTs, creating a new level of ownership and exclusivity
              for their most valuable content.
              <br />
              Badges for Everyone: Showcase achievements with community badges.
              <br />
              Smart Contract Audits: Ensuring security with audits.
            </p>
          </article>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/985644f1381cdd1d38ebcb3927fd95d98ac986b387b6d89aedef64d9fd3dd2ea?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
            alt=""
            className="object-contain z-10 -mr-16 w-full aspect-[7.52] max-md:max-w-full"
          />
          <article className="flex z-10 flex-col self-end max-w-full w-[564px] max-md:mr-1.5">
            <h3 className="text-4xl font-bold tracking-tighter leading-none max-md:max-w-full">
              Q2 2025
            </h3>
            <p className="mt-6 text-lg leading-7 max-md:max-w-full">
              Subscription Program: Super Pass holders will have access to
              exclusive content, and creators can build deeper, more meaningful
              relationships with their top fans.
              <br />
              Royalty Sharing: NFT holders will receive royalties on a daily,
              monthly, or customizable basis, offering more ways to engage your
              audience while rewarding them for their support.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default RoadmapSection;
