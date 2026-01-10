'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-1.avif"
          alt="RJ Boutique Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-cherryred" size={24} />
            <p className="text-cherryred uppercase tracking-[0.3em] text-sm font-medium">
              Custom Designer Wear
            </p>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-semibold text-ivory mb-6 leading-tight max-w-4xl">
            Designed for You.<br />
            <span className="text-cherryred">Stitched with Love.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-ivory/90 font-light leading-relaxed mb-10 max-w-2xl">
            Custom-stitched designer clothing for women, kids, and pets. 
            Perfect fitting. Personalized designs. Affordable luxury.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/catalogue" 
              className="px-10 py-4 bg-cherryred text-ivory hover:bg-ivory hover:text-cherryred uppercase text-sm tracking-widest font-semibold transition-all border border-cherryred"
            >
              Explore Catalogue
            </Link>
            <a
              href="https://wa.me/919500710139?text=Hello%20RJ%20Boutique%2C%20I'm%20interested%20in%20custom%20stitching"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-transparent border-2 border-ivory text-ivory hover:bg-ivory hover:text-charcoal uppercase text-sm tracking-widest font-semibold transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="text-ivory" size={36} />
      </motion.div>
    </section>
  )
}