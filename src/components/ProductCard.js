'use client'
import { motion } from 'framer-motion'
import { MessageCircle, Sparkles } from 'lucide-react'
import { openWhatsApp } from '@/utils/whatsapp'

export default function ProductCard({ image, name, category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-white"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
          <button
            onClick={() => openWhatsApp(category, name)}
            className="flex items-center gap-2 px-8 py-4 bg-ivory text-charcoal hover:bg-rosegold uppercase text-sm tracking-widest font-medium transition-all transform translate-y-4 group-hover:translate-y-0"
          >
            <MessageCircle size={18} />
            Customize & Order
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 text-center border-t border-beige">
        <h3 className="font-playfair text-xl font-medium text-charcoal mb-2">
          {name}
        </h3>
        <p className="text-charcoal/60 text-sm uppercase tracking-wide mb-3">
          {category}
        </p>
        <div className="flex items-center justify-center gap-2 text-rosegold text-sm">
          <Sparkles size={16} />
          <span>Fully Customizable</span>
        </div>
      </div>
    </motion.div>
  )
}