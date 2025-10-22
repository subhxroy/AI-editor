import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
                    <div>
                        <p className="text-sm text-gray-400">&copy; {currentYear} AI Image Stylizer. All Rights Reserved.</p>
                        <p className="text-xs text-gray-500 mt-1">Powered by Google Gemini</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
