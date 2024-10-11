import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWallet } from "./UseWallet"; // Adjust the path to your custom hook
import WalletModal from "./WalletModal"; // Adjust the path to the modal component
import { Basenames } from "./GetBasename";
import { useAccount } from "wagmi";
import { Avatar, Identity, Name, Address } from "@coinbase/onchainkit/identity";
import { base } from "viem/chains";
import { PictureComponent } from "./basicComponents/PictureComponent";

const Header = () => {
  const {
    isConnected,
    address,
    handleConnect,
    handleDisconnect,
    coinbaseConnector,
  } = useWallet();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const account = useAccount();

  // Modal control functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log("Account:", account);

  // Render wallet button based on connection state
  const renderWalletButton = () => {
    if (isConnected) {
      // const basename = Basenames(account.addresses?.[0])
      return (
        <>
          {/* <p className="text-white font-semibold">{basename}</p> */}
          <div className="flex flex-row gap-2">
            <Basenames address={account.addresses?.[0]} />
          </div>
          <div>
            <PictureComponent address={account.addresses?.[0]} />
          </div>
          <button
            className="transition ease-in-out delay-150 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300"
            onClick={handleDisconnect}
          >
            Disconnect
          </button>
        </>
      );
    }
    return (
      <button
        type="button"
        className="transition ease-in-out delay-150 px-4 py-2 bg-lime-400 text-slate-700 font-semibold rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-lime-600 duration-300"
        onClick={openModal}
      >
        Connect Wallet
      </button>
    );
  };

  return (
    <header className="w-full bg-gray-900 border-b border-neutral-200 p-4 font-coinbase">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <Link to="/">
          <div className="text-yellow-500 text-xl font-bold">
            <div>CREATOR</div>
            <div>BEAM</div>
          </div>
        </Link>

        {/* Right side - Wallet and Profile */}
        <div className="ml-auto flex items-center gap-4">
          {renderWalletButton()}
        </div>
      </div>

      {/* Wallet Modal */}
      {isModalOpen && (
        <WalletModal
          handleConnectCoinbase={() => {
            handleConnect(coinbaseConnector);
            closeModal();
          }}
          onClose={closeModal}
        />
      )}
    </header>
  );
};

export default Header;
