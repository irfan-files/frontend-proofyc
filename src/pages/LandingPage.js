import React from "react";
import MainContent from "../components/pagesComponents/MainContent";
import Web3Section from "../components/pagesComponents/Web3Section";
import Web3SectionOne from "../components/pagesComponents/Web3SectionOne";
import Web3SectionTwo from "../components/pagesComponents/Web3SectionTwo";
import Web3SectionThree from "../components/pagesComponents/Web3SectionThree";
import HowItWorks from "../components/pagesComponents/HowItWorks";
import RoadmapSection from "../components/pagesComponents/RoadmapSection";
import ClaimOwnershipSection from "../components/pagesComponents/ClaimOwnershipSection";

const LandingPage = () => {
  return (
    <div>
      <MainContent />
      <Web3Section />
      <Web3SectionTwo />
      <Web3SectionOne />
      <Web3SectionThree />
      <HowItWorks />
      <RoadmapSection />
      <ClaimOwnershipSection />
    </div>
  );
};

export default LandingPage;
