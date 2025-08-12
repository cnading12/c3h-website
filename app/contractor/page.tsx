'use client';
import { useState } from 'react';
import { ShieldCheck, FileText, Users, CheckCircle } from 'lucide-react';
import Head from 'next/head';

export default function ContractorPage() {
  const [access, setAccess] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === 'c3h') {
      setAccess(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setInput('');
    }
  };

  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contractor Resources - C3H Construction",
    "description": "Secure contractor portal for C3H Construction partners. Access onboarding forms, agreements, and resources for subcontractors and vendors.",
    "url": "https://c3hconstruction.com/contractor",
    "isPartOf": {
      "@type": "WebSite",
      "name": "C3H Construction",
      "url": "https://c3hconstruction.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "C3H Construction"
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
        "name": "Contractor Portal",
        "item": "https://c3hconstruction.com/contractor"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Contractor Portal | C3H Construction | Subcontractor Resources Denver Colorado</title>
        <meta name="description" content="Secure contractor portal for C3H Construction partners in Denver and Colorado. Access onboarding forms, agreements, and resources for subcontractors and vendors." />
        <meta name="keywords" content="C3H Construction contractors, Denver subcontractors, Colorado construction partners, contractor onboarding, independent contractor agreement" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://c3hconstruction.com/contractor" />
        
        <meta property="og:title" content="Contractor Portal | C3H Construction | Partner Resources Denver Colorado" />
        <meta property="og:description" content="Secure contractor portal for C3H Construction partners. Access onboarding forms and resources for subcontractors in Denver and Colorado." />
        <meta property="og:url" content="https://c3hconstruction.com/contractor" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="C3H Construction" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contractor Portal | C3H Construction | Partner Resources Denver Colorado" />
        <meta name="twitter:description" content="Secure contractor portal for C3H Construction partners and subcontractors." />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-12 h-12 text-blue-400" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white">Contractor Portal</h1>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Welcome to C3H Construction's secure contractor resources. Access onboarding materials, agreements, and essential documentation for our trusted partners.
            </p>
          </div>
        </section>

        {/* Access Control Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            {!access ? (
              <div className="text-center mb-12">
                {/* Benefits Section */}
                <div className="bg-zinc-950 rounded-2xl p-8 mb-12 border border-zinc-800">
                  <h2 className="text-2xl font-bold text-white mb-6">Join the C3H Network</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Premium Projects</h3>
                        <p className="text-gray-400 text-sm">Work on luxury custom homes and commercial developments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Reliable Partnership</h3>
                        <p className="text-gray-400 text-sm">35+ years of trusted relationships with contractors</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Quality Standards</h3>
                        <p className="text-gray-400 text-sm">Work with Colorado's premier construction company</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Professional Growth</h3>
                        <p className="text-gray-400 text-sm">Expand your portfolio with prestigious projects</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Access Form */}
                <form
                  onSubmit={handleSubmit}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-10 rounded-2xl shadow-2xl"
                >
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <ShieldCheck className="w-10 h-10 text-blue-400" />
                    <h2 className="text-2xl font-bold text-white">Secure Access Required</h2>
                  </div>
                  <p className="mb-6 text-gray-300 text-center leading-relaxed">
                    This portal contains protected contractor documents and agreements. Please enter your access credentials to continue.
                  </p>
                  <div className="space-y-4">
                    <input
                      type="password"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter access password"
                      className="w-full border border-gray-600 bg-gray-800 rounded-lg px-4 py-3 text-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none transition-all"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Access Portal
                    </button>
                    {error && (
                      <div className="bg-red-900/30 border border-red-700 rounded-lg p-3 mt-4">
                        <span className="text-red-400 text-sm">{error}</span>
                      </div>
                    )}
                  </div>
                </form>

                {/* Contact Information */}
                <div className="mt-12 p-6 bg-zinc-950 rounded-xl border border-zinc-800">
                  <h3 className="text-lg font-semibold text-white mb-3">Need Access?</h3>
                  <p className="text-gray-400 mb-4">
                    If you're a new contractor partner or need access credentials, please contact our team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:3033598337"
                      className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      <span>(303) 359-8337</span>
                    </a>
                    <a
                      href="mailto:lance.nading@c3hdenver.com"
                      className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      <span>Email Us</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <section className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-10 rounded-2xl shadow-2xl">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <ShieldCheck className="w-8 h-8 text-green-400" />
                    <h2 className="text-3xl font-bold text-white">Contractor Resources</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Welcome to your secure portal. All necessary onboarding forms and agreements are accessible below. Please complete and submit all required documentation online.
                  </p>
                </div>

                {/* Resource Cards */}
                <div className="space-y-6">
                  <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <FileText className="w-6 h-6 text-blue-400" />
                      Required Documentation
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Complete your contractor onboarding with our streamlined digital forms. Both documents must be submitted before project assignment.
                    </p>
                    <a
                      href="https://signnow.com/s/KfDaRkYE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 group w-full sm:w-auto"
                    >
                      <FileText className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      Complete Independent Contractor Agreement & W9
                      <span className="text-blue-200 text-2xl group-hover:translate-x-1 transition-transform">↗</span>
                    </a>
                  </div>

                  {/* Additional Resources Section */}
                  <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Next Steps</h3>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">1</div>
                        <p>Complete and submit all required forms via the link above</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">2</div>
                        <p>Await confirmation and approval from our team</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">3</div>
                        <p>Receive project assignments and detailed specifications</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cognito Form Embed Placeholder */}
                <div className="w-full mt-8">
                  {/* <iframe src="https://www.cognitoforms.com/f/your-form-id" style={{ width: "100%", height: 600, border: 0 }}></iframe> */}
                </div>
              </section>
            )}
          </div>
        </section>
      </main>
    </>
  );
}