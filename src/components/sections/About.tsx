import React from 'react';
import { MapPin, Users, Headphones } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <section className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 gap-8 sm:gap-12 md:gap-16 lg:gap-20 md:flex-row flex-col">
        <div className="max-w-lg w-full p-4 sm:p-6 md:p-8">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#365327] mb-4 sm:mb-6">
            About Chair Location
          </h2>
          
          {/* Description - Split into two paragraphs */}
          <div className="mb-6 sm:mb-8 space-y-4">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              &quot;Chair location&quot; is a website where you can search, find and reserve co-working space, including co-working offices, private offices, meeting rooms, and virtual offices near you. It shows the features and amenities this space can provide.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Professionals and businesses can then compare all available co-working spaces to find one with the services and facilities that best suit their requirements.
            </p>
          </div>

          {/* Why Chair Location */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#365327] mb-4 sm:mb-6">
            Why Chair Location
          </h3>

          {/* Features List */}
          <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
            {/* Feature 1 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#365327]" />
              </div>
              <div className="flex-1 pt-1">
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  More Than (4652) Location
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#365327]" />
              </div>
              <div className="flex-1 pt-1">
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  We Offer All Amenities in Our All Location
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-[#365327]" />
              </div>
              <div className="flex-1 pt-1">
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  All Kinda Of Supports 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="flex-1 bg-[#365327] hover:bg-[#2d4520] text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base">
              View Products
            </button>
            <button className="flex-1 bg-white hover:bg-slate-50 text-[#365327] font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-lg border-2 border-[#365327] transition-colors duration-200 text-sm sm:text-base">
              Book Now
            </button>
          </div>
        </div>
              
        <div className='flex flex-col gap-4 sm:gap-6 w-full max-w-md md:max-w-lg lg:max-w-xl'>
          <Image
            src="/Group 36868.jpg"
            alt="People working at conference table"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg object-cover"
          />  
          <Image
            src="/Group 36870.svg"
            alt="Modern co-working office space"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg object-cover"
          />
          <Image
            src="/Group 36869.svg"
            alt="People working on laptops"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>        
      </section>
    </>
  )
}
