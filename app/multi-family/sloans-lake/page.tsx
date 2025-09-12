'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const SLOANS_LAKE_SLIDES = [
  { type: 'video', src: '/images/multi-family/sloans-lake/1.mp4', poster: '/images/projects/sloans-lake/Home1.jpeg' }, // video slide
  { type: 'image', src: '/images/multi-family/sloans-lake/2.jpg' },
  { type: 'image', src: '/images/multi-family/sloans-lake/3.jpg' },
  { type: 'image', src: '/images/multi-family/sloans-lake/4.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/5.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/6.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/7.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/8.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/9.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/10.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/11.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/12.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/13.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/14.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/15.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/16.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/17.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/18.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/19.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/20.webp' },
  { type: 'image', src: '/images/multi-family/sloans-lake/21.webp' }
];

const DESCRIPTION = `
A premier multi-family project on Denver's Sloans Lake, this development blends lakeside views, contemporary living spaces, and high-end amenities. The result: a modern retreat at the heart of one of the city's most desirable neighborhoods.

This comprehensive gallery showcases the full scope of this luxury development, from stunning exterior architecture to meticulously designed interior spaces, outdoor amenities, and the beautiful lakeside setting that makes this project truly exceptional.
`;

export default function SloansLake() {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Auto-advance every 6s for images (longer due to more images), or at video end for video
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

    // Image: auto-advance after 6s
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLOANS_LAKE_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [current]);

  // Keyboard navigation for slideshow
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxOpen) return; // Don't interfere with lightbox navigation
      if (e.key === 'ArrowRight') setCurrent(prev => (prev + 1) % SLOANS_LAKE_SLIDES.length);
      if (e.key === 'ArrowLeft') setCurrent(prev => (prev - 1 + SLOANS_LAKE_SLIDES.length) % SLOANS_LAKE_SLIDES.length);
    },
    [lightboxOpen]
  );
  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Lightbox functionality
  const openLightbox = (image: string, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage('');
    document.body.style.overflow = '';
  };

  const navigateLightbox = useCallback((direction: 'next' | 'prev') => {
    // Only navigate through image slides, skip video
    const imageSlides = SLOANS_LAKE_SLIDES.filter(slide => slide.type === 'image');
    if (direction === 'next') {
      const nextIndex = (lightboxIndex + 1) % imageSlides.length;
      setLightboxIndex(nextIndex);
      setLightboxImage(imageSlides[nextIndex].src);
    } else {
      const prevIndex = (lightboxIndex - 1 + imageSlides.length) % imageSlides.length;
      setLightboxIndex(prevIndex);
      setLightboxImage(imageSlides[prevIndex].src);
    }
  }, [lightboxIndex]);

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleLightboxKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleLightboxKey);
    return () => window.removeEventListener('keydown', handleLightboxKey);
  }, [lightboxOpen, navigateLightbox]);

  // Get only image slides for gallery grid
  const imageSlides = SLOANS_LAKE_SLIDES.filter(slide => slide.type === 'image');

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Hero Slideshow */}
      <section className="w-full h-[60vh] sm:h-[80vh] relative flex items-center justify-center overflow-hidden">
        {SLOANS_LAKE_SLIDES.map((slide, idx) => {
          if (slide.type === 'image') {
            return (
              <Image
                key={slide.src}
                src={slide.src}
                alt={`Sloans Lake Multi-Family development image ${idx + 1}`}
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
        {/* Slide dots - show only first 10 for cleaner look */}
        <div className="z-10 absolute bottom-6 left-0 w-full flex justify-center gap-1">
          {SLOANS_LAKE_SLIDES.slice(0, 10).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 w-6 rounded-full transition-all duration-300 ${idx === current ? "bg-white/90" : "bg-white/40"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
          {SLOANS_LAKE_SLIDES.length > 10 && (
            <div className="flex items-center ml-2">
              <span className="text-white text-xs">
                {current + 1} / {SLOANS_LAKE_SLIDES.length}
              </span>
            </div>
          )}
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
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black">About This Project</h2>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-8">
          {DESCRIPTION}
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-black mb-2">7</div>
            <div className="text-gray-600">Total Units</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-black mb-2">Lakeside</div>
            <div className="text-gray-600">Prime Location</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-black mb-2">Luxury</div>
            <div className="text-gray-600">Multi-Family Living</div>
          </div>
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-black">Project Gallery</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click any image to view it in full size and browse through the complete collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {imageSlides.map((slide, index) => (
              <div
                key={slide.src}
                className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(slide.src, index)}
              >
                <Image
                  src={slide.src}
                  alt={`Sloans Lake Multi-Family development detail ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 text-black p-2 rounded font-semibold text-sm">
                    View Larger
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-[110] text-white hover:text-gray-300 p-2"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] text-white hover:text-gray-300 p-2"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] text-white hover:text-gray-300 p-2"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={lightboxImage}
              alt="Sloans Lake Multi-Family development detail"
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full"
              priority
            />
          </div>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {imageSlides.length}
          </div>
        </div>
      )}
    </main>
  );
}