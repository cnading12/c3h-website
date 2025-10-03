'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// Gallery sections with their respective images
const GALLERY_SECTIONS = {
  bathrooms: {
    title: "Bathrooms",
    description: "Luxurious spa-like retreats featuring premium materials, custom vanities, and sophisticated design",
    images: [
      "/images/gallery/bathrooms/3.webp",
      "/images/gallery/bathrooms/4.webp", 
      "/images/gallery/bathrooms/5.webp",
      "/images/gallery/bathrooms/6.webp",
      "/images/gallery/bathrooms/7.webp",
      "/images/gallery/bathrooms/8.webp",
      "/images/gallery/bathrooms/9.webp",
      "/images/gallery/bathrooms/10.webp",
      "/images/gallery/bathrooms/11.webp",
      "/images/gallery/bathrooms/12.webp"
    ]
  },
  kitchens: {
    title: "Kitchens", 
    description: "Gourmet culinary spaces with custom cabinetry, premium new appliances, and stunning countertops",
    images: [
      "/images/gallery/kitchens/1.webp",
      "/images/gallery/kitchens/2.webp",
      "/images/gallery/kitchens/3.webp",
      "/images/gallery/kitchens/4.webp",
      "/images/gallery/kitchens/5.webp",
      "/images/gallery/kitchens/6.webp",
      "/images/gallery/kitchens/7.webp",
      "/images/gallery/kitchens/8.webp",
      "/images/gallery/kitchens/9.webp",
      "/images/gallery/kitchens/10.webp"
    ]
  },
  features: {
    title: "Unique Features",
    description: "Distinctive architectural elements and custom details that make each home extraordinary", 
    images: [
      "/images/gallery/other-stuff/1.webp",
      "/images/gallery/other-stuff/2.webp",
      "/images/gallery/other-stuff/3.webp",
      "/images/gallery/other-stuff/4.webp",
      "/images/gallery/other-stuff/5.webp",
      "/images/gallery/other-stuff/6.webp",
      "/images/gallery/other-stuff/7.webp",
      "/images/gallery/other-stuff/8.webp"
    ]
  }
};

// Hero slideshow images from all sections
const HERO_IMAGES = [
  "/images/gallery/bathrooms/9.webp",
  "/images/gallery/kitchens/1.webp", 
  "/images/gallery/other-stuff/8.webp",
  "/images/gallery/bathrooms/11.webp",
  "/images/gallery/kitchens/3.webp",
  "/images/gallery/other-stuff/3.webp"
];

export default function Gallery() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('bathrooms');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Hero slideshow
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
    const currentImages = GALLERY_SECTIONS[activeSection as keyof typeof GALLERY_SECTIONS].images;
    if (direction === 'next') {
      const nextIndex = (lightboxIndex + 1) % currentImages.length;
      setLightboxIndex(nextIndex);
      setLightboxImage(currentImages[nextIndex]);
    } else {
      const prevIndex = (lightboxIndex - 1 + currentImages.length) % currentImages.length;
      setLightboxIndex(prevIndex);
      setLightboxImage(currentImages[prevIndex]);
    }
  }, [lightboxIndex, activeSection]);

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

  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "C3H Construction Gallery",
    "description": "Showcase of luxury custom homes, bathrooms, kitchens, and unique features by C3H Construction in Denver, Colorado",
    "url": "https://c3hconstruction.com/gallery",
    "publisher": {
      "@type": "Organization",
      "name": "C3H Construction"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Luxury Bathrooms"
      },
      {
        "@type": "Thing", 
        "name": "Custom Kitchens"
      },
      {
        "@type": "Thing",
        "name": "Architectural Features"
      }
    ]
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://c3hconstruction.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gallery",
        "item": "https://c3hconstruction.com/gallery"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Gallery | C3H Construction | Luxury Home Design Portfolio Denver Colorado</title>
        <meta name="description" content="Explore C3H Construction's gallery of luxury bathrooms, gourmet kitchens, and unique architectural features. Award-winning custom home designs in Denver & Colorado." />
        <meta name="keywords" content="C3H Construction gallery, luxury bathroom designs Denver, custom kitchen portfolio Colorado, architectural features, home design gallery, luxury home interiors Denver" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://c3hconstruction.com/gallery" />
        
        <meta property="og:title" content="Gallery | C3H Construction | Luxury Home Design Portfolio Denver Colorado" />
        <meta property="og:description" content="Explore C3H Construction's gallery of luxury bathrooms, gourmet kitchens, and unique architectural features from our award-winning custom homes." />
        <meta property="og:image" content="https://c3hconstruction.com/images/gallery/bathrooms/3.webp" />
        <meta property="og:url" content="https://c3hconstruction.com/gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="C3H Construction" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | C3H Construction | Luxury Home Design Portfolio Denver Colorado" />
        <meta name="twitter:description" content="Explore C3H Construction's gallery of luxury bathrooms, gourmet kitchens, and unique architectural features." />
        <meta name="twitter:image" content="https://c3hconstruction.com/images/gallery/bathrooms/3.webp" />
        
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Denver, Colorado" />
        <meta name="geo.position" content="39.7392;-104.9903" />
        <meta name="ICBM" content="39.7392, -104.9903" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <main className="min-h-screen bg-black text-white font-sans">
        {/* Hero Section */}
        <section className="w-full h-[75vh] sm:h-[95vh] relative flex items-center justify-center overflow-hidden">
          {HERO_IMAGES.map((img, idx) => (
            <Image
              key={img}
              src={img}
              alt={`C3H Construction luxury home gallery showcase ${idx + 1}`}
              fill
              className={`object-cover absolute inset-0 transition-opacity duration-1000 ${idx === heroIndex ? "opacity-100 z-0" : "opacity-0 z-0"}`}
              priority={idx === 0}
              sizes="100vw"
            />
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/10 z-10" />
          
          <div className="z-20 absolute inset-0 flex flex-col items-center justify-center px-6">
            <div className="text-center max-w-4xl">
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-2xl leading-tight">
                Gallery
              </h1>
              <p className="text-lg sm:text-xl text-gray-100 font-medium max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
                Explore the finest details of our luxury custom homes. From spa-like bathrooms to gourmet kitchens and unique architectural features.
              </p>
              
              <button 
                onClick={() => {
                  document.getElementById('gallery-sections')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center bg-white text-black px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Browse Gallery
              </button>
            </div>

            <div className="flex gap-2 mt-8">
              {HERO_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHeroIndex(idx)}
                  className={`h-2 w-7 rounded-sm transition-all duration-300 ${idx === heroIndex ? "bg-white" : "bg-white/40"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={() => setHeroIndex(prev => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-black p-3 rounded-sm shadow-lg transition-all duration-300"
            aria-label="Previous slide"
          >
            &#8592;
          </button>
          <button
            onClick={() => setHeroIndex(prev => (prev + 1) % HERO_IMAGES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-black p-3 rounded-sm shadow-lg transition-all duration-300"
            aria-label="Next slide"
          >
            &#8594;
          </button>
        </section>

        {/* Gallery Sections */}
        <section id="gallery-sections" className="bg-zinc-950 py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Navigation */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Portfolio</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {Object.entries(GALLERY_SECTIONS).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`px-6 py-3 rounded-sm font-semibold transition-all duration-300 ${
                      activeSection === key
                        ? 'bg-white text-black shadow-lg'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {GALLERY_SECTIONS[activeSection as keyof typeof GALLERY_SECTIONS].description}
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {GALLERY_SECTIONS[activeSection as keyof typeof GALLERY_SECTIONS].images.map((image, index) => (
                <div
                  key={image}
                  className="group relative aspect-square rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(image, index)}
                >
                  <Image
                    src={image}
                    alt={`${GALLERY_SECTIONS[activeSection as keyof typeof GALLERY_SECTIONS].title} design by C3H Construction`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 text-black p-3 rounded-sm font-semibold">
                      View Larger
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-black py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold mb-6 text-white">Ready to Create Your Dream Home?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let C3H Construction bring your vision to life with the same attention to detail and luxury craftsmanship showcased in our gallery.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-black px-10 py-5 rounded-sm font-semibold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <span className="ml-3 text-xl">→</span>
            </a>
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
                alt={`${GALLERY_SECTIONS[activeSection as keyof typeof GALLERY_SECTIONS].title} design by C3H Construction`}
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-full"
                priority
              />
            </div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {lightboxIndex + 1} / {GALLERY_SECTIONS[activeSection as keyof typeof GALLERY_SECTIONS].images.length}
            </div>
          </div>
        )}
      </main>
    </>
  );
}