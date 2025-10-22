import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-center py-24 sm:py-32 lg:py-40 bg-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-radial from-purple-900/20 via-transparent to-transparent animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Unleash Your Creativity with the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            AI Image Stylizer
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
          Effortlessly transform your photos into stunning works of art. Just upload an image, describe your vision, and let our AI bring it to life.
        </p>
        <div className="mt-10">
          <a
            href="#/editor"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl transform hover:scale-105"
          >
            Start Editing for Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
