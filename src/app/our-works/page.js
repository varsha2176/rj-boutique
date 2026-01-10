'use client'
import { motion } from 'framer-motion'
import { ourWorks } from '@/data/products'
import { Award } from 'lucide-react'

export default function OurWorksPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-beige via-ivory to-blush text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-center mb-6">
            <Award className="text-rosegold" size={48} />
          </div>
          <h1 className="luxury-heading mb-6">
            Our Craftsmanship
          </h1>
          <p className="subtitle max-w-3xl mx-auto">
            Real dresses, real customers, real perfection. Every piece showcased here 
            has been custom-stitched by RJ Boutique with precision and care.
          </p>
        </motion.div>
      </section>

      {/* Works Gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-white"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 text-center border-t border-beige">
                  <h3 className="font-playfair text-xl font-medium text-charcoal mb-2">
                    {work.title}
                  </h3>
                  <p className="text-rosegold text-sm uppercase tracking-wide">
                    {work.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-blush/30 p-8 rounded"
          >
            <p className="text-charcoal/70 italic">
              Note: This gallery showcases only real dresses stitched by RJ Boutique. 
              No stock images—just authentic craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}