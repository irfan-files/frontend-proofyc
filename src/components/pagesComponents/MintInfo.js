import React from "react";

const MintInfo = () => {
  return (
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
        the first platform that allows creators to mint their YouTube channel as
        an onchain proof of ownership.
      </p>
      <div className="flex justify-end mt-8">
        <button className="px-6 py-3 bg-lime-500 text-gray-900 rounded-full flex items-center space-x-2">
          <span>Explore</span>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default MintInfo;
