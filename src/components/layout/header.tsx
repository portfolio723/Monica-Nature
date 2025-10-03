
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Feather, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/itinerary', label: 'Itinerary' },
  { href: '/faq', label: 'Faq' },
  { href: '#', label: 'Blog' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black relative z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-cyan-400 rounded-md">
                <Feather className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">
                Monica&apos;s Nature
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link href="/contact" passHref>
              <Button className="bg-black text-white rounded-full pl-6 pr-2 py-2.5 flex items-center gap-2 hover:bg-gray-800">
                Contact
                <span className="bg-white text-black rounded-full p-1.5">
                  <ArrowRight size={16} />
                </span>
              </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="text-black"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" passHref>
              <Button className="bg-black text-white rounded-full pl-6 pr-2 py-2.5 flex items-center gap-2 hover:bg-gray-800">
                Contact
                <span className="bg-white text-black rounded-full p-1.5">
                  <ArrowRight size={16} />
                </span>
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
