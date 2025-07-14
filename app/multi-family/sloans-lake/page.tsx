'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const SLOANS_LAKE_SLIDES = [
  { type: 'video', src: '/images/multi-family/sloans-lake/1.mp4', poster: '/images/projects/sloans-lake/Home1.jpeg' }, // video slide
  { type: 'image', src: '/images/multi-family/sloans-lake/2.jpg' },
  { type: 'image', src: '/images/multi-family/sloans-lake/3.jpg' },
];

const DESCRIPTION = `
A premier multi-family project on Denver’s Sloans Lake, this development blends lakeside views, contemporary living spaces, and high-end amenities. The result: a modern retreat at the heart of one of the city’s most desirable neighborhoods.
`;

export default function SloansLake() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Auto-advance every 5s for images, or at video end for video
  useEffect(() => {
    // Clear any previous event listeners
    if (videoRef.current) {
      videoRef.current.onended = null;
    }

    if (SLOANS_LAKE_SLIDES[current].type === 'video') {
      // On video end, advance to next slide
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        videoRef.current.onended = () => {
          setCurrent((prev) => (prev + 1) % SLOANS_LAKE_SLIDES.length);
        };
      }
      // If it's a video, don't auto-advance with timer
      return;
    }

    // Image: auto-advance after 5s
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLOANS_LAKE_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  // Keyboard navigation
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrent(prev => (prev + 1) % SLOANS_LAKE_SLIDES.length);
      if (e.key === 'ArrowLeft') setCurrent(prev => (prev - 1 + SLOANS_LAKE_SLIDES.length) % SLOANS_LAKE_SLIDES.length);
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
        {SLOANS_LAKE_SLIDES.map((slide, idx) => {
          if (slide.type === 'image') {
            return (
              <Image
                key={slide.src}
                src={slide.src}
                alt={`Sloans Lake image ${idx + 1}`}
                fill
                className={`object-cover absolute inset-0 transition-opacity duration-1000 ${idx === current ? "opacity-100 z-0" : "opacity-0 z-0"}`}
                priority={idx === 0}
              />
            );
          } else {
            return (
              <video
                key={slide.src}
                ref={idx === current ? videoRef : undefined}
                src={slide.src}
                poster={slide.poster}
                autoPlay={idx === current}
                muted
                playsInline
                loop={false}
                className={`object-cover absolute inset-0 w-full h-full transition-opacity duration-1000 ${idx === current ? "opacity-100 z-0" : "opacity-0 z-0"}`}
                style={{ objectFit: 'cover' }}
              />
            );
          }
        })}
        {/* Overlayed title */}
        <div className="z-10 absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl text-center bg-black/30 px-6 py-3 rounded">
            Sloans Lake Multi-Family
          </h1>
        </div>
        {/* Slide dots */}
        <div className="z-10 absolute bottom-6 left-0 w-full flex justify-center gap-2">
          {SLOANS_LAKE_SLIDES.map((_, idx) => (
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
          onClick={() => setCurrent(prev => (prev - 1 + SLOANS_LAKE_SLIDES.length) % SLOANS_LAKE_SLIDES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white/80 text-black p-2 rounded-full shadow transition"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          onClick={() => setCurrent(prev => (prev + 1) % SLOANS_LAKE_SLIDES.length)}
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
