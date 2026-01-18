import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  authorName: string;
  date: string;
}
export default function ProductCard({
  imageSrc,
  category,
  title,
  description,
  authorName,
  date,
}: FeatureCardProps) {
  return (
   <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative h-56 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 line-clamp-2">
          {title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-gray-600 line-clamp-3">
          {description}
        </p>

        {/* Footer / Author Section */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500" />
            <span className="text-sm font-medium text-gray-700">{authorName}</span>
          </div>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
            {date}
          </span>
        </div>
      </div>
    </div>
  )
}
