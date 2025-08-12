import Image from "next/image";
import Head from "next/head";

export default function AboutPage() {
  // SEO structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "C3H Construction",
    "url": "https://c3hconstruction.com",
    "description": "Three generations of building excellence in Denver and Colorado. Founded in 1991 by Lance Nading, specializing in custom homes, commercial, and multi-family construction.",
    "foundingDate": "1991",
    "founder": {
      "@type": "Person",
      "name": "Lance Nading",
      "jobTitle": "Founder & Third-Generation Builder",
      "description": "Denver native and licensed general contractor leading C3H Construction since 1991"
    },
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Colorado",
      "addressCountry": "US"
    },
    "serviceArea": ["Denver", "Boulder", "Colorado"],
    "numberOfEmployees": "25+",
    "award": "Zero construction litigation and OSHA violations in 30+ years",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Home Construction",
            "description": "Luxury custom homes throughout Colorado"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Construction",
            "description": "Office buildings, retail spaces, and mixed-use developments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-Family Construction",
            "description": "Apartment buildings and residential developments"
          }
        }
      ]
    }
  };

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lance Nading",
    "jobTitle": "Founder & Third-Generation Builder",
    "description": "Denver native and licensed general contractor who has led C3H Construction in building exceptional commercial, multi-family, and custom homes across Colorado since 1991",
    "worksFor": {
      "@type": "Organization",
      "name": "C3H Construction"
    },
    "birthPlace": "Denver, Colorado",
    "hasOccupation": {
      "@type": "Occupation",
      "name": "General Contractor",
      "occupationLocation": {
        "@type": "Place",
        "name": "Colorado"
      }
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
        "name": "About",
        "item": "https://c3hconstruction.com/about"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>About C3H Construction | Lance Nading | Three Generations of Building Excellence Denver Colorado</title>
        <meta name="description" content="Meet Lance Nading, founder of C3H Construction. Three generations of building excellence in Denver & Colorado since 1991. Zero litigation, master craftsmanship, custom homes." />
        <meta name="keywords" content="Lance Nading C3H Construction, Denver general contractor, Colorado home builder, three generation builder, construction company history, custom home builder Denver" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://c3hconstruction.com/about" />
        
        <meta property="og:title" content="About C3H Construction | Lance Nading | Building Excellence Since 1991 Denver Colorado" />
        <meta property="og:description" content="Meet Lance Nading, founder of C3H Construction. Three generations of building excellence in Denver & Colorado since 1991. Zero litigation, master craftsmanship." />
        <meta property="og:image" content="https://c3hconstruction.com/images/about/stud.jpg" />
        <meta property="og:url" content="https://c3hconstruction.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="C3H Construction" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About C3H Construction | Lance Nading | Building Excellence Since 1991 Denver Colorado" />
        <meta name="twitter:description" content="Meet Lance Nading, founder of C3H Construction. Three generations of building excellence in Denver & Colorado since 1991." />
        <meta name="twitter:image" content="https://c3hconstruction.com/images/about/stud.jpg" />
        
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Denver, Colorado" />
        <meta name="geo.position" content="39.7392;-104.9903" />
        <meta name="ICBM" content="39.7392, -104.9903" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <main className="bg-white text-black min-h-screen">
        <section className="bg-black text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">About C3H Construction</h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Three generations of building excellence, driven by integrity, craftsmanship, and an unwavering commitment to our clients.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about/stud.jpg"
                    alt="Lance Nading, Founder of C3H Construction - Denver general contractor and third-generation builder"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-lg opacity-10 -z-10"></div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">Lance Nading</h2>
                  <p className="text-xl text-blue-600 font-semibold mb-6">Founder & Third-Generation Builder</p>
                  <div className="w-16 h-1 bg-blue-600 mb-8"></div>
                </div>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Lance is a Denver native and licensed general contractor who has led C3H in building exceptional commercial, multi-family, and custom homes across Colorado since 1991.
                  </p>
                  <p>
                    Renowned for integrity and meticulous craftsmanship, C3H—under Lance's leadership—has never faced adverse construction litigation or OSHA violations in its history. Every client receives the company's full commitment to quality, value, and lasting partnerships.
                  </p>
                  <p>
                    Guided by decades of hands-on experience, C3H sets the standard for Colorado's luxury building market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Foundation</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built on three generations of construction expertise, C3H represents the pinnacle of Colorado craftsmanship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Integrity First</h4>
                <p className="text-gray-600 leading-relaxed">
                  Zero construction litigation and OSHA violations in over three decades—our commitment to doing things right.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Master Craftsmanship</h4>
                <p className="text-gray-600 leading-relaxed">
                  Three generations of building knowledge, refined through decades of creating Colorado's finest properties.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Client Partnership</h4>
                <p className="text-gray-600 leading-relaxed">
                  Building lasting relationships through transparent communication and unwavering commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h3>
              <p className="text-xl text-gray-600">
                Over three decades of building excellence in Colorado.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1991</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">C3H Construction Founded</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Lance Nading establishes C3H Construction with a vision to bring generational building expertise to Colorado's growing luxury market.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2000s</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">Expanding Horizons</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    C3H grows to serve Denver's most prestigious neighborhoods, establishing a reputation for uncompromising quality and client satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Today</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">Leading Colorado Construction</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    With over 150 successful projects and zero litigation, C3H continues to set the standard for luxury construction throughout Colorado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold mb-6">Ready to Build with C3H?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the difference that three generations of building expertise can make for your next project.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-black px-10 py-5 rounded-md font-semibold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <span className="ml-3 text-xl">→</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}