import React from 'react';
import Image from 'next/image';

export default function TrustedBy() {
  const companies = [
    { name: 'VISA', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png' },
    { name: 'Slack', logo: 'https://logos-world.net/wp-content/uploads/2021/08/Slack-Logo.png' },
    { name: 'Xbox', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Xbox-Logo.png' },
    { name: 'LinkedIn', logo: 'https://logos-world.net/wp-content/uploads/2020/04/LinkedIn-Logo.png' },
    { name: 'Cisco', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Cisco-Logo.png' },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#1a2e1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Chair Location Is Trusted By The World&apos;s Largest Companies
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Join thousands of businesses that trust Chair Location for their workspace needs. 
              From startups to Fortune 500 companies, we provide flexible office solutions that scale with your business.
            </p>
          </div>

          {/* Right Column - Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center order-1 lg:order-2">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="relative w-32 h-16 grayscale brightness-0 invert opacity-80 hover:opacity-100 transition-opacity">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
