'use client'
import { motion } from 'framer-motion'
import { Heart, Award, Users, Sparkles, Info } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: <Heart size={40} />,
      title: 'Passion',
      desc: 'Every stitch is made with love and dedication to perfection',
    },
    {
      icon: <Award size={40} />,
      title: 'Quality',
      desc: 'Premium fabrics and meticulous craftsmanship in every piece',
    },
    {
      icon: <Users size={40} />,
      title: 'Customer First',
      desc: 'Your satisfaction and comfort are our top priorities',
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Innovation',
      desc: 'Blending traditional techniques with modern designs',
    },
  ]

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-beige via-ivory to-blush text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-6"
        >
          <div className="flex justify-center mb-6">
            <Info className="text-cherryred" size={48} />
          </div>
          <p className="text-cherryred uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Our Story
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl font-semibold text-charcoal mb-6 leading-tight">
            About RJ Boutique
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
            A journey of passion, precision, and personalized elegance
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <img
                src="/images/hero/hero-2.jpg"
                alt="About RJ Boutique"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl font-medium mb-6 text-charcoal">
                Where Tailoring Meets Personal Style
              </h2>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  RJ Boutique started with one mission: to make custom fashion accessible, comfortable, and meaningful. From a humble stitching setup, we've grown into a recognized name for handcrafted designer wear in Bangalore.
                </p>
                <p>
                  Our approach is simple—listen, design, and stitch garments that make people feel beautiful and confident. Every outfit is carefully crafted to fit real bodies, real occasions, and real personalities.
                </p>
                <p>
                  From classic lehengas to elegant western wear, festive kids' outfits, and even charming pet clothing, our work blends creativity with precision.
                </p>
                <p className="text-cherryred font-medium">
                  At RJ Boutique, clothing isn't just stitched—it's thoughtfully made for you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Values Section */}
      <section className="section-padding bg-beige/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-cherryred uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Our Values
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-charcoal">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-lg shadow-md"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blush/30 mb-6 text-cherryred">
                  {value.icon}
                </div>
                <h3 className="font-playfair text-xl font-medium mb-3 text-charcoal">{value.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Process Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-cherryred uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              How We Work
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-charcoal">
              Our Process
            </h2>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Consultation',
                desc: 'Share your design ideas via WhatsApp or in-store visit. Discuss fabrics, colors, and styles.',
              },
              {
                step: '02',
                title: 'Measurements',
                desc: 'Provide your accurate measurements or visit us for professional measurement taking.',
              },
              {
                step: '03',
                title: 'Design & Customization',
                desc: 'Choose from our catalogue or bring your own design. We customize everything to your preferences.',
              },
              {
                step: '04',
                title: 'Crafting',
                desc: 'Our skilled artisans stitch your outfit with precision, ensuring perfect fit and finish.',
              },
              {
                step: '05',
                title: 'Delivery',
                desc: 'Collect from our Bangalore store or receive via courier anywhere in India.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-8 items-start border-l-2 border-cherryred pl-8"
              >
                <div className="text-5xl font-playfair text-cherryred/20 font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-medium mb-2 text-charcoal">{item.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold mb-6 text-ivory">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-xl text-ivory/80 mb-10">
              Connect with us to start your custom design journey
            </p>
            <a
              href="https://wa.me/919500710139?text=Hello%20RJ%20Boutique%2C%20I'd%20like%20to%20know%20more"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-cherryred text-ivory hover:bg-ivory hover:text-cherryred border border-cherryred uppercase text-sm tracking-widest font-semibold transition-all rounded"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}