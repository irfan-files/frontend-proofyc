import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWallet } from "./UseWallet"; // Adjust the path to your custom hook
import WalletModal from "./WalletModal"; // Adjust the path to the modal component

const Header = () => {
  const {
    isConnected,
    address,
    handleConnect,
    handleDisconnect,
    metamaskConnector,
    coinbaseConnector,
  } = useWallet();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal control functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Render wallet button based on connection state
  const renderWalletButton = () => {
    if (isConnected) {
      return (
        <>
          <button
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg
            "
            onClick={handleDisconnect}
          >
            Disconnect
          </button>
          <p className="text-white font-semibold">{address}</p>
        </>
      );
    }
    return (
      <button
        type="button"
        className="px-4 py-2 bg-lime-400 text-slate-700 font-semibold rounded-lg"
        onClick={openModal}
      >
        Connect Wallet
      </button>
    );
  };

  return (
    <header className="w-full bg-gray-900 border-b border-neutral-200 p-4 font-coinbase">
      <Link to="/">
        <img
          className="w-28"
          src="https://via.placeholder.com/117x32"
          alt="Logo"
        />

        <div className="text-yellow-500 text-xl font-bold">
          <div>CREATOR</div>
          <div>BEAM</div>
        </div>
      </Link>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            className="w-28"
            src="https://via.placeholder.com/117x32"
            alt="Logo"
          />
        </Link>

        {/* Navigation */}
        {/* <nav className="flex gap-4">
          <Link to="/dashboard" className="text-white text-lg font-bold">
            Dashboard
          </Link>
          <Link to="/marketplace" className="text-gray-400 text-lg">
            Marketplace
          </Link>
        </nav> */}

        {/* Wallet and Profile */}
        <div className="flex items-center gap-4">
          {renderWalletButton()}
          <div className="w-10 h-10 rounded-full bg-gray-800"></div>
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
