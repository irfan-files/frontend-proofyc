import React from "react";
import "./ClaimOwnershipSection.css";

const handleLogin = () => {
  // Redirect user to the backend to initiate Google OAuth2 flow
  window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth`;
};

const ClaimOwnershipSection = () => {
  return (
    <div className="background-image z-50">
      {/* Overlay for dark effect */}
      <div className="overlay"></div>

      {/* Main content */}
      <div className="content">
        <h1 className="text-4xl font-bold">CLAIM YOUR OWNERSHIP</h1>
        <h2 className="text-4xl font-bold">MINT YOUR CHANNEL ON WEB3 TODAY!</h2>
        <button onClick={handleLogin} className="button">
          Join Now
        </button>
        <div className="privacy-policy">
          We care about your data in our <a href="#">privacy policy</a>.
        </div>
      </div>
    </div>
  );
};

export default ClaimOwnershipSection;
