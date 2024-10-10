import React from "react";
import { Link } from "react-router-dom";
import { useWallet } from "./UseWallet"; // Adjust the path to your custom hook

const Header = () => {
  const {
    isConnected,
    address,
    handleConnect,
    handleDisconnect,
    metamaskConnector,
    coinbaseConnector,
  } = useWallet();

  return (
    <header className="w-full bg-gray-900 border-b border-neutral-200 p-4 font-coinbase">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            className="w-28"
            src="https://via.placeholder.com/117x32"
            alt="Logo"
          />
        </Link>
        <nav className="flex gap-4">
          <Link to="/dashboard" className="text-white text-lg font-bold">
            Dashboard
          </Link>
          <Link to="/marketplace" className="text-gray-400 text-lg">
            Marketplace
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* Wallet Button Logic */}
          {isConnected ? (
            <>
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg"
                onClick={handleDisconnect}
              >
                Disconnect
              </button>
              <p className="text-white font-semibold">{address}</p>
            </>
          ) : (
            <>
              <button
                className="px-4 py-2 bg-lime-400 text-slate-700 font-semibold rounded-lg"
                onClick={() => handleConnect(metamaskConnector)}
              >
                Connect Wallet
              </button>
            </>
          )}
          <div className="w-10 h-10 rounded-full bg-gray-800"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
