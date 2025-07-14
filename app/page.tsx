'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HERO_IMAGES = [
  { src: '/images/hero/Custom-home.jpg', alt: 'Luxury Home 1' },
  { src: '/images/hero/Commercial.jpg', alt: 'Luxury Home 2' },
  { src: '/images/hero/Multi-family.jpg', alt: 'Luxury Home 3' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
      if (e.key === 'ArrowLeft') setCurrent((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
    },
    []
  );
  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="
  w-full
  h-[75vh] sm:h-[95vh]   // Same as commercial
  relative flex items-center justify-center overflow-hidden shadow-lg
">
        {HERO_IMAGES.map((img, idx) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            className={`
        object-cover absolute inset-0 transition-opacity duration-1000
        ${idx === current ? "opacity-100 z-0" : "opacity-0 z-0"}
      `}
            priority={idx === 0}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="z-20 absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-4 text-white drop-shadow-xl text-center">
            Crafting Luxury. <br /> Building Dreams.
          </h1>
          {/* Slide dots */}
          <div className="flex gap-2 mt-6">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 w-7 rounded-full transition-all duration-300 ${idx === current ? "bg-white/90" : "bg-white/40"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Prev/Next buttons */}
        <button
          onClick={() => setCurrent(prev => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/60 hover:bg-white/90 text-black p-2 rounded-full shadow transition"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          onClick={() => setCurrent(prev => (prev + 1) % HERO_IMAGES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/60 hover:bg-white/90 text-black p-2 rounded-full shadow transition"
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </section>


      {/* Mission Statement (ALTERNATING: White) */}
      <section className="max-w-3xl mx-auto px-6 py-14 text-center bg-white text-black rounded-3xl shadow-xl -mt-24 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          A Denver-based full-service builder, C3H Denver offers a complete range of construction and development services.
          Founded in 1991, our team consistently delivers superior quality and value to Denver’s most exclusive neighborhoods, including: Cherry Hills Village, Greenwood Village, Denver Country Club, Hilltop, Washington Park, and Cherry Creek.
        </p>
      </section>

      {/* Big Stats (Dark & Light Alternating) */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-black border border-gray-800 rounded-2xl shadow-xl p-10 flex flex-col items-center">
          <span className="text-5xl font-extrabold mb-2 text-white">35+</span>
          <span className="uppercase tracking-widest text-gray-300">Years Experience</span>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center">
          <span className="text-5xl font-extrabold mb-2 text-black">100+</span>
          <span className="uppercase tracking-widest text-gray-700">Luxury Homes Built</span>
        </div>
        <div className="bg-black border border-gray-800 rounded-2xl shadow-xl p-10 flex flex-col items-center">
          <span className="text-5xl font-extrabold mb-2 text-white">99%</span>
          <span className="uppercase tracking-widest text-gray-300">Client Satisfaction</span>
        </div>
      </section>

      {/* Portfolio Boxes: Custom Homes, Commercial, Multi-Family */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Custom Homes */}
        <Link
          href="/custom-homes"
          className="group relative block rounded-2xl overflow-hidden shadow-xl min-h-[260px] aspect-[4/3] focus:outline-none focus:ring-4 focus:ring-blue-200 transition-transform hover:scale-105"
        >
          <Image
            src="/images/custom-homes/hero/1.jpg"
            alt="Custom Homes"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
          <span className="absolute inset-0 flex flex-col items-center justify-center text-white text-2xl sm:text-3xl font-semibold drop-shadow-lg tracking-wide z-10 pointer-events-none">
            Custom Homes
            <span className="ml-2 text-blue-200 group-hover:translate-x-2 transition-transform text-3xl">&#8594;</span>
          </span>
        </Link>
        {/* Commercial */}
        <Link
          href="/commercial"
          className="group relative block rounded-2xl overflow-hidden shadow-xl min-h-[260px] aspect-[4/3] focus:outline-none focus:ring-4 focus:ring-blue-200 transition-transform hover:scale-105"
        >
          <Image
            src="/images/commercial/sloans-lake/1.jpg"
            alt="Commercial"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
          <span className="absolute inset-0 flex flex-col items-center justify-center text-white text-2xl sm:text-3xl font-semibold drop-shadow-lg tracking-wide z-10 pointer-events-none">
            Commercial
            <span className="ml-2 text-blue-200 group-hover:translate-x-2 transition-transform text-3xl">&#8594;</span>
          </span>
        </Link>
        {/* Multi-Family */}
        <Link
          href="/multi-family"
          className="group relative block rounded-2xl overflow-hidden shadow-xl min-h-[260px] aspect-[4/3] focus:outline-none focus:ring-4 focus:ring-blue-200 transition-transform hover:scale-105"
        >
          <Image
            src="/images/hero/multi-family.jpg"
            alt="Multi-Family"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
          <span className="absolute inset-0 flex flex-col items-center justify-center text-white text-2xl sm:text-3xl font-semibold drop-shadow-lg tracking-wide z-10 pointer-events-none">
            Multi-Family
            <span className="ml-2 text-blue-200 group-hover:translate-x-2 transition-transform text-3xl">&#8594;</span>
          </span>
        </Link>
      </section>
    </div>
  );
}
