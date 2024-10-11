// src/components/OAuthLoginButton.js
import React from "react";

const OAuthLoginButton = () => {
  const handleLogin = () => {
    // Redirect user to the backend to initiate Google OAuth2 flow
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth`;
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">HealthyFood NFT</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600"
      >
        Login with YouTube
      </button>
    </div>
  );
};

export default OAuthLoginButton;
