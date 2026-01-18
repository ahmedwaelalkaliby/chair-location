"use client";

import Image from "next/image";
import React from "react";
export default function ContactUs() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1f3d2d]">Contact Us</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">We Are Here For Your Help</p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start lg:items-center">
        {/* Left Images - Hidden on mobile, shown on larger screens */}
        <div className="relative hidden lg:block">
          <div className="grid grid-rows-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/img1.jpg"
                alt="office"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/img2.jpg"
                alt="office"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Middle Large Image */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-80 lg:w-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/office.svg"
              alt="office"
              width={500}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center circle overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/40 rounded-full w-24 h-24 blur-sm" />
        </div>

        {/* Right Form */}
        <div className="lg:col-span-2 w-full">
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8">
            <h3 className="text-base sm:text-lg font-semibold text-[#1f3d2d] mb-4">
              Please fill the upcoming fields<span className="text-red-500">*</span>
            </h3>

            <form className="grid grid-cols-1 gap-3 sm:gap-4">
              <input
                type="text"
                placeholder="Full Name..."
                className="border border-gray-200 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="E-mail..."
                className="border border-gray-200 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
              <input
                type="tel"
                placeholder="Phone Number..."
                className="border border-gray-200 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="City..."
                className="border border-gray-200 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
              <textarea
                placeholder="Message Text..."
                rows={4}
                className="border border-gray-200 rounded-lg p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base resize-none"
              />

              <button className="bg-[#2d5f2b] text-white rounded-lg py-2.5 sm:py-3 mt-2 font-semibold hover:bg-[#1f3d2d] transition-colors text-sm sm:text-base">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}
