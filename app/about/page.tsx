import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col items-center">
      {/* Hero Banner */}
      <section className="w-full h-60 sm:h-72 flex items-center justify-center bg-black relative mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white text-center z-10">
          About C3H Construction
        </h1>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 rounded-full border-4 border-white shadow-xl w-32 h-32 sm:w-44 sm:h-44 overflow-hidden bg-white">
          <Image
            src="/images/about/stud.jpg"
            alt="Lance Nading, Founder of C3H"
            width={176}
            height={176}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </section>

      {/* Content Card */}
      <section className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 px-8 pt-24 pb-10 mt-4 flex flex-col gap-6 relative z-10">
        <div className="text-center mb-3">
          <h2 className="text-2xl font-bold text-black">Lance Nading</h2>
          <p className="text-gray-500 text-sm font-medium">Founder & Third-Generation Builder</p>
        </div>
        <p className="text-lg text-gray-700">
          Lance is a Denver native and a licensed general contractor who has led C3H in building exceptional commercial, multi-family, and custom homes across Colorado since 1991.
        </p>
        <p className="text-lg text-gray-700">
          Renowned for integrity and meticulous craftsmanship, C3H—under Lance’s leadership—has never faced adverse construction litigation or OSHA violations in its history. Every client receives the company’s full commitment to quality, value, and lasting partnerships.
        </p>
        <p className="text-lg text-gray-700">
          Guided by decades of hands-on experience, C3H sets the standard for Colorado’s luxury building market.
        </p>
      </section>
    </main>
  );
}
