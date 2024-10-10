import React from "react";

const MainContent = () => {
  return (
    <main className="p-12 bg-gray-900">
      <div className="flex justify-between items-start">
        <div className="text-left">
          <p className="text-white mb-4 ">
            MINT YOUR YOUTUBE CHANNEL ON THE BLOCKCHAIN
          </p>
          <h1 className="text-white text-5xl font-bold mb-4">
            PROVE YOUR OWNERSHIP,
          </h1>
          <h1 className="text-white text-5xl font-bold mb-4">
            UNLOCK YOUR <span className="text-lime-500">WEB3</span>
          </h1>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-lime-500">FUTURE</span>
          </h1>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2 justify-end">
            <div className="flex -space-x-2">
              <img
                src="https://placehold.co/30x30"
                alt="Profile 1"
                className="w-8 h-8 rounded-full border-2 border-gray-900"
              />
              <img
                src="https://placehold.co/30x30"
                alt="Profile 2"
                className="w-8 h-8 rounded-full border-2 border-gray-900"
              />
              <img
                src="https://placehold.co/30x30"
                alt="Profile 3"
                className="w-8 h-8 rounded-full border-2 border-gray-900"
              />
            </div>
            <span className="text-lime-500">99+ Channel Minted</span>
          </div>
          <p className="text-gray-400 mt-4">
            the first platform that allows creators to mint their YouTube
            channel as an onchain proof of ownership.
          </p>
          <div className="flex justify-end mt-8">
            <button className="px-6 py-3 bg-lime-500 text-gray-900 rounded-full flex items-center space-x-2">
              <span>Explore</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
