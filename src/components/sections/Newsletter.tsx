"use client";

import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative Icons */}
        <div className="flex justify-center gap-4 sm:gap-8 mb-4 sm:mb-6 opacity-30">
          <span className="text-4xl sm:text-6xl">🪑</span>
          <span className="text-4xl sm:text-6xl">🌿</span>
        </div>

        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Get the latest updates on new workspaces, special offers, and workspace tips delivered 
          straight to your inbox.
        </p>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto px-2">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-white text-[#2d5f2b] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap text-sm sm:text-base"
          >
            Subscribe
          </button>
        </form>

        {/* Privacy Note */}
        <p className="text-xs sm:text-sm text-gray-300 mt-3 sm:mt-4 px-2">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
