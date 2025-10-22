import React from 'react';

const Navbar: React.FC = () => {
    return (
        <header className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-40">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            AI Stylizer
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#/features" className="text-gray-300 hover:text-white transition">Features</a>
                        <a href="#/faq" className="text-gray-300 hover:text-white transition">FAQ</a>
                        <a href="#/pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
                        <a href="#/contact" className="text-gray-300 hover:text-white transition">Contact</a>
                    </div>
                    <a
                        href="#/editor"
                        className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-md"
                    >
                        Start Editing
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
