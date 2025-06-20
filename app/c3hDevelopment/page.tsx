'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DEVELOPMENTS = [
  {
    name: "Sloans Lake CoWork & Event Space",
    slug: "merritt-cowork",
    images: [
      "/images/developments/sloans-lake/1.jpg",
      "/images/developments/sloans-lake/2.jpg",
      "/images/developments/sloans-lake/3.jpg"
    ],
  },
  {
    name: "Ft. Collins Mixed Use Space",
    slug: "mixed-use",
    images: [
      "/images/developments/ft-collins/1.jpg",
      "/images/developments/ft-collins/2.jpg",
      "/images/developments/ft-collins/3.jpg"
    ],
  },
];

export default function C3HDevelopment() {
  const [indexes, setIndexes] = useState<number[]>([0, 0]);
  // Store timer ids
  const intervals = useRef<Array<number | null>>([null, null]);

  const handleMouseEnter = (idx: number) => {
    intervals.current[idx] = window.setInterval(() => {
      setIndexes((current) => {
        const updated = [...current];
        updated[idx] = (updated[idx] + 1) % DEVELOPMENTS[idx].images.length;
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

  return (
    <main className="min-h-screen bg-white py-16 px-2">
      <h1 className="text-4xl font-bold text-center mb-12 text-black">C3H Development Projects</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {DEVELOPMENTS.map((project, idx) => (
          <Link
            href={`/c3hDevelopment/${project.slug}`}
            key={project.slug}
            className="group relative aspect-[4/3] block rounded-lg overflow-hidden shadow-lg min-h-[300px]"
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
