import React from 'react';
import { Facebook, Youtube, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
export default function Footer() {
    const mainPages = ['Home', 'About', 'How It Works', 'Contact Us', 'Membership'];
  const products = [
    { name: 'Shared Space', icon: '🪑' },
    { name: 'Private Offices', icon: '🏢' },
    { name: 'Meeting Rooms', icon: '👥' },
    { name: 'Virtual Offices', icon: '🌐' },
  ];
  return (
    <footer className="bg-[#f8f9fa] pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          
          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="w-24 sm:w-32">
              <Image src="/logo.svg" alt="Chair Location" width={100} height={50} className="w-full h-auto" />
            </div>
            <div className="grid grid-cols-2 w-16 sm:w-20 gap-3 sm:gap-4 text-[#1a2e1a]">
              <Facebook size={18} className="sm:w-5 sm:h-5 cursor-pointer hover:opacity-70" />
              <Youtube size={18} className="sm:w-5 sm:h-5 cursor-pointer hover:opacity-70" />
              <Linkedin size={18} className="sm:w-5 sm:h-5 cursor-pointer hover:opacity-70" />
              <Twitter size={18} className="sm:w-5 sm:h-5 cursor-pointer hover:opacity-70" />
            </div>
          </div>

          {/* Column 2: Main Pages */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-[#3a5a40] mb-4 sm:mb-6">Main Pages</h4>
            <ul className="space-y-3 sm:space-y-4">
              {mainPages.map((page) => (
                <li key={page} className="flex items-center text-sm sm:text-base text-gray-600 hover:text-emerald-700 cursor-pointer">
                  <span className="text-[#a3b18a] mr-2 text-xs">●</span>
                  {page}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-[#3a5a40] mb-4 sm:mb-6">Products</h4>
            <ul className="space-y-3 sm:space-y-4">
              {products.map((product) => (
                <li key={product.name} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 hover:text-emerald-700 cursor-pointer">
                  <span className="text-xs sm:text-sm grayscale opacity-70">{product.icon}</span>
                  {product.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: App Download */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-[#3a5a40] mb-4 sm:mb-6 leading-tight">
              Download the <br /> Chair Location App
            </h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play" 
                className="h-10 sm:h-12 w-fit cursor-pointer"
                width={167}
                height={50}
              />
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="App Store" 
                className="h-10 sm:h-12 w-fit cursor-pointer"
                width={167}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center sm:text-left">
            <span className="underline cursor-pointer hover:text-gray-800">Privacy & Policy</span>
            <span className="underline cursor-pointer hover:text-gray-800">Terms & Conditions</span>
          </div>
          <div className="text-center md:text-right text-xs sm:text-sm">
            All Copyrights Chair Location | Developed by <span className="font-bold text-gray-700">e-RAMO For Digital Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
