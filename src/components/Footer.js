import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 py-8 font-coinbase sticky bottom-0">
      <div className="max-w-7xl mx-auto text-center">
        <img
          className="mx-auto mb-4"
          src="https://via.placeholder.com/142x32"
          alt="Logo"
        />
        <p className="text-gray-200">
          Where Creators Shine, Own, and Earn in Web3
        </p>
        <nav className="flex justify-center gap-4 mt-4">
          <a href="/" className="text-gray-200">
            Home
          </a>
          <a href="/dashboard" className="text-gray-200">
            Dashboard
          </a>
        </nav>
        <div className="mt-4 text-gray-300">
          © 2024 Creator Beam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
