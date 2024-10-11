import React from "react";
import { TypeAnimation } from "react-type-animation";

const handleLogin = () => {
  // Redirect user to the backend to initiate Google OAuth2 flow
  window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth`;
};
const MainContent = () => {
  return (
    <main className="p-12 bg-gray-900">
      <div className="flex justify-between items-start">
        <div className="text-left">
          <p className="text-white mb-4 ">
            MINT YOUR YOUTUBE CHANNEL ON THE BLOCKCHAIN
          </p>
          <h1 className="text-white text-5xl font-bold mb-4">
            <TypeAnimation
              sequence={[
                "PROVE YOUR OWNERSHIP,", // Types 'One'
                1000, // Waits 1s
                "PROVE YOUR YOUTUBE",
                1000,
                "PROVE YOUR ACCOUNTS",
                1000, // Deletes 'One' and types 'Two'
                // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", display: "inline-block" }}
            />
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
          <p className="text-gray-400 mt-4 text-pretty">
            the first platform that allows creators to mint their YouTube
          </p>
          <p className="text-gray-400 mt-4 text-pretty">
            channel as an onchain proof of ownership.
          </p>
          <div className="flex justify-end mt-8">
            <button
              onClick={handleLogin}
              className="px-6 py-3 bg-lime-500 text-gray-900 rounded-full flex items-center space-x-2 hover:bg-lime-600 transition-colors duration-300"
            >
              <span>Mint Now</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
