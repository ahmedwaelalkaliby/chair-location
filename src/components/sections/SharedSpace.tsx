import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function SharedSpace() {
  const features = [
    'High-speed WiFi',
    'Printing & Scanning',
    'Kitchen Facilities',
    'Meeting Rooms',
    '24/7 Access',
    'Mail Handling',
  ];

  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2e1a] mb-4 sm:mb-6">
              Shared Space <span className="text-[#4a634a]">(CO Work Space)</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Experience the flexibility and community of a shared workspace. Perfect for freelancers, 
              startups, and remote workers who want a professional environment without the commitment 
              of a traditional office lease.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-[#2d5f2b] rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mb-6 sm:mb-8">
              <p className="text-2xl sm:text-3xl font-bold text-[#2d5f2b] mb-2">
                Price From SAR 120/day
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Flexible pricing options available
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button className="bg-[#2d5f2b] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#1f3d2d] transition-colors text-sm sm:text-base w-full sm:w-auto">
                Book Now
              </button>
              <button className="bg-white text-[#2d5f2b] border-2 border-[#2d5f2b] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/img3.jpg"
                alt="Shared Co-working Space"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 bg-[#a3b18a] opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
