'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Share2, Star, Users, Calendar, ArrowRight, Building2, Monitor } from 'lucide-react';

interface Listing {
  id: number;
  image: string;
  available: boolean;
  category: string;
  rating: number;
  reviews: number;
  title: string;
  description: string;
  capacity: string;
  status: 'Open' | 'Closed';
  price: string;
}

export default function Latest() {
  const [activeFilter, setActiveFilter] = useState('Shared Space');

  const listings: Listing[] = [
    {
      id: 1,
      image: '/Group 36868.jpg',
      available: true,
      category: 'Shared Area',
      rating: 4.9,
      reviews: 162,
      title: 'Spot Co-Working Space',
      description: 'Chair location is a website where you can search, find and reserve co-working space, including co-working',
      capacity: '12 Per',
      status: 'Open',
      price: '20SAR /HOUR',
    },
    {
      id: 2,
      image: '/creative-office-interior-thoughtfully-designed-with-vibrant-colors-flexible-spaces-inspiring-decor-fostering-productivity-innovation-generative-ai.svg',
      available: false,
      category: 'Meeting Room',
      rating: 4.9,
      reviews: 162,
      title: 'Spot Co-Working Space',
      description: 'Chair location is a website where you can search, find and reserve co-working space, including co-working',
      capacity: '12 Per',
      status: 'Closed',
      price: '20SAR /HOUR',
    },
    {
      id: 3,
      image: '/3d-rendering-business-meeting-working-room-office-building.svg',
      available: true,
      category: 'Private Office',
      rating: 4.9,
      reviews: 162,
      title: 'Spot Co-Working Space',
      description: 'Chair location is a website where you can search, find and reserve co-working space, including co-working',
      capacity: '12 Per',
      status: 'Closed',
      price: '20SAR /HOUR',
    },
    {
      id: 4,
      image: '/hero-office.svg',
      available: true,
      category: 'Meeting Room',
      rating: 4.9,
      reviews: 162,
      title: 'Spot Co-Working Space',
      description: 'Chair location is a website where you can search, find and reserve co-working space, including co-working',
      capacity: '12 Per',
      status: 'Closed',
      price: '20SAR /HOUR',
    },
  ];

  const filters = [
    { name: 'Shared Space', icon: Users },
    { name: 'Private Offices', icon: Building2 },
    { name: 'Meeting Rooms', icon: Users },
    { name: 'Virtual Offices', icon: Monitor },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-2">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e1a] mb-3">
            Latest Listings
          </h2>
          <p className="text-lg text-gray-600">
            Check our latest listings
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Availability Banner - Diagonal */}
                <div className={`absolute top-0 left-0 w-32 h-32 overflow-hidden`}>
                  <div
                    className={`absolute top-0 left-0 w-40 h-10 transform -rotate-45 -translate-x-8 translate-y-6 ${
                      listing.available ? 'bg-green-600' : 'bg-red-600'
                    } flex items-center justify-center`}
                  >
                    <span className="text-white text-xs font-semibold whitespace-nowrap">
                      {listing.available ? 'Available' : 'Not Available'}
                    </span>
                  </div>
                </div>

                {/* Action Icons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-sm">
                    <Share2 className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-sm">
                    <Heart className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category Tag */}
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {listing.category}
                </span>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {listing.rating} ({listing.reviews} Review)
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1a2e1a] mb-2">
                  {listing.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {listing.description}
                </p>

                {/* Details */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{listing.capacity}</span>
                  </div>
                  <div className={`flex items-center gap-1 ${listing.status === 'Open' ? 'text-green-600' : 'text-red-600'}`}>
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{listing.status}</span>
                  </div>
                </div>

                {/* Price and Arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-sm text-gray-600">Starts From: </span>
                    <span className="text-lg font-bold text-[#1a2e1a]">{listing.price}</span>
                  </div>
                  <button className="bg-[#2d5f2b] text-white p-2 rounded-full hover:bg-[#1f3d2d] transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="bg-[#1a2e1a] rounded-2xl p-2 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.name;
            return (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  isActive
                    ? 'bg-white text-[#1a2e1a]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#1a2e1a]' : 'text-white'}`} />
                <span>{filter.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
