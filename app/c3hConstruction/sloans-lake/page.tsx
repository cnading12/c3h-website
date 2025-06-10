'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const SLOANS_IMAGES = [
  "/images/projects/sloans-lake/Home1.jpeg",
  "/images/projects/sloans-lake/Home2.jpeg",
  "/images/projects/sloans-lake/Kitchen.jpeg",
  "/images/projects/sloans-lake/Kitchen2.jpeg"
];

const DESCRIPTION = `
A stunning multi-family build on Sloans Lake featuring contemporary architecture, open living spaces, and premium finishes. Designed for modern Denver living, this project blends luxury with functionality just steps from the city’s favorite lake.
`;

export default function SloansLake() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLOANS_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrent(prev => (prev + 1) % SLOANS_IMAGES.length);
      if (e.key === 'ArrowLeft') setCurrent(prev => (prev - 1 + SLOANS_IMAGES.length) % SLOANS_IMAGES.length);
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
        {SLOANS_IMAGES.map((img, idx) => (
          <Image
            key={img}
            src={img}
            alt={`Sloans Lake Project image ${idx + 1}`}
            fill
            className={`object-cover absolute inset-0 transition-opacity duration-1000 ${idx === current ? "opacity-100 z-0" : "opacity-0 z-0"}`}
            priority={idx === 0}
          />
        ))}
        {/* Overlayed title */}
        <div className="z-10 absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl text-center bg-black/30 px-6 py-3 rounded">
            Sloans Lake Multi Family
          </h1>
        </div>
        {/* Slide dots */}
        <div className="z-10 absolute bottom-6 left-0 w-full flex justify-center gap-2">
          {SLOANS_IMAGES.map((_, idx) => (
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
          onClick={() => setCurrent(prev => (prev - 1 + SLOANS_IMAGES.length) % SLOANS_IMAGES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white/80 text-black p-2 rounded-full shadow transition"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          onClick={() => setCurrent(prev => (prev + 1) % SLOANS_IMAGES.length)}
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
