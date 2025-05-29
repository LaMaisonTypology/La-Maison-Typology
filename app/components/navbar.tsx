"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-gradient-to-r from-stone-950 to-amber-950 border-b border-amber-800/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-amber-200">La Maison</span>
            <span className="text-xl font-light italic text-amber-300 ml-2">Typology</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-amber-300 hover:text-amber-100 transition-colors duration-300">
              Home
            </Link>
            <Link href="/blog" className="text-amber-300 hover:text-amber-100 transition-colors duration-300">
              Blog
            </Link>
            <Link href="/test" className="text-amber-300 hover:text-amber-100 transition-colors duration-300">
              Test
            </Link>
            <Link href="/contact" className="text-amber-300 hover:text-amber-100 transition-colors duration-300">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-amber-300 hover:text-amber-100 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className="block text-amber-300 hover:text-amber-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block text-amber-300 hover:text-amber-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/test"
              className="block text-amber-300 hover:text-amber-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Test
            </Link>
            <Link
              href="/contact"
              className="block text-amber-300 hover:text-amber-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
