'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Hero slideshow images for commercial projects (not just the featured ones)
const HERO_IMAGES = [
  "/images/hero/commercial.jpg",
  "/images/commercial/sloans-lake/2.jpg",
  "/images/commercial/sloans-lake/3.jpg",
  "/images/commercial/sloans-lake/4.jpg",
  "/images/commercial/sloans-lake/5.jpg"

  // ...add as many as you have!
];

const PROJECTS = [
  {
    name: "Sloans Lake CoWork & Event Space",
    slug: "merritt-cowork",
    images: [
      "/images/developments/sloans-lake/1.jpg",
      "/images/developments/sloans-lake/2.jpg",
      "/images/developments/sloans-lake/3.jpg"
    ],
  },
  {
    name: "Ft. Collins Mixed Use Space",
    slug: "mixed-use",
    images: [
      "/images/developments/ft-collins/1.jpg",
      "/images/developments/ft-collins/2.jpg",
      "/images/developments/ft-collins/3.jpg"
    ],
  },
];

export default function Commercial() {
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
            alt={`Commercial project ${idx + 1}`}
            fill
            className={`object-cover absolute inset-0 transition-opacity duration-1000 ${idx === heroIndex ? "opacity-100 z-0" : "opacity-0 z-0"}`}
            priority={idx === 0}
          />
        ))}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="z-20 absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-white drop-shadow-xl text-center">
            C3H Commercial
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto text-center mt-2 drop-shadow">
            Delivering excellence in commercial development: office, retail, and mixed-use spaces for Colorado’s business leaders.
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
              href={`/commercial/${project.slug}`}
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
        <h3 className="text-2xl font-bold mb-4">Why Choose C3H Commercial?</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          C3H Construction brings a wealth of expertise to Colorado’s commercial sector. We are trusted by clients for timely delivery, strict quality standards, and innovative solutions for every commercial need.
        </p>
        <blockquote className="italic text-gray-600 max-w-2xl mx-auto border-l-4 border-blue-200 pl-4 py-2">
          &quot;C3H transformed our business vision into a thriving reality. Their professionalism, communication, and results are unmatched.&quot; <br />
          <span className="text-gray-500">— Commercial Client, Colorado</span>
        </blockquote>
      </section>
    </main>
  );
}
