'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// --- HERO SLIDES: Add/remove image/video slides here ---
type HeroSlide =
  | { type: 'image'; src: string }
  | { type: 'video'; src: string; poster: string };

const HERO_SLIDES: HeroSlide[] = [
  { type: 'video', src: '/images/multi-family/sloans-lake/1.mp4', poster: '/images/projects/sloans-lake/Home1.jpeg' },
  { type: 'image', src: '/images/multi-family/sloans-lake/2.jpg' },
  { type: 'image', src: '/images/multi-family/south-pearl/11.JPG' },
  { type: 'image', src: '/images/multi-family/south-pearl/5.JPEG' },
];

export default function MultiFamily() {
  const [heroIndex, setHeroIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.onended = null;
    if (HERO_SLIDES[heroIndex].type === 'video') {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        videoRef.current.onended = () => {
          setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
        };
      }
      return;
    }
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroIndex]);

  const handleHeroKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') setHeroIndex(prev => (prev + 1) % HERO_SLIDES.length);
    if (e.key === 'ArrowLeft') setHeroIndex(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
  window.addEventListener('keydown', handleHeroKey);
  return () => window.removeEventListener('keydown', handleHeroKey);
}, [handleHeroKey]);


  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <Head>
        <title>Denver Multi-Family Construction | C3H Builders</title>
        <meta name="description" content="Explore C3H's portfolio of multi-family housing developments in Denver. Built with luxury, community, and quality in mind." />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* HERO SLIDESHOW */}
      <section className="w-full h-[75vh] sm:h-[95vh] relative flex items-center justify-center overflow-hidden shadow-lg">
        {HERO_SLIDES.map((slide, idx) =>
          slide.type === 'video' ? (
            <video
              key={slide.src}
              ref={idx === heroIndex ? videoRef : undefined}
              src={slide.src}
              poster={slide.poster}
              autoPlay={idx === heroIndex}
              muted
              playsInline
              loop={false}
              className={`object-cover absolute inset-0 w-full h-full transition-opacity duration-1000 ${idx === heroIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
            />
          ) : (
            <Image
              key={slide.src}
              src={slide.src}
              alt={`C3H Multi-Family Project ${idx + 1}`}
              fill
              className={`object-cover absolute inset-0 transition-opacity duration-1000 ${idx === heroIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
              priority={idx === 0}
              sizes="100vw"
            />
          )
        )}

        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="z-20 absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-white drop-shadow-xl text-center">
            C3H Multi-Family
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto text-center mt-2 drop-shadow">
            Modern living for communities and families across Colorado. Explore our portfolio of luxury multi-family developments.
          </p>
          {/* Slide dots */}
          <div className="flex gap-2 mt-6">
            {HERO_SLIDES.map((_, idx) => (
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
          onClick={() => setHeroIndex(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/60 hover:bg-white/90 text-black p-2 rounded-full shadow transition"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          onClick={() => setHeroIndex(prev => (prev + 1) % HERO_SLIDES.length)}
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

      {/* FEATURED PROJECTS */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Sloans Lake */}
          <Link
            href="/multi-family/sloans-lake"
            className="group relative aspect-square block rounded-lg overflow-hidden shadow-lg"
          >
            <video
              src="/images/multi-family/sloans-lake/1.mp4"
              poster="/images/multi-family/sloans-lake/2.jpg"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30 transition" />
            <span className="absolute inset-0 flex flex-col items-center justify-center text-white text-2xl sm:text-3xl font-semibold drop-shadow-lg tracking-wide z-10 pointer-events-none">
              Sloans Lake Multi-Family
              <span className="ml-2 text-blue-200 group-hover:translate-x-2 transition-transform text-3xl">&#8594;</span>
            </span>
          </Link>
          {/* South Pearl */}
          <Link
            href="/multi-family/south-pearl"
            className="group relative aspect-square block rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/hero/Multi-family.JPG"
              alt="South Pearl Multi-Family Project"
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <span className="absolute inset-0 flex flex-col items-center justify-center text-white text-2xl sm:text-3xl font-semibold drop-shadow-lg tracking-wide z-10 pointer-events-none">
              South Pearl Multi-Family
              <span className="ml-2 text-blue-200 group-hover:translate-x-2 transition-transform text-3xl">&#8594;</span>
            </span>
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Why Choose C3H for Multi-Family?</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          With decades of experience, C3H Construction specializes in high-quality multi-family projects that elevate neighborhoods and exceed expectations. Our commitment to innovation, efficiency, and craftsmanship delivers homes that families and investors love.
        </p>
        <blockquote className="italic text-gray-600 max-w-2xl mx-auto border-l-4 border-blue-200 pl-4 py-2">
           &quot;We were blown away by the attention to detail and the finished result. Our new building is a cornerstone of the community.&quot; <br />
          <span className="text-gray-500">— Multi-Family Client, Denver</span>
        </blockquote>
      </section>
    </main>
  );
}
