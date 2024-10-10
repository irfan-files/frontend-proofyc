import React from "react";

const Hero = () => {
  return (
    <section className="w-96 h-96 bg-zinc-200 flex-col justify-start items-center inline-flex relative">
      <div className="h-96 w-96 px-20 bg-gray-900 flex-col justify-start items-start absolute">
        <div className="text-white text-lg font-medium uppercase tracking-wider leading-snug">
          Mint Your YouTube Channel on the Blockchain
        </div>
        <div className="w-96 text-7xl font-bold uppercase">
          <span className="text-white">Prove Your Ownership, Unlock Your</span>{" "}
          <span className="text-lime-400">Web3 Future</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="https://via.placeholder.com/48x48"
              alt="Channel"
            />
            <img
              className="w-12 h-12 left-[48px] absolute rounded-full"
              src="https://via.placeholder.com/48x48"
              alt="Channel"
            />
            <div className="w-12 h-12 bg-lime-500 rounded-full absolute left-[72px] flex justify-center items-center">
              <div className="text-neutral-800 text-xs font-bold">99+</div>
            </div>
          </div>
          <div className="text-lime-500 text-sm">Channel Minted</div>
        </div>
        <p className="text-white text-lg">
          The first platform that allows creators to mint their YouTube channel
          as an on-chain proof of ownership.
        </p>
        <button className="mt-6 px-8 py-4 bg-lime-500 rounded-lg text-neutral-800 text-lg font-bold">
          Explore
        </button>
      </div>
    </section>
  );
};

export default Hero;
