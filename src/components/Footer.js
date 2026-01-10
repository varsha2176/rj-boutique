'use client'
import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo/rj-logo1.png" 
                alt="RJ Boutique Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-ivory/70 leading-relaxed mb-4">
              Custom designer wear crafted with precision and passion. 
              Based in Bangalore, serving customers across India.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ivory/70 hover:text-cherryred transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ivory/70 hover:text-cherryred transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-cherryred">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-ivory/70 hover:text-cherryred transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-sm text-ivory/70 hover:text-cherryred transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/our-works" className="text-sm text-ivory/70 hover:text-cherryred transition-colors">
                  Our Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-ivory/70 hover:text-cherryred transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-ivory/70 hover:text-cherryred transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-cherryred">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-ivory/70">
                <Phone size={16} className="mt-1 flex-shrink-0 text-cherryred" />
                <a href="tel:+919500710139" className="hover:text-cherryred transition-colors">
                  +91 95007 10139
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ivory/70">
                <Mail size={16} className="mt-1 flex-shrink-0 text-cherryred" />
                <a href="mailto:rj.boutique.jeya@gmail.com" className="hover:text-cherryred transition-colors">
                  rj.boutique.jeya@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ivory/70">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-cherryred" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-cherryred">Services</h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li>Custom Stitching</li>
              <li>Designer Wear</li>
              <li>Women's Collection</li>
              <li>Kids & Baby Wear</li>
              <li>Pet Clothing</li>
              <li>Pan India Delivery</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-ivory/60">
              © 2025 RJ Boutique. All rights reserved. Designed with ❤️
            </p>
            <a
              href="https://wa.me/919500710139?text=Hello%20RJ%20Boutique"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-cherryred hover:text-ivory transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}