import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import FAQSection from '../components/landing/FAQSection';

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FAQSection />
    </>
  );
};

export default LandingPage;
