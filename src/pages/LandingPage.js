import React from "react";
import MainContent from "../components/pagesComponents/MainContent";
import ImageSection from "../components/pagesComponents/ImageSection";
import Web3Section from "../components/pagesComponents/Web3Section";
import Web3SectionOne from "../components/pagesComponents/Web3SectionOne";
import Web3SectionTwo from "../components/pagesComponents/Web3SectionTwo";
import Web3SectionThree from "../components/pagesComponents/Web3SectionThree";
import HowItWorks from "../components/pagesComponents/HowItWorks";
import RoadmapSection from "../components/pagesComponents/RoadmapSection";

const LandingPage = () => {
  return (
    <div>
      <MainContent />
      <ImageSection />
      <Web3Section />
      <Web3SectionTwo />
      <Web3SectionOne />
      <Web3SectionThree />
      <HowItWorks />
      <RoadmapSection />
    </div>
  );
};

export default LandingPage;
