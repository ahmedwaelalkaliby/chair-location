import React from 'react';
import Image from 'next/image';

export default function HowItWorks() {
    const steps = [
    {
      id: 1,
      title: "Book, Reach or Call",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      image: "./office.svg", // Replace with your actual image paths
    },
    {
      id: 2,
      title: "View Location Info",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      image: "./office.svg",
    },
    {
      id: 3,
      title: "Search Locations",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      image: "./office.svg",
    },
  ];
  return (
    <section className="py-12 sm:py-16 px-4 max-w-7xl mx-auto font-sans">
      {/* Header Section */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2e1a] mb-4 sm:mb-6">
          How <span className="text-[#4a634a]">It</span> Works
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Coworking & Flexible Office Marketplace | Search & Book Today
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col">
            {/* Step Title with Number */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d9c5a3] text-[#7a603a] font-bold text-xs sm:text-sm">
                {step.id}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1a2e1a]">
                {step.title}
              </h3>
            </div>

            {/* Image Container */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 aspect-[4/3] shadow-sm">
              <Image
                src={step.image}
                alt={step.title}
                width={555}
                height={666}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-snug">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
