'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/catalogue', label: 'Catalogue' },
    { href: '/our-works', label: 'Our Works' },
    { href: '/measurements', label: 'Measurements' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-ivory/95 backdrop-blur-md shadow-lg' : 'bg-ivory/90'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-center h-28">
          {/* Left: Logo and Brand Name */}
          <Link href="/" className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="relative w-20 h-20">
                <Image
                  src="/images/logo/rj-logo.png"
                  alt="RJ Boutique Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="font-playfair text-2xl font-semibold text-charcoal tracking-wider">
                RJ Boutique
              </div>
            </motion.div>
          </Link>

          {/* Right: Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal hover:text-cherryred uppercase text-sm tracking-widest font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:9500710139"
              className="flex items-center gap-2 px-6 py-3 bg-cherryred text-ivory hover:bg-charcoal hover:text-ivory uppercase text-sm tracking-widest transition-all rounded ml-2"
            >
              <Phone size={16} />
              Call Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-charcoal hover:text-cherryred transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-ivory border-t border-beige"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-charcoal hover:text-cherryred uppercase text-sm tracking-widest font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:9500710139"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-cherryred text-ivory hover:bg-charcoal hover:text-ivory uppercase text-sm tracking-widest transition-all rounded"
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}