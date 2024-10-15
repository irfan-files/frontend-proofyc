import React from "react";
import "./RoadMap.css";

const RoadmapSection = () => {
  return (
    <div>
      <section className="flex overflow-hidden flex-wrap gap-10 items-start px-16 py-28 bg-animate-gradient max-md:px-5 max-md:py-24">
        <header className="flex flex-col items-center text-6xl font-bold tracking-tighter leading-10 text-black uppercase min-w-[240px] max-md:text-4xl max-md:leading-8">
          <h2 className="max-md:text-4xl max-md:leading-8">
            <div>our</div>
            <br /> roadmap
          </h2>
        </header>
        <div className="flex flex-wrap gap-2.5 p-3.5 bg-blue-600 rounded-3xl min-w-[240px] max-md:max-w-full">
          <article className="flex flex-col justify-center p-6 bg-gray-100 rounded-3xl min-w-[240px] w-[450px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col w-full">
              <h3 className="text-7xl font-medium tracking-tighter leading-none text-gray-900 max-md:text-4xl">
                Q4 2024
              </h3>
              <p className="mt-2 text-xl leading-8 text-slate-600">
                Minting Videos: Soon, creators will be able to mint individual
                videos as NFTs, creating a new level of ownership and
                exclusivity for their most valuable content.
                <br />
                Badges for Everyone: Showcase achievements with community
                badges.
                <br />
                Smart Contract Audits: Ensuring security with audits.
              </p>
            </div>
          </article>
          <article className="flex flex-col justify-center p-6 bg-gray-100 rounded-3xl min-w-[240px] w-[450px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col w-full">
              <h3 className="text-7xl font-medium tracking-tighter leading-none text-gray-900 max-md:text-4xl">
                Q2 2025
              </h3>
              <p className="mt-2 text-xl leading-8 text-slate-600">
                Subscription Program: Super Pass holders will have access to
                exclusive content, and creators can build deeper, more
                meaningful relationships with their top fans.
                <br />
                Royalty Sharing: NFT holders will receive royalties on a daily,
                monthly, or customizable basis, offering more ways to engage
                your audience while rewarding them for their support.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default RoadmapSection;
