"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Shared Space');

  const categories = ['Shared Space', 'Private Office', 'Meeting Room', 'Virtual Office'];

  const plans: PricingPlan[] = [
    {
      name: 'Basic',
      price: isYearly ? 'SAR 89/monthly' : 'SAR 99/monthly',
      features: [
        'Access to shared workspace',
        'High-speed WiFi',
        'Basic amenities',
        'Community events',
        'Mail handling',
      ],
    },
    {
      name: 'Enterprise',
      price: isYearly ? 'SAR 149/monthly' : 'SAR 179/monthly',
      features: [
        'Private office space',
        'Dedicated desk',
        'Meeting room access (10hrs/month)',
        'Premium amenities',
        '24/7 access',
        'Phone booth access',
        'Priority support',
      ],
      highlighted: true,
    },
    {
      name: 'Premium',
      price: isYearly ? 'SAR 249/monthly' : 'SAR 299/monthly',
      features: [
        'Large private office',
        'Multiple dedicated desks',
        'Unlimited meeting room access',
        'All premium amenities',
        '24/7 access',
        'Event space access',
        'Dedicated account manager',
        'Custom branding options',
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e1a] mb-4">
            Simple, transparent <span className="text-[#4a634a]">pricing</span>
          </h2>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className={`text-sm font-medium ${!isYearly ? 'text-[#2d5f2b]' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? 'bg-[#2d5f2b]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  isYearly ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-[#2d5f2b]' : 'text-gray-500'}`}>
              Yearly
            </span>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[#2d5f2b] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 relative ${
                plan.highlighted
                  ? 'border-2 border-[#2d5f2b] md:transform md:scale-105 lg:scale-110'
                  : 'border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-[#2d5f2b] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl sm:text-2xl font-bold text-[#1a2e1a] mb-2">{plan.name}</h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-[#2d5f2b]">{plan.price}</span>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-[#2d5f2b] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                  plan.highlighted
                    ? 'bg-[#2d5f2b] text-white hover:bg-[#1f3d2d]'
                    : 'bg-gray-100 text-[#2d5f2b] hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
