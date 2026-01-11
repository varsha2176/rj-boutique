'use client'
import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { ourWorks } from '@/data/products'
import { Award, MessageCircle, Filter } from 'lucide-react'

export default function OurWorksPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter categories
  const categories = ['All', 'Women', 'Kids', 'Pets']

  // Filter works and calculate category-based design numbers
  const filteredWorks = useMemo(() => {
    const works = selectedCategory === 'All' 
      ? ourWorks 
      : ourWorks.filter(work => work.category === selectedCategory)

    // Add category-based design numbers
    const categoryCounters = { Women: 0, Kids: 0, Pets: 0 }
    
    return works.map(work => {
      categoryCounters[work.category]++
      return {
        ...work,
        displayName: `${work.category} - Design ${categoryCounters[work.category]}`
      }
    })
  }, [selectedCategory])

  // WhatsApp handler for individual dress inquiry
  const handleDressInquiry = (displayName) => {
    const phone = '919500710139'
    const message = encodeURIComponent(
      `Hi RJ Boutique! 

I want to know the customizable price for:
 ${displayName}

Please share pricing details and customization options.`
    )
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  // WhatsApp handler for general inquiry
  const handleGeneralInquiry = () => {
    const phone = '919500710139'
    const message = encodeURIComponent(
      `Hi RJ Boutique! 

I'm interested in your custom-stitched dresses from the "Our Works" gallery.

Please share pricing and customization options.`
    )
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <div className="pt-28">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-beige via-ivory to-blush text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-center mb-6">
            <Award className="text-cherryred" size={48} />
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

      {/* Filter Section */}
      <section className="sticky top-24 z-40 bg-ivory border-y border-beige py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Filter className="text-cherryred" size={20} />
            <span className="text-charcoal font-medium uppercase text-sm tracking-wide">
              Filter by Category
            </span>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full uppercase text-sm tracking-widest font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cherryred text-ivory'
                    : 'bg-white text-charcoal border-2 border-beige hover:border-cherryred'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-center text-charcoal/60 text-sm mt-3">
            Showing {filteredWorks.length} {filteredWorks.length === 1 ? 'dress' : 'dresses'}
          </p>
        </div>
      </section>

      {/* Works Gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.displayName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay with Order Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 sm:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <button
                      onClick={() => handleDressInquiry(work.displayName)}
                      className="flex items-center gap-2 px-6 py-3 bg-cherryred text-ivory hover:bg-ivory hover:text-cherryred uppercase text-xs tracking-widest font-medium transition-all rounded"
                    >
                      <MessageCircle size={16} />
                      Get Price
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 text-center border-t border-beige">
                  <h3 className="font-playfair text-lg font-medium text-charcoal mb-1">
                    {work.displayName}
                  </h3>
                  <p className="text-cherryred text-xs uppercase tracking-wide">
                    Custom Stitched
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note & CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 space-y-6"
          >
            {/* Note */}
            <div className="text-center bg-gradient-to-r from-blush/20 via-beige/30 to-blush/20 p-6 md:p-8 rounded-lg border border-cherryred/20">
              <p className="text-charcoal/80 text-sm md:text-base leading-relaxed">
                 <strong>All designs showcased here are real dresses stitched by RJ Boutique.</strong><br className="hidden sm:block" />
                No stock images—just authentic craftsmanship. Tap any design to get pricing!
              </p>
            </div>

            {/* General Inquiry CTA */}
            <div className="bg-gradient-to-r from-cherryred to-cherryred/90 p-8 md:p-12 rounded-lg text-center text-ivory">
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-4">
                Interested in Custom Stitching?
              </h3>
              <p className="text-ivory/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                Whether you choose a design from our gallery or bring your own, we'll create it perfectly tailored to your measurements.
              </p>
              <button
                onClick={handleGeneralInquiry}
                className="inline-flex items-center gap-3 px-10 py-4 bg-ivory text-cherryred hover:bg-ivory/90 uppercase text-sm tracking-widest font-semibold transition-all rounded"
              >
                <MessageCircle size={20} />
                Get Custom Quote on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
