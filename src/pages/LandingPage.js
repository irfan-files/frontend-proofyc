import React from "react";

import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";
import InfoSection from "../components/InfoSection";
import HowItWorks from "../components/HowItWorks";
import Gallery from "../components/Gallery";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <CallToAction />
      <InfoSection />
      <HowItWorks />
      <Gallery />
    </div>
  );
};

export default LandingPage;
