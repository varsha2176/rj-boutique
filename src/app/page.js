'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Hero from '@/components/Hero'
import { Scissors, Heart, Truck, Star, Sparkles } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Scissors size={40} />,
      title: 'Custom Stitching',
      desc: 'Every piece tailored to your exact measurements and style preferences',
    },
    {
      icon: <Heart size={40} />,
      title: 'Premium Quality',
      desc: 'Finest fabrics and meticulous craftsmanship in every design',
    },
    {
      icon: <Truck size={40} />,
      title: 'Pan India Delivery',
      desc: 'Reliable courier service available across all of India',
    },
    {
      icon: <Star size={40} />,
      title: 'Affordable Luxury',
      desc: 'Designer wear at prices that won\'t break the bank',
    },
  ]

  const collections = [
    { name: "Women's Wear", image: '/images/hero/hero-1.jpg', link: '/catalogue' },
    { name: 'Kids & Baby', image: '/images/hero/hero-2.jpg', link: '/catalogue' },
    { name: 'Pet Wear', image: '/images/hero/hero-3.jpg', link: '/catalogue' },
  ]

  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-cherryred uppercase tracking-[0.3em] text-sm mb-4">
              Why Choose Us
            </p>
            <h2 className="luxury-heading mb-6">
              Excellence in Every Stitch
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white border border-beige hover:border-cherryred transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blush/30 mb-6 text-cherryred">
                  {feature.icon}
                </div>
                <h3 className="font-playfair text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Our Works CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-cherryred uppercase tracking-[0.3em] text-sm mb-4">
                Real Work, Real Perfection
              </p>
              <h2 className="luxury-heading mb-6">
                See Our Craftsmanship
              </h2>
              <p className="subtitle mb-8">
                Browse our portfolio of beautifully stitched outfits. Every piece showcased 
                is a real dress made by RJ Boutique with precision and care.
              </p>
              <Link
                href="/our-works"
                className="inline-block px-10 py-4 bg-cherryred text-ivory hover:bg-charcoal border border-cherryred uppercase text-sm tracking-widest font-semibold transition-all rounded"
              >
                View Our Works
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl"
            >
              <img
                src="/images/our-works/1.jpg"
                alt="Our Works Preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Collections Preview */}
      <section className="section-padding bg-gradient-to-br from-beige/30 via-ivory to-blush/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-cherryred uppercase tracking-[0.3em] text-sm mb-4">
              Our Collections
            </p>
            <h2 className="luxury-heading mb-6">
              Designed for Everyone
            </h2>
            <p className="subtitle max-w-3xl mx-auto">
              From elegant women's wear to adorable kids' outfits and even stylish pet clothing. 
              Every piece is custom-made just for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center transform group-hover:translate-y-[-10px] transition-transform duration-500">
                      <h3 className="font-playfair text-3xl font-semibold text-ivory mb-4">
                        {collection.name}
                      </h3>
                      <Link
                        href={collection.link}
                        className="inline-block px-8 py-3 bg-cherryred text-ivory hover:bg-ivory hover:text-cherryred border border-cherryred uppercase text-sm tracking-widest font-medium transition-all"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA Section */}
      <section className="section-padding bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <Sparkles className="text-cherryred" size={48} />
            </div>
            <h2 className="luxury-heading mb-6 text-ivory">
              Ready to Create Your Dream Outfit?
            </h2>
            <p className="text-xl text-ivory/80 mb-10 leading-relaxed">
              Connect with us on WhatsApp to discuss your design ideas, measurements, 
              and preferences. We're here to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919500710139?text=Hello%20RJ%20Boutique%2C%20I'd%20like%20to%20discuss%20a%20custom%20design"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-cherryred text-ivory hover:bg-ivory hover:text-cherryred border border-cherryred uppercase text-sm tracking-widest font-semibold transition-all"
              >
                WhatsApp Us Now
              </a>
              <Link
                href="/contact"
                className="px-10 py-4 bg-transparent border-2 border-ivory text-ivory hover:bg-ivory hover:text-charcoal uppercase text-sm tracking-widest font-semibold transition-all"
              >
                Visit Our Store
              </Link>
            </div>
            <p className="text-sm text-ivory/60 mt-8">
              📦 Pan India courier available | Orders accepted from anywhere
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}