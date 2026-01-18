import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Article {
  id: number;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

export default function RecentArticles() {
  const articles: Article[] = [
    {
      id: 1,
      image: '/images/img1.jpg',
      category: 'Workspace Tips',
      date: 'March 15, 2024',
      title: '10 Tips for Maximizing Your Co-Working Space Experience',
      description: 'Discover how to make the most of your shared workspace and boost productivity.',
    },
    {
      id: 2,
      image: '/images/img2.jpg',
      category: 'Business',
      date: 'March 10, 2024',
      title: 'The Future of Remote Work: Hybrid Office Solutions',
      description: 'Explore how hybrid working models are reshaping the modern workplace.',
    },
    {
      id: 3,
      image: '/images/img3.jpg',
      category: 'Productivity',
      date: 'March 5, 2024',
      title: 'Creating the Perfect Home Office Setup',
      description: 'Learn how to design a workspace that enhances focus and creativity.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2e1a] mb-3 sm:mb-4">
            Our Recent <span className="text-[#4a634a]">Articles</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights about workspace solutions
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Category and Date */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-xs font-semibold text-[#2d5f2b] uppercase tracking-wide">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1a2e1a] mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#2d5f2b] transition-colors">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* Read More Link */}
                <Link
                  href="#"
                  className="text-[#2d5f2b] font-semibold text-xs sm:text-sm hover:underline inline-flex items-center gap-2"
                >
                  Read More
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
