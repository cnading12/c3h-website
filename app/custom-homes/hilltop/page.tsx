'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const HILLTOP_IMAGES = [
  "/images/custom-homes/hilltop/2.webp",
  "/images/custom-homes/hilltop/1.webp",
  "/images/custom-homes/hilltop/3.webp",
  "/images/custom-homes/hilltop/4.webp",
  "/images/custom-homes/hilltop/5.webp",
  "/images/custom-homes/hilltop/6.webp",
  "/images/custom-homes/hilltop/7.webp",
  "/images/custom-homes/hilltop/8.webp",
  "/images/custom-homes/hilltop/9.webp"
];

const DESCRIPTION = `
A showcase of next-level luxury in Denver’s Hilltop neighborhood. This six-bedroom custom home features bold architecture, soaring ceilings, wide-plank hardwoods, and designer details throughout.

The open-concept main floor centers around a chef’s kitchen with Wolf & Sub-Zero appliances, quartz counters, custom cabinetry, and a sunlit family room with a linear fireplace. 

Enjoy seamless indoor-outdoor living with a covered patio, pergola with fireplace, firepit lounge, and professional landscaping. The luxurious primary suite includes dual walk-in closets, a spa bath, fireplace, and private balcony.

Other highlights: a main-level guest suite, finished basement with custom bar and media room, whole-home automation, and a 3-car garage with EV charging.
`;


export default function HilltopCustomHome() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % HILLTOP_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrent(prev => (prev + 1) % HILLTOP_IMAGES.length);
      if (e.key === 'ArrowLeft') setCurrent(prev => (prev - 1 + HILLTOP_IMAGES.length) % HILLTOP_IMAGES.length);
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
        {HILLTOP_IMAGES.map((img, idx) => (
          <Image
            key={img}
            src={img}
            alt={`Hilltop Custom Home image ${idx + 1}`}
            fill
            className={`object-cover absolute inset-0 transition-opacity duration-1000 ${idx === current ? "opacity-100 z-0" : "opacity-0 z-0"}`}
            priority={idx === 0}
          />
        ))}
        {/* Overlayed title */}
        <div className="z-10 absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl text-center bg-black/30 px-6 py-3 rounded">
            Hilltop Custom Home
          </h1>
        </div>
        {/* Slide dots */}
        <div className="z-10 absolute bottom-6 left-0 w-full flex justify-center gap-2">
          {HILLTOP_IMAGES.map((_, idx) => (
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
          onClick={() => setCurrent(prev => (prev - 1 + HILLTOP_IMAGES.length) % HILLTOP_IMAGES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white/80 text-black p-2 rounded-full shadow transition"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          onClick={() => setCurrent(prev => (prev + 1) % HILLTOP_IMAGES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white/80 text-black p-2 rounded-full shadow transition"
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </section>

      {/* Project Description */}
      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black">About This Home</h2>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {DESCRIPTION}
        </p>
      </section>
    </main>
  );
}
