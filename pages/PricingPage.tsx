import React from 'react';
import { FeatureIcon } from '../components/IconComponents';

const PricingTier: React.FC<{ title: string; price: string; description: string; features: string[]; isFeatured?: boolean }> = ({ title, price, description, features, isFeatured }) => (
    <div className={`border rounded-lg p-8 flex flex-col ${isFeatured ? 'border-purple-500 bg-gray-800/50' : 'border-gray-700'}`}>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
        <div className="mt-6">
            <span className="text-5xl font-extrabold text-white">{price}</span>
            <span className="text-lg font-medium text-gray-400">/month</span>
        </div>
        <ul className="mt-8 space-y-4 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <FeatureIcon />
                    <span className="ml-3 text-gray-300">{feature}</span>
                </li>
            ))}
        </ul>
        <a href="#/editor" className={`mt-10 block w-full text-center rounded-lg px-6 py-3 text-lg font-semibold ${isFeatured ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-700 text-white hover:bg-gray-600'}`}>
            Get Started
        </a>
    </div>
);

const PricingPage: React.FC = () => {
    return (
        <div className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Simple, Transparent Pricing</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        Choose the plan that's right for you.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <PricingTier
                        title="Hobbyist"
                        price="$0"
                        description="For casual users and trying out the platform."
                        features={[
                            '5 free edits per day',
                            'Standard resolution exports',
                            'Access to all basic AI tools',
                            'Community support'
                        ]}
                    />
                    <PricingTier
                        title="Pro"
                        price="$15"
                        description="For power users, professionals, and creators."
                        features={[
                            'Unlimited edits',
                            'High-resolution 4K exports',
                            'Access to advanced AI features',
                            'Priority email support',
                            'Save to cloud gallery'
                        ]}
                        isFeatured
                    />
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
