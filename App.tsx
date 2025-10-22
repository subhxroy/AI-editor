import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import EditorPage from './pages/EditorPage';
import FeaturesPage from './pages/FeaturesPage';
import FAQPage from './pages/FAQPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/landing/Navbar';
import Footer from './components/landing/Footer';

const App: React.FC = () => {
    const [route, setRoute] = useState(window.location.hash || '#/');

    useEffect(() => {
        const handleHashChange = () => {
            window.scrollTo(0, 0);
            setRoute(window.location.hash || '#/');
        };

        window.addEventListener('hashchange', handleHashChange);
        // Set initial route correctly
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const renderMarketingPage = () => {
        switch (route) {
            case '#/features':
                return <FeaturesPage />;
            case '#/faq':
                return <FAQPage />;
            case '#/pricing':
                return <PricingPage />;
            case '#/contact':
                return <ContactPage />;
            case '#/':
            default:
                return <LandingPage />;
        }
    };

    if (route === '#/editor') {
        return <EditorPage />;
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
            <Navbar />
            <main>{renderMarketingPage()}</main>
            <Footer />
        </div>
    );
};

export default App;
