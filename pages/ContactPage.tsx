import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Get in Touch</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        We'd love to hear from you! Please fill out the form below.
                    </p>
                </div>
                <div className="max-w-xl mx-auto">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                            <div className="mt-1">
                                <input type="text" name="name" id="name" autoComplete="name" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-gray-200" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-gray-200" />
                            </div>
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                            <div className="mt-1">
                                <textarea id="message" name="message" rows={4} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-gray-200 resize-none"></textarea>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
