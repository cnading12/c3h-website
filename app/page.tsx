'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const HERO_IMAGES = [
  { src: '/images/hero/Custom-home.jpg', alt: 'Luxury Custom Home in Denver' },
  { src: '/images/hero/Commercial.jpg', alt: 'High-End Commercial Development Project' },
  { src: '/images/custom-homes/hero/15.JPG', alt: 'Modern Multi-Family Housing Denver' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    if (e.key === 'ArrowLeft') setCurrent((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <>
      <Head>
        <title>C3H Denver | Luxury Home Builders & Commercial Construction</title>
        <meta name="description" content="C3H is a premier builder in Denver offering luxury custom homes, commercial developments, and multi-family residences. Over 35 years of experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="C3H Denver | Luxury Home Builders & Commercial Construction" />
        <meta property="og:description" content="Premier Denver construction company specializing in luxury custom homes, commercial developments, and multi-family housing. 35+ years of excellence." />
        <meta property="og:image" content="/images/hero/Custom-home.jpg" />
        <meta property="og:url" content="https://c3hdenver.com" />
        <meta property="og:site_name" content="C3H Construction" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="C3H Denver | Luxury Home Builders & Commercial Construction" />
        <meta name="twitter:description" content="Premier Denver construction company specializing in luxury custom homes, commercial developments, and multi-family housing. 35+ years of excellence." />
        <meta name="twitter:image" content="/images/hero/Custom-home.jpg" />
        
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Denver, Colorado" />
        <meta name="geo.position" content="39.7392;-104.9903" />
        <meta name="ICBM" content="39.7392, -104.9903" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConstructionCompany",
              "name": "C3H Construction",
              "description": "Premier Denver construction company specializing in luxury custom homes, commercial developments, and multi-family housing",
              "url": "https://c3hdenver.com",
              "logo": "https://c3hdenver.com/images/logo/c3h-white.svg",
              "image": "https://c3hdenver.com/images/hero/Custom-home.jpg",
              "telephone": "(303) 359-8337",
              "email": "lance.nading@c3hdenver.com",
              "foundingDate": "1991",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2246 Irving St",
                "addressLocality": "Denver",
                "addressRegion": "CO",
                "postalCode": "80211",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "39.7392",
                "longitude": "-104.9903"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Denver",
                  "addressRegion": "CO"
                },
                {
                  "@type": "City", 
                  "name": "Cherry Hills Village",
                  "addressRegion": "CO"
                },
                {
                  "@type": "City",
                  "name": "Greenwood Village", 
                  "addressRegion": "CO"
                }
              ],
              "serviceType": [
                "Custom Home Construction",
                "Commercial Construction", 
                "Multi-Family Housing",
                "Luxury Home Building",
                "General Contracting"
              ],
              "founder": {
                "@type": "Person",
                "name": "Lance Nading"
              },
              "employee": {
                "@type": "Person", 
                "name": "Lance Nading",
                "jobTitle": "Founder & General Contractor"
              },
              "sameAs": [
                "https://www.instagram.com/c3hconstruction",
                "https://www.facebook.com/c3hconstruction"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "priceRange": "$$",
              "paymentAccepted": "Cash, Check, Financing",
              "currenciesAccepted": "USD"
            })
          }}
        />
      </Head>
      <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
        {/* Hero Section */}
        <section className="w-full h-screen relative flex items-center justify-center overflow-hidden">
          {HERO_IMAGES.map((img, idx) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
              priority={idx === 0}
              sizes="100vw"
            />
          ))}
          
          {/* UPDATED: Much lighter overlay - from black/70-50-30 to black/40-20-10 */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/10 z-10" />
          
          {/* Animated particles background */}
          <div className="absolute inset-0 z-5">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          <div className={`z-20 absolute inset-0 flex flex-col items-center justify-center transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center max-w-5xl px-6">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6 text-white drop-shadow-2xl leading-tight">
                Denver's Premier
                <span className="block text-white">
                  Luxury Builder
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white mb-8 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                Crafting extraordinary homes and developments with 35+ years of unmatched excellence
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link 
                  href="/custom-homes" 
                  className="group bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30"
                >
                  Explore Our Work
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
                <Link 
                  href="/contact" 
                  className="group border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </Link>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              {HERO_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 w-8 rounded-full transition-all duration-500 transform ${idx === current ? 'bg-white scale-110 shadow-lg' : 'bg-white/40 hover:bg-white/60'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setCurrent(prev => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Previous slide"
          >
            <span className="text-xl">←</span>
          </button>
          <button
            onClick={() => setCurrent(prev => (prev + 1) % HERO_IMAGES.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Next slide"
          >
            <span className="text-xl">→</span>
          </button>
        </section>

        {/* About Section - Floating Card */}
        <section className="relative -mt-32 z-30 px-6">
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg text-black rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/20">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                About C3H
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                C3H Denver is a full-service construction and development firm specializing in high-end residential and commercial projects. Since 1991, we've brought top-tier craftsmanship and visionary design to Denver's most prestigious neighborhoods—Cherry Hills Village, Hilltop, Washington Park, and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-3xl shadow-2xl p-10 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
              <div className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                35+
              </div>
              <div className="uppercase tracking-widest text-gray-300 font-semibold">Years of Excellence</div>
            </div>
            <div className="group bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl p-10 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
              <div className="text-6xl font-black mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                100+
              </div>
              <div className="uppercase tracking-widest text-gray-700 font-semibold">Luxury Projects</div>
            </div>
            <div className="group bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-3xl shadow-2xl p-10 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
              <div className="text-6xl font-black mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent group-hover:from-green-300 group-hover:to-blue-300 transition-all duration-300">
                99%
              </div>
              <div className="uppercase tracking-widest text-gray-300 font-semibold">Client Satisfaction</div>
            </div>
          </div>
        </section>



        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h3 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/custom-homes" className="group relative block rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] transform hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <Image
                src="/images/custom-homes/hero/1.jpg"
                alt="Denver Custom Luxury Homes"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <span className="text-3xl sm:text-4xl font-bold text-white mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  Custom Homes
                </span>
                <p className="text-gray-200 text-sm mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  Bespoke luxury residences tailored to your vision
                </p>
                <span className="inline-flex items-center bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-md font-semibold group-hover:bg-black/80 transition-all duration-300">
                  Explore <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>

            <Link href="/commercial" className="group relative block rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] transform hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <Image
                src="/images/commercial/sloans-lake/1.jpg"
                alt="Denver Commercial Construction"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <span className="text-3xl sm:text-4xl font-bold text-white mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  Commercial
                </span>
                <p className="text-gray-200 text-sm mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  Innovative commercial developments and office spaces
                </p>
                <span className="inline-flex items-center bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-md font-semibold group-hover:bg-black/80 transition-all duration-300">
                  Explore <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>

            <Link href="/multi-family" className="group relative block rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] transform hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <Image
                src="/images/hero/Multi-family.JPG"
                alt="Denver Multi-Family Housing"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <span className="text-3xl sm:text-4xl font-bold text-white mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  Multi-Family
                </span>
                <p className="text-gray-200 text-sm mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  Modern housing solutions for growing communities
                </p>
                <span className="inline-flex items-center bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-md font-semibold group-hover:bg-black/80 transition-all duration-300">
                  Explore <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          </div>
        </section>


      </div>
    </>
  );
}