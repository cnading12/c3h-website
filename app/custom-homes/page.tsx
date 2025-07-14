'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Hero slideshow images (add as many as you want, not the featured projects)
const HERO_IMAGES = [
  "/images/custom-homes/hero/1.jpg",
  "/images/custom-homes/hero/2.jpeg",
  "/images/custom-homes/hero/3.jpeg",
  "/images/custom-homes/hero/4.jpg",
  "/images/custom-homes/hero/5.jpg",
  "/images/custom-homes/hero/6.jpg",
  "/images/custom-homes/hero/12.jpg",
  "/images/custom-homes/hero/8.jpg",
  "/images/custom-homes/hero/9.jpg",
  "/images/custom-homes/hero/10.jpg",
  "/images/custom-homes/hero/11.jpg",
  "/images/custom-homes/hero/12.jpg",
  "/images/custom-homes/hero/13.jpg",
  "/images/custom-homes/hero/14.jpg",
  "/images/custom-homes/hero/15.jpg",
  "/images/custom-homes/hero/16.jpg"

];

const PROJECTS = [
  {
    name: "Country Club Custom Home",
    slug: "country-club",
    images: [
      "/images/custom-homes/country-club/1.jpg",
      "/images/custom-homes/country-club/2.jpg",
      "/images/custom-homes/country-club/3.jpg"
    ],
  },
  {
    name: "LoHi Custom Home",
    slug: "lohi",
    images: [
      "/images/custom-homes/lohi/1.jpg",
      "/images/custom-homes/lohi/2.jpg",
      "/images/custom-homes/lohi/3.jpg"
    ],
  },
];

export default function CustomHomes() {
  // Hero slideshow
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleHeroKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') setHeroIndex(prev => (prev + 1) % HERO_IMAGES.length);
    if (e.key === 'ArrowLeft') setHeroIndex(prev => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', handleHeroKey);
    return () => window.removeEventListener('keydown', handleHeroKey);
  }, [handleHeroKey]);

  // Featured projects hover slideshows
  const [indexes, setIndexes] = useState<number[]>([0, 0]);
  const intervals = useRef<Array<number | null>>([null, null]);

  const handleMouseEnter = (idx: number) => {
    intervals.current[idx] = window.setInterval(() => {
      setIndexes((current) => {
        const updated = [...current];
        updated[idx] = (updated[idx] + 1) % PROJECTS[idx].images.length;
        return updated;
      });
    }, 1200);
  };

  const handleMouseLeave = (idx: number) => {
    if (intervals.current[idx]) {
      clearInterval(intervals.current[idx]!);
      intervals.current[idx] = null;
    }
    setIndexes((current) => {
      const updated = [...current];
      updated[idx] = 0;
      return updated;
    });
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Hero Slideshow */}
      <section className="w-full h-[75vh] sm:h-[95vh] relative flex items-center justify-center overflow-hidden shadow-lg">
        {HERO_IMAGES.map((img, idx) => (
          <Image
            key={img}
            src={img}
            alt={`Custom home ${idx + 1}`}
            fill
            className={`object-cover absolute inset-0 transition-opacity duration-1000 ${idx === heroIndex ? "opacity-100 z-0" : "opacity-0 z-0"}`}
            priority={idx === 0}
          />
        ))}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="z-20 absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-white drop-shadow-xl text-center">
            C3H Custom Homes
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto text-center mt-2 drop-shadow">
            Award-winning custom homes tailored for Colorado’s most discerning clients. Discover the artistry, attention to detail, and legacy of C3H Construction.
          </p>
          {/* Slide dots */}
          <div className="flex gap-2 mt-6">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroIndex(idx)}
                className={`h-2 w-7 rounded-full transition-all duration-300 ${idx === heroIndex ? "bg-white/90" : "bg-white/40"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Prev/Next buttons */}
        <button
          onClick={() => setHeroIndex(prev => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/60 hover:bg-white/90 text-black p-2 rounded-full shadow transition"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          onClick={() => setHeroIndex(prev => (prev + 1) % HERO_IMAGES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/60 hover:bg-white/90 text-black p-2 rounded-full shadow transition"
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </section>

      {/* Divider */}
      <div className="w-full h-12 flex items-center justify-center">
        <div className="h-px w-2/3 bg-gray-200 my-8" />
      </div>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <Link
              href={`/custom-homes/${project.slug}`}
              key={project.slug}
              className="group relative aspect-square block rounded-lg overflow-hidden shadow-lg"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <Image
                src={project.images[indexes[idx]]}
                alt={project.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <span className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl font-semibold drop-shadow-lg tracking-wide z-10">
                {project.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* (Optional) Add credibility/testimonial section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Why Choose C3H Custom Homes?</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          With over 35 years of experience, C3H Construction specializes in bespoke custom homes that exceed expectations. From initial consultation to handing over the keys, our team ensures every detail reflects your vision and our legacy of quality.
        </p>
        <blockquote className="italic text-gray-600 max-w-2xl mx-auto border-l-4 border-blue-200 pl-4 py-2">
          "C3H built our dream home with absolute precision and professionalism. Every step of the process was seamless and enjoyable." <br />
          <span className="text-gray-500">— C3H Homeowner, Denver</span>
        </blockquote>
      </section>
    </main>
  );
}
