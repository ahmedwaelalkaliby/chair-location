import React from 'react';
import SearchWidget from './SearchWidget';

export default function Hero() {
  return (
    <section className="relative w-full pt-6 sm:pt-8 md:pt-12 lg:pt-16 pb-24 sm:pb-32 md:pb-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Hero Image Background - Only covers top portion */}
      <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-office.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          role="img"
          aria-label="Modern office workspace background"
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
          {/* Main Heading - Positioned in upper half */}
          <header className="text-center max-w-6xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-2 md:mb-4 leading-tight px-2 drop-shadow-2xl">
              Office That Fit You<br />
              <span className="text-white">Creative Way To Work</span>
            </h1>
            <p className="sr-only">
              Find and book flexible workspace solutions including shared spaces, private offices, meeting rooms, and virtual offices
            </p>
          </header>
        </div>
      </div>

      {/* Search/Booking Widget - Positioned to overlap bottom half */}
      <div className="relative z-20 -mt-24 sm:-mt-32 md:-mt-40">
        <div className="w-full max-w-5xl mx-auto">
          <SearchWidget />
        </div>
      </div>
    </section>
  );
}