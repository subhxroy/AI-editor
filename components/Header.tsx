import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-700">
      <a href="#/" title="Back to Home">
        <h1 
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer hover:opacity-90 transition-opacity"
        >
          AI Image Stylizer
        </h1>
      </a>
      <p className="mt-2 text-lg text-gray-400">
        Transform your images with the power of generative AI.
      </p>
    </header>
  );
};

export default Header;
