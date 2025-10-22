import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-gray-400 pr-4">
                    {children}
                </p>
            </div>
        </div>
    );
}

const FAQSection = () => {
    return (
        <section id="faq" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    <FAQItem question="What kind of AI models are you using?">
                        Our editor is powered by Google's Gemini family of models. We use Gemini Flash for fast and intelligent prompt optimization and the Gemini Flash Image model (also known as Nano Banana) for high-quality image generation and editing.
                    </FAQItem>
                    <FAQItem question="Is it free to use?">
                        Yes, our basic features are available for free. We may introduce premium tiers in the future for advanced features, higher resolution exports, and increased usage limits.
                    </FAQItem>
                    <FAQItem question="Can I use the generated images commercially?">
                        You should always review the terms of service for the underlying AI models. Generally, you are responsible for the content you create. Please respect copyright and do not generate harmful or infringing content.
                    </FAQItem>
                    <FAQItem question="How do you ensure the privacy of my photos?">
                        We take privacy seriously. Uploaded images are processed securely and are only used to fulfill your editing request. We do not store your original images long-term unless you have an account and choose to save them to a gallery.
                    </FAQItem>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
