// components/Navbar.tsx
"use client"; // This is important for using useState in a client component

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          La Maison Typology
        </Link>

        {/* Hamburger menu button for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation links for large screens */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/test" className="text-white hover:text-gray-300">
              Test
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:text-gray-300">
              Blog
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/" className="block text-white hover:bg-gray-700 p-2 rounded" onClick={toggleMenu}>
                Home
              </Link>
            </li>
          <li>
            <Link href="/test" className="block text-white hover:text-gray-300 p-2 rounded" onClick={toggleMenu}>
              Test
            </Link>
          </li>
            <li>
              <Link href="/contact" className="block text-white hover:bg-gray-700 p-2 rounded" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
        
            <li>
              <Link href="/blog" className="block text-white hover:bg-gray-700 p-2 rounded" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}