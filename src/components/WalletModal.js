import React from "react";

const WalletModal = ({
  onClose,
  handleConnectMetaMask,
  handleConnectCoinbase,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex justify-center items-center bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96 z-60 ">
        <h2 className="text-xl font-semibold mb-4 transition duration-150 ease-in-out">
          Select Wallet
        </h2>
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg mb-4 transition duration-300 ease-in-out"
          onClick={handleConnectCoinbase}
        >
          Connect Coinbase Wallet
        </button>
        <button className="mt-4 text-red-500 font-semibold" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default WalletModal;
