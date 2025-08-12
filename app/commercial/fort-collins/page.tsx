'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const FT_COLLINS_IMAGES = [
  "/images/commercial/ft-collins/5.jpg",   
   "/images/commercial/ft-collins/2.webp",    
   "/images/commercial/ft-collins/3.jpg",    
   "/images/commercial/ft-collins/4.jpeg"      
   // ...add as many as you have!    
   ];

const DESCRIPTION = `
A durable, long‑view example of mixed‑use done right. Built by C3H over a decade ago, this Fort Collins property was designed for flexibility and neighborhood value—pairing street‑level commercial space with offices above.
Today, it continues to thrive with independent local tenants including Pueblo Viejo (restaurant) and an accounting firm. C3H constructed the building; current businesses operate independently of C3H.
`;

export default function FtCollinsMixedUse() {
  const [current, setCurrent] = useState(0);

  // Auto-advance images every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % FT_COLLINS_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') setCurrent(prev => (prev + 1) % FT_COLLINS_IMAGES.length);
    if (e.key === 'ArrowLeft') setCurrent(prev => (prev - 1 + FT_COLLINS_IMAGES.length) % FT_COLLINS_IMAGES.length);
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Slideshow */}
      <section className="w-full h-[60vh] sm:h-[80vh] relative flex items-center justify-center overflow-hidden">
        {FT_COLLINS_IMAGES.map((img, idx) => (
          <Image
            key={img}
            src={img}
            alt={`Fort Collins Mixed-Use image ${idx + 1}`}
            fill
            className={`object-cover absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
            priority={idx === 0}
          />
        ))}

        {/* Overlayed title */}
        <div className="z-10 absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl text-center bg-black/30 px-6 py-3 rounded">
            Fort Collins Mixed‑Use
          </h1>
        </div>

        {/* Slide dots */}
        <div className="z-10 absolute bottom-6 left-0 w-full flex justify-center gap-2">
          {FT_COLLINS_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-7 rounded-full transition-all duration-300 ${idx === current ? 'bg-black/80' : 'bg-gray-300/60'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev/Next buttons */}
        <button
          onClick={() => setCurrent(prev => (prev - 1 + FT_COLLINS_IMAGES.length) % FT_COLLINS_IMAGES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white/80 text-black p-2 rounded-full shadow transition"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          onClick={() => setCurrent(prev => (prev + 1) % FT_COLLINS_IMAGES.length)}
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