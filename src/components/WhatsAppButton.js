'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phone = '919500710139'
    const message = encodeURIComponent(
      'Hi RJ Boutique! I would like to inquire about custom designer wear.'
    )
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={32} />
    </motion.button>
  )
}