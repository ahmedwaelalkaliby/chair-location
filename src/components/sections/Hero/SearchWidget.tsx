"use client";

import React, { useState, ChangeEvent } from 'react';
import { Search, MapPin, User, Building2, Users, Wifi } from 'lucide-react';

type SearchType = 'Shared Space' | 'Private Offices' | 'Meeting Rooms' | 'Virtual Offices';

interface SearchTypeConfig {
  label: SearchType;
  icon: React.ReactNode;
}

export default function SearchWidget() {
  const [searchType, setSearchType] = useState<SearchType>('Meeting Rooms');
  const [searchQuery, setSearchQuery] = useState('');

  const searchTypes: SearchTypeConfig[] = [
    { label: 'Shared Space', icon: <User className="w-5 h-5" /> },
    { label: 'Private Offices', icon: <Building2 className="w-5 h-5" /> },
    { label: 'Meeting Rooms', icon: <Users className="w-5 h-5" /> },
    { label: 'Virtual Offices', icon: <Wifi className="w-5 h-5" /> },
  ];

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search:', { searchType, searchQuery });
  };

  return (
    <div className="w-full bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-3 sm:p-5 md:p-8 lg:p-10">
      {/* Office Type Selection Buttons - Responsive Layout */}
      <nav 
        className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6 lg:mb-8 pb-3 sm:pb-4 md:pb-6 lg:pb-8 border-b border-gray-200"
        aria-label="Workspace type selection"
      >
        {searchTypes.map((type) => (
          <button
            key={type.label}
            onClick={() => setSearchType(type.label)}
            className={`flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-md sm:rounded-lg md:rounded-xl text-[10px] sm:text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
              searchType === type.label
                ? 'bg-[#a3d9a3] text-[#2d5f2b] shadow-sm'
                : 'bg-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
            aria-pressed={searchType === type.label}
            aria-label={`Select ${type.label}`}
          >
            <span className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">{type.icon}</span>
            <span className="hidden sm:inline">{type.label}</span>
            <span className="sm:hidden text-[9px]">{type.label.split(' ')[0]}</span>
          </button>
        ))}
      </nav>

      {/* Search Bar - Responsive Layout */}
      <div role="search" aria-label="Workspace search" className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
        {/* Mobile: Stack vertically */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus-within:border-[#2d5f2b] transition-colors bg-gray-50">
          {/* Left Side - Search Icon and Input */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-1 min-w-0">
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search Here..."
              className="flex-1 outline-none text-[11px] sm:text-xs md:text-sm text-gray-700 placeholder-gray-500 bg-transparent min-w-0"
              aria-label="Search workspace"
              value={searchQuery}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden sm:block w-px h-5 sm:h-6 md:h-8 bg-gray-300"></div>
          <div className="sm:hidden w-full h-px bg-gray-300"></div>

          {/* Right Side - Location Pin and Text */}
          <button className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-2 sm:px-0 py-1.5 sm:py-0 text-gray-700 hover:text-[#2d5f2b] transition-colors">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#2d5f2b] flex-shrink-0" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs md:text-sm whitespace-nowrap font-medium">Search Nearby</span>
          </button>
        </div>
      </div>

      {/* Search Button - Full Width */}
      <button 
        onClick={handleSearch}
        className="w-full bg-[#2d5f2b] text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-[#1f3d2d] transition-colors text-xs sm:text-sm md:text-base shadow-lg"
        aria-label="Search for workspace"
      >
        Search
      </button>
    </div>
  );
}