import React from "react";
import MainContent from "../components/pagesComponents/MainContent";
import ImageSection from "../components/pagesComponents/ImageSection";
import Web3Section from "../components/pagesComponents/Web3Section";

const LandingPage = () => {
  return (
    <div>
      <MainContent />
      <ImageSection />
      <Web3Section />
    </div>
  );
};

export default LandingPage;
