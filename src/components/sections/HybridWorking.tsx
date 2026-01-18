import React from 'react';
import Image from 'next/image';

export default function HybridWorking() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2e1a] mb-4 sm:mb-6">
            Hybrid working can work for you
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Embrace the future of work with flexible office solutions that adapt to your needs. 
            Whether you're working from home, the office, or on the go, we have the perfect space for you.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/img1.jpg"
                alt="Hybrid Office Space 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/img2.jpg"
                alt="Hybrid Office Space 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/img3.jpg"
                alt="Hybrid Office Space 3"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
