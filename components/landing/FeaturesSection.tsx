import React from 'react';
import { FeatureIcon } from '../IconComponents';

const Feature: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
            <FeatureIcon />
        </div>
        <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-1 text-gray-400">{children}</p>
        </div>
    </div>
);


const FeaturesSection = () => {
    return (
        <section id="features" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why You'll Love AI Stylizer</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        We leverage state-of-the-art AI to make professional photo editing accessible to everyone.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                    <Feature title="AI Prompt Optimizer">
                        You don't need to be an expert. Our AI understands your casual language and converts it into the perfect technical prompt for incredible results.
                    </Feature>
                    <Feature title="Instant Style Variants">
                        Generate multiple creative options from a single prompt. Explore different styles and pick the perfect look for your image.
                    </Feature>
                    <Feature title="Iterative Refinement">
                        Love a result but want to tweak it? Use any generated image as the starting point for your next edit for fine-tuned control.
                    </Feature>
                    <Feature title="Simple & Intuitive">
                        No more confusing layers or complicated tools. Just upload, describe, and download. It's that easy.
                    </Feature>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
