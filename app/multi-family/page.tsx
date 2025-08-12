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

const PROJECTS = [
  {
    name: "Sloans Lake Multi-Family",
    slug: "sloans-lake",
    description: "Modern multi-family development in one of Denver's most sought-after neighborhoods",
    location: "Denver, Colorado"
  },
  {
    name: "South Pearl Multi-Family",
    slug: "south-pearl",
    description: "Contemporary living spaces designed for the vibrant South Pearl Street corridor",
    location: "Denver, Colorado"
  }
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

  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "C3H Construction",
    "url": "https://c3hconstruction.com",
    "description": "Leading multi-family construction company in Denver and Colorado specializing in apartment buildings, condominiums, and residential developments",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Colorado",
      "addressCountry": "US"
    },
    "serviceArea": ["Denver", "Boulder", "Colorado"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Multi-Family Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Apartment Building Construction",
            "description": "Modern apartment buildings and residential complexes",
            "provider": {
              "@type": "Organization",
              "name": "C3H Construction"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Condominium Development",
            "description": "Luxury condominium projects and mixed-use developments",
            "provider": {
              "@type": "Organization",
              "name": "C3H Construction"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-Family Housing",
            "description": "Complete multi-family residential construction solutions",
            "provider": {
              "@type": "Organization",
              "name": "C3H Construction"
            }
          }
        }
      ]
    }
  };

  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Multi-Family Construction Projects",
    "itemListElement": PROJECTS.map((project, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": project.name,
      "description": project.description,
      "locationCreated": {
        "@type": "Place",
        "name": project.location
      },
      "creator": {
        "@type": "Organization",
        "name": "C3H Construction"
      }
    }))
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
        "name": "Multi-Family",
        "item": "https://c3hconstruction.com/multi-family"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Multi-Family Construction Denver Colorado | Apartment Buildings & Condos | C3H Construction</title>
        <meta name="description" content="C3H Construction builds multi-family housing in Denver & Colorado. Apartment buildings, condominiums, residential developments. 25+ years experience. Quality guaranteed." />
        <meta name="keywords" content="multi family construction Denver, apartment building contractor Colorado, condominium developer Denver, residential construction Colorado, multi family housing Denver, apartment complex builder" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://c3hconstruction.com/multi-family" />
        
        <meta property="og:title" content="Multi-Family Construction Denver | Apartment & Condo Builder Colorado | C3H Construction" />
        <meta property="og:description" content="Leading multi-family construction company in Denver & Colorado. We build apartment buildings, condominiums, and residential developments with 25+ years of experience." />
        <meta property="og:image" content="https://c3hconstruction.com/images/hero/Multi-family.JPG" />
        <meta property="og:url" content="https://c3hconstruction.com/multi-family" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="C3H Construction" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Multi-Family Construction Denver | Apartment & Condo Builder Colorado | C3H Construction" />
        <meta name="twitter:description" content="Leading multi-family construction company in Denver & Colorado. Apartment buildings, condominiums, residential developments." />
        <meta name="twitter:image" content="https://c3hconstruction.com/images/hero/Multi-family.JPG" />
        
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <main className="min-h-screen bg-black text-white font-sans">
        <section className="w-full h-[75vh] sm:h-[95vh] relative flex items-center justify-center overflow-hidden">
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
                alt={`Multi-family construction project by C3H in Denver Colorado - showcase ${idx + 1}`}
                fill
                className={`object-cover absolute inset-0 transition-opacity duration-1000 ${idx === heroIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
                priority={idx === 0}
                sizes="100vw"
              />
            )
          )}

          <div className="absolute inset-0 bg-black/60 z-10" />
          
          <div className="z-20 absolute inset-0 flex flex-col items-center justify-center px-6">
            <div className="text-center max-w-4xl">
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-2xl leading-tight">
              Multi-Family
              </h1>
              <p className="text-lg sm:text-xl text-gray-100 font-medium max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
                Modern living for communities and families across Colorado. Explore our portfolio of luxury multi-family developments.
              </p>
              
              <Link 
                href="#featured-projects" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center bg-white text-black px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Our Projects
              </Link>
            </div>

            <div className="flex gap-2 mt-8">
              {HERO_SLIDES.map((_, idx) => (
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
            onClick={() => setHeroIndex(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-black p-3 rounded-sm shadow-lg transition-all duration-300"
            aria-label="Previous slide"
          >
            &#8592;
          </button>
          <button
            onClick={() => setHeroIndex(prev => (prev + 1) % HERO_SLIDES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-black p-3 rounded-sm shadow-lg transition-all duration-300"
            aria-label="Next slide"
          >
            &#8594;
          </button>
        </section>

        <section id="featured-projects" className="bg-zinc-950 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Featured Projects</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore our portfolio of luxury multi-family developments that create vibrant communities across Colorado.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Link
                href="/multi-family/sloans-lake"
                className="group relative block rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-zinc-900 border border-zinc-800"
              >
                <div className="aspect-[4/3] relative">
                  <video
                    src="/images/multi-family/sloans-lake/1.mp4"
                    poster="/images/multi-family/sloans-lake/2.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover absolute inset-0 w-full h-full transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2 drop-shadow-lg">
                      Sloans Lake Multi-Family
                    </h3>
                    <p className="text-gray-100 text-sm leading-relaxed drop-shadow">
                      Modern multi-family development in one of Denver's most sought-after neighborhoods
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link
                href="/multi-family/south-pearl"
                className="group relative block rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-zinc-900 border border-zinc-800"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/hero/Multi-family.JPG"
                    alt="South Pearl Multi-Family Project - Apartment building construction by C3H Construction"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2 drop-shadow-lg">
                      South Pearl Multi-Family
                    </h3>
                    <p className="text-gray-100 text-sm leading-relaxed drop-shadow">
                      Contemporary living spaces designed for the vibrant South Pearl Street corridor
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-black py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-6 text-white">Why Choose C3H Multi-Family?</h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                With decades of experience, C3H Construction specializes in high-quality multi-family projects that elevate neighborhoods and exceed expectations. Our commitment to innovation, efficiency, and craftsmanship delivers homes that families and investors love.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-zinc-900 rounded-sm border border-zinc-800">
                <div className="text-3xl font-bold text-white mb-2">25+</div>
                <div className="text-gray-300 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-zinc-900 rounded-sm border border-zinc-800">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-300 font-medium">Multi-Family Projects</div>
              </div>
              <div className="text-center p-6 bg-zinc-900 rounded-sm border border-zinc-800">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300 font-medium">Quality Guarantee</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}