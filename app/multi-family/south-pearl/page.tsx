'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const SOUTH_PEARL_IMAGES = [
  "/images/multi-family/south-pearl/11.JPG",
  "/images/multi-family/south-pearl/1.JPEG",
  "/images/multi-family/south-pearl/2.JPEG",
  "/images/multi-family/south-pearl/3.JPEG",
  "/images/multi-family/south-pearl/4.JPEG",
  "/images/multi-family/south-pearl/5.JPEG",
  "/images/multi-family/south-pearl/6.jpg",
];

const DESCRIPTION = `
A modern multi-family development in the heart of South Pearl, Denver.
Showcasing sophisticated urban living, this project features spacious interiors, designer finishes, and vibrant neighborhood amenities—perfect for residents seeking luxury and convenience in one of the city's most desirable locations.
`;

export default function SouthPearl() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SOUTH_PEARL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrent(prev => (prev + 1) % SOUTH_PEARL_IMAGES.length);
      if (e.key === 'ArrowLeft') setCurrent(prev => (prev - 1 + SOUTH_PEARL_IMAGES.length) % SOUTH_PEARL_IMAGES.length);
    },
    []
  );
  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Slideshow */}
      <section className="w-full h-[60vh] sm:h-[80vh] relative flex items-center justify-center overflow-hidden">
        {SOUTH_PEARL_IMAGES.map((img, idx) => (
          <Image
            key={img}
            src={img}
            alt={`South Pearl Project image ${idx + 1}`}
            fill
            className={`object-cover absolute inset-0 transition-opacity duration-1000 ${idx === current ? "opacity-100 z-0" : "opacity-0 z-0"}`}
            priority={idx === 0}
          />
        ))}
        {/* Overlayed title */}
        <div className="z-10 absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl text-center bg-black/30 px-6 py-3 rounded">
            South Pearl Multi-Family
          </h1>
        </div>
        {/* Slide dots */}
        <div className="z-10 absolute bottom-6 left-0 w-full flex justify-center gap-2">
          {SOUTH_PEARL_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-7 rounded-full transition-all duration-300 ${idx === current ? "bg-black/80" : "bg-gray-300/60"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        {/* Prev/Next buttons */}
        <button
          onClick={() => setCurrent(prev => (prev - 1 + SOUTH_PEARL_IMAGES.length) % SOUTH_PEARL_IMAGES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white/80 text-black p-2 rounded-full shadow transition"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          onClick={() => setCurrent(prev => (prev + 1) % SOUTH_PEARL_IMAGES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white/80 text-black p-2 rounded-full shadow transition"
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </section>

      {/* Project Description */}
      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black">About This Project</h2>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {DESCRIPTION}
        </p>
      </section>
    </main>
  );
}
