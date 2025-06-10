export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-24">
      <section className="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-8 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">Contact Us</h1>
        
        {/* Phone */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Phone</h2>
          <a
            href="tel:3033598337"
            className="text-xl text-blue-700 underline hover:text-blue-900"
          >
            (303) 359-8337
          </a>
        </div>
        
        {/* Email */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Email</h2>
          <a
            href="mailto:lance.nading@c3hdenver.com"
            className="text-xl text-blue-700 underline break-all hover:text-blue-900"
          >
            lance.nading@c3hdenver.com
          </a>
        </div>
        
        {/* Address */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Address</h2>
          <address className="not-italic text-xl text-gray-700 leading-relaxed">
            1315 Cherryville Rd<br />
            Greenwood Village, CO 80121
          </address>
        </div>
      </section>
    </main>
  );
}
