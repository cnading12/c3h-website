'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PROJECTS = [
  {
    name: "Sloans Lake Multi Family",
    slug: "sloans-lake",
    images: [
      "/images/projects/sloans-lake/Home1.jpeg",
      "/images/projects/sloans-lake/Home2.jpeg",
      "/images/projects/sloans-lake/Kitchen.jpeg",
      "/images/projects/sloans-lake/Kitchen2.jpeg"

    ],
  },
  {
    name: "Country Club Custom Home",
    slug: "country-club",
    images: [
      "/images/projects/country-club/1.jpg",
      "/images/projects/country-club/2.jpg",
      "/images/projects/country-club/3.jpg"
    ],
  },
  {
    name: "LoHi Custom Home",
    slug: "lohi",
    images: [
      "/images/projects/lohi/1.jpg",
      "/images/projects/lohi/2.jpg",
      "/images/projects/lohi/3.jpg"
    ],
  },
  {
    name: "South Pearl Multi-Family",
    slug: "south-pearl",
    images: [
      "/images/projects/south-pearl/1.jpg",
      "/images/projects/south-pearl/2.jpg",
      "/images/projects/south-pearl/3.jpg"
    ],
  },
];

export default function C3HConstruction() {
  // Track which image index is showing per project
  const [indexes, setIndexes] = useState<number[]>([0, 0, 0, 0]);

  // On hover, start cycling images for that project
  const handleMouseEnter = (idx: number) => {
    const interval = setInterval(() => {
      setIndexes((current) => {
        const updated = [...current];
        updated[idx] = (updated[idx] + 1) % PROJECTS[idx].images.length;
        return updated;
      });
    }, 1200);
    (window as any)[`projectInterval${idx}`] = interval;
  };

  const handleMouseLeave = (idx: number) => {
    clearInterval((window as any)[`projectInterval${idx}`]);
    setIndexes((current) => {
      const updated = [...current];
      updated[idx] = 0;
      return updated;
    });
  };

  return (
    <main className="min-h-screen bg-white py-16 px-2">
      <h1 className="text-4xl font-bold text-center mb-12 text-black">C3H Construction Projects</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <Link
            href={`/c3hConstruction/${project.slug}`} // <-- all lowercase for route
            key={project.slug}
            className="group relative aspect-square block rounded-lg overflow-hidden shadow-lg"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            <Image
              src={project.images[indexes[idx]]}
              alt={project.name}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <span className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl font-medium drop-shadow-lg tracking-wide z-10">
              {project.name}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
