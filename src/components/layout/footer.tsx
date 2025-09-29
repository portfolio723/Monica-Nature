import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/itinerary', label: 'Itinerary' },
  { href: '#', label: 'Faq' },
  { href: '#', label: 'Blog' },
];

const legalLinks = [
  { href: '#', label: 'Refund Policy' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Use' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold">Monica's Nature</h2>
            <p className="mt-2 text-gray-400">
              Explore the beauty of the natural world with us.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                      {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                      {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Monica's Nature. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {/* Placeholder for social icons */}
          </div>
        </div>
      </div>
    </footer>
  );
}
