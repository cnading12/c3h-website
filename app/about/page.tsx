import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col">
      <section className="relative w-full h-72 sm:h-96 flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        {/* Founder Image - Replace with actual path */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-64px] z-10 w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-xl border-4 border-white">
          <Image
            src="/images/about/stud.jpg" // Update this to your actual image
            alt="Lance Nading, Founder of C3H"
            width={176}
            height={176}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight z-20 text-center">About C3H</h1>
      </section>

      {/* Spacer for image */}
      <div className="h-20" />

      <section className="max-w-3xl mx-auto px-6 pb-16 pt-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">A Legacy of Craftsmanship</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          <strong>Lance Nading</strong> is a Denver native and third-generation builder. As a Licensed General Contractor, he has dedicated his career to building and developing exceptional commercial properties, multi-family residences, and custom single-family homes across Colorado since 1991.
        </p>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Lance’s unwavering focus is upholding C3H’s commitment to excellence, quality, and long-term value for every client. Under his leadership, C3H Construction has established a reputation for integrity and reliability—never having faced adverse construction litigation or an OSHA violation throughout its history.
        </p>
        <p className="text-lg text-gray-700 text-center">
          C3H continues to set the standard for craftsmanship and client satisfaction in Colorado’s luxury building market, guided by Lance’s hands-on approach and decades of experience.
        </p>
      </section>
    </main>
  );
}
