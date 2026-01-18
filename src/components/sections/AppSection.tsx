import React from 'react';
import Image from 'next/image';

export default function AppSection() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Phone Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-48 sm:w-64 md:w-80">
              <div className="relative aspect-[9/16] bg-gradient-to-br from-[#1a2e1a] to-[#2d4a2d] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl">
                <div className="w-full h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center p-4 sm:p-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#2d5f2b] rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                        <span className="text-white text-xl sm:text-2xl">🪑</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#1a2e1a] mb-2">Chair Location</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Find your perfect workspace</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2e1a] mb-4 sm:mb-6">
              Explore The <span className="text-[#4a634a]">Chair Location</span> App
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Book your workspace on the go with our mobile app. Search, compare, and reserve 
              co-working spaces, private offices, and meeting rooms instantly. Get real-time 
              availability, view photos, and manage your bookings all from your phone.
            </p>

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#"
                className="inline-block"
                aria-label="Download on Google Play"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="h-14 w-auto hover:opacity-80 transition-opacity"
                />
              </a>
              
              <a
                href="#"
                className="inline-block"
                aria-label="Download on App Store"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="h-14 w-auto hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
