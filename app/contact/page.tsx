import Head from "next/head";

export default function Contact() {
  // SEO structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "C3H Construction",
    "url": "https://c3hconstruction.com",
    "description": "Leading construction company in Denver and Colorado specializing in custom homes, commercial, and multi-family projects. Contact us for your next building project.",
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
      "latitude": "39.7882",
      "longitude": "-105.0378"
    },
    "telephone": "+13033598337",
    "email": "lance.nading@c3hdenver.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+13033598337",
        "contactType": "customer service",
        "areaServed": "Colorado",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "lance.nading@c3hdenver.com",
        "contactType": "customer service",
        "areaServed": "Colorado"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "39.7392",
        "longitude": "-104.9903"
      },
      "geoRadius": "80467"
    },
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
        "name": "Contact",
        "item": "https://c3hconstruction.com/contact"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Contact C3H Construction Denver Colorado | Get Quote | Lance Nading | (303) 359-8337</title>
        <meta name="description" content="Contact C3H Construction in Denver, Colorado. Call (303) 359-8337 or email lance.nading@c3hdenver.com for custom homes, commercial & multi-family projects. Get your quote today." />
        <meta name="keywords" content="contact C3H Construction Denver, Lance Nading phone number, Denver construction company contact, Colorado home builder contact, get construction quote Denver" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://c3hconstruction.com/contact" />
        
        <meta property="og:title" content="Contact C3H Construction Denver | Get Quote | Call (303) 359-8337" />
        <meta property="og:description" content="Contact C3H Construction in Denver, Colorado for your custom home, commercial, or multi-family project. 35+ years of building excellence." />
        <meta property="og:url" content="https://c3hconstruction.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="C3H Construction" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact C3H Construction Denver | Get Quote | Call (303) 359-8337" />
        <meta name="twitter:description" content="Contact C3H Construction in Denver, Colorado for your custom home, commercial, or multi-family project." />
        
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Denver, Colorado" />
        <meta name="geo.position" content="39.7882;-105.0378" />
        <meta name="ICBM" content="39.7882, -105.0378" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <main className="min-h-screen bg-white">
        <section className="bg-black text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Let's Build Together</h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Ready to start your next project? Our team is here to bring your vision to life with over 35 years of construction excellence.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Whether you're planning a custom home, commercial development, or multi-family project, we'd love to discuss how we can help make it exceptional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Call Us</h3>
                <a
                  href="tel:3033598337"
                  className="text-small text-blue-600 hover:text-blue-800 transition-colors duration-300 font-semibold block"
                  aria-label="Call C3H Construction at (303) 359-8337"
                >
                  (303) 359-8337
                </a>
                <p className="text-gray-600 mt-3">Ready to discuss your project? Give us a call.</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
                <a
                  href="mailto:lance.nading@c3hdenver.com"
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-300 font-semibold block"
                  aria-label="Email Lance Nading at C3H Construction"
                >
                  lance.nading@c3hdenver.com
                </a>
                <p className="text-gray-600 mt-3">Send us your project details and questions.</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Office</h3>
                <address className="not-italic text-lg text-blue-600 leading-relaxed">
                  2246 IRVING ST, DENVER, CO 80211
                </address>
                <p className="text-gray-600 mt-3">Contact us to schedule a meeting.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}