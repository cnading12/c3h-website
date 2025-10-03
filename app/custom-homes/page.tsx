'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// Hero slideshow images (add as many as you want, not the featured projects)
const HERO_IMAGES = [
  "/images/custom-homes/hero/1.jpg",
  "/images/custom-homes/hero/2.JPEG",
  "/images/custom-homes/hero/3.JPEG",
  "/images/custom-homes/hero/4.jpg",
  "/images/custom-homes/hero/5.jpg",
  "/images/custom-homes/hero/6.JPG",
  "/images/custom-homes/hero/12.jpg",
  "/images/custom-homes/hero/8.jpg",
  "/images/custom-homes/hero/9.jpg",
  "/images/custom-homes/hero/10.jpg",
  "/images/custom-homes/hero/11.jpg",
  "/images/custom-homes/hero/13.jpg",
  "/images/custom-homes/hero/14.jpg",
  "/images/custom-homes/hero/15.JPG",
  "/images/custom-homes/hero/16.jpg"
];

const PROJECTS = [
  {
    name: "Hilltop Custom Home",
    slug: "hilltop",
    description: "A stunning contemporary masterpiece in Denver's prestigious Hilltop neighborhood",
    images: [
      "/images/custom-homes/hilltop/2.webp",
      "/images/custom-homes/hilltop/1.webp",
      "/images/custom-homes/hilltop/3.webp",
      "/images/custom-homes/hilltop/4.webp",
      "/images/custom-homes/hilltop/5.webp",
      "/images/custom-homes/hilltop/6.webp",
      "/images/custom-homes/hilltop/7.webp",
      "/images/custom-homes/hilltop/8.webp",
      "/images/custom-homes/hilltop/9.webp"
    ],
  },
  {
    name: "Boulder Custom Home",
    slug: "boulder",
    description: "Modern luxury living with breathtaking mountain views and eco-conscious design",
    images: [
      "/images/custom-homes/boulder/1.jpg",
      "/images/custom-homes/boulder/2.JPG",
      "/images/custom-homes/boulder/3.jpg",
      "/images/custom-homes/boulder/4.JPG",
      "/images/custom-homes/boulder/5.jpg",
      "/images/custom-homes/boulder/6.JPG",
      "/images/custom-homes/boulder/7.jpg"
    ],
  },
];

export default function CustomHomes() {
  // Hero slideshow
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
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

  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "C3H Construction",
    "url": "https://c3hconstruction.com",
    "description": "Award-winning custom home builder in Denver and Colorado with over 35 years of experience creating luxury homes",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Colorado",
      "addressCountry": "US"
    },
    "serviceArea": ["Denver", "Boulder", "Colorado"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Custom Home Construction Services",
      "itemListElement": PROJECTS.map(project => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": project.name,
          "description": project.description
        }
      }))
    }
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
        "name": "Custom Homes",
        "item": "https://c3hconstruction.com/custom-homes"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Custom Homes Denver Colorado | Award-Winning Home Builder | C3H Construction</title>
        <meta name="description" content="C3H Construction builds luxury custom homes in Denver, Boulder & Colorado. 35+ years experience. Award-winning designs, premium craftsmanship. Start your dream home today." />
        <meta name="keywords" content="custom homes Denver, custom home builder Colorado, luxury homes Boulder, home construction Denver, custom house builder, Colorado home builder" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://c3hconstruction.com/custom-homes" />
        
        <meta property="og:title" content="Custom Homes Denver | Luxury Home Builder Colorado | C3H Construction" />
        <meta property="og:description" content="Award-winning custom home builder in Denver & Colorado. 35+ years of experience creating luxury homes with exceptional craftsmanship." />
        <meta property="og:image" content="https://c3hconstruction.com/images/custom-homes/hero/1.jpg" />
        <meta property="og:url" content="https://c3hconstruction.com/custom-homes" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="C3H Construction" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Homes Denver | Luxury Home Builder Colorado | C3H Construction" />
        <meta name="twitter:description" content="Award-winning custom home builder in Denver & Colorado. 35+ years of experience creating luxury homes." />
        <meta name="twitter:image" content="https://c3hconstruction.com/images/custom-homes/hero/1.jpg" />
        
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
        <section className="w-full h-[75vh] sm:h-[95vh] relative flex items-center justify-center overflow-hidden">
          {HERO_IMAGES.map((img, idx) => (
            <Image
              key={img}
              src={img}
              alt={`Custom home construction by C3H in Denver Colorado - showcase ${idx + 1}`}
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
                Custom Homes
              </h1>
              <p className="text-lg sm:text-xl text-gray-100 font-medium max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
                Award-winning custom homes tailored for Colorado's most discerning clients. Discover the artistry, attention to detail, and legacy of C3H Construction.
              </p>
              
              <Link 
                href="#featured-projects" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center bg-white text-black px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Our Work
              </Link>
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

        <section id="featured-projects" className="bg-zinc-950 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Featured Projects</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore our portfolio of extraordinary custom homes, each uniquely designed to reflect our clients' vision and lifestyle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {PROJECTS.map((project, idx) => (
                <Link
                  href={`/custom-homes/${project.slug}`}
                  key={project.slug}
                  className="group relative block rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-zinc-900 border border-zinc-800"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.images[indexes[idx]]}
                      alt={`${project.name} - Custom home built by C3H Construction`}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2 drop-shadow-lg">
                        {project.name}
                      </h3>
                      <p className="text-gray-100 text-sm mb-3 leading-relaxed drop-shadow">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-6 text-white">Why Choose C3H Custom Homes?</h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                With over 35 years of experience, C3H Construction specializes in bespoke custom homes that exceed expectations. From initial consultation to handing over the keys, our team ensures every detail reflects your vision and our legacy of quality.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-sm p-8 sm:p-12 border border-zinc-800 max-w-4xl mx-auto shadow-2xl">
              <div className="text-center">
                <blockquote className="text-2xl italic text-gray-100 mb-6 leading-relaxed">
                  "C3H built our dream home with absolute precision and professionalism. Every step of the process was seamless and enjoyable."
                </blockquote>
                <cite className="text-lg text-gray-400 not-italic">
                  — C3H Homeowner, Denver
                </cite>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-white text-black px-10 py-5 rounded-sm font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Start Your Custom Home Journey
                <span className="ml-3 text-xl">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}