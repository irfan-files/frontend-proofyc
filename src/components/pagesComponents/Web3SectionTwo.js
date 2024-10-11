import React from "react";

const Web3SectionTwo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f4f8]">
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-4">
        <div className="flex-1 p-4">
          <div className="border-l-4 border-blue-500 pl-4 mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Creators Seeking Ownership in Web3
            </h2>
            <p>
              Harness Web3 to gain true ownership of your content. Protect your
              intellectual property and ensure fair compensation for your
              creativity.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Creators Exploring New Revenue Opportunities
            </h2>
            <p>
              Discover new ways to monetize your content in a decentralized
              world. Engage your audience with exclusive experiences and build a
              loyal community.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-2xl font-bold mb-2">
              Crypto-Curious YouTubers Ready for Web3
            </h2>
            <p>
              If you're a YouTuber exploring crypto, now's the time to dive into
              Web3. Leverage blockchain technology to enhance your content and
              connect with your audience like never before.
            </p>
          </div>
        </div>
        <div className="flex-1 p-4">
          <img
            src="https://placehold.co/600x400"
            alt="Person recording a video in a kitchen setting"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Web3SectionTwo;
