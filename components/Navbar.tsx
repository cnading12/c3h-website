'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // <-- Import from next/link
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  { label: 'C3H Construction', href: '/c3hConstruction' }, // make sure path is lowercase
  { label: 'C3H Development', href: '/c3hDevelopment' },   // make sure path is lowercase
  { label: 'Contractor', href: '/contractor' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-30 w-full top-0 left-0">
      <div className="w-full bg-gradient-to-r from-white/90 via-gray-100/80 to-white/90 backdrop-blur-md shadow-xl">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo as link to homepage */}
          <Link href="/" className="flex items-center">
            <Image src="/images/logo/logo.avif" alt="C3H Logo" width={150} height={88} className="mr-3" />
          </Link>
          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 text-lg">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-semibold text-gray-900 hover:text-black hover:underline hover:decoration-2 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Hamburger */}
          <button
            className="md:hidden text-gray-900"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </nav>
      </div>
      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white/90 flex flex-col items-center justify-center gap-10 text-2xl font-semibold text-gray-900">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
