'use client'
import { motion } from 'framer-motion'
import { Ruler, Info } from 'lucide-react'

export default function MeasurementGuide() {
  const howToMeasure = [
    {
      title: 'Bust / Chest',
      description: 'Measure around the fullest part of your bust, keeping the tape parallel to the ground. Wear a well-fitted bra.',
    },
    {
      title: 'Waist',
      description: 'Measure around the narrowest part of your natural waistline, typically just above your belly button.',
    },
    {
      title: 'Hip',
      description: 'Measure around the fullest part of your hips, usually 7-9 inches below your waist.',
    },
    {
      title: 'Shoulder Width',
      description: 'Measure from one shoulder edge to the other across the back, where the sleeve would start.',
    },
    {
      title: 'Sleeve Length',
      description: 'Measure from the shoulder point down to your wrist (or desired sleeve length) with arm slightly bent.',
    },
    {
      title: 'Length (Top/Kurti/Gown)',
      description: 'Measure from the shoulder (or neck point) straight down to where you want the garment to end.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-beige/30 via-ivory to-blush/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Ruler className="text-cherryred" size={40} />
          </div>
          <h2 className="luxury-heading mb-6">
            How to Take Measurements
          </h2>
          <p className="subtitle max-w-3xl mx-auto">
            Follow these step-by-step instructions to take accurate body measurements. 
            We collect custom measurements for perfect fitting. You may also send a reference garment for sizing.
          </p>
        </motion.div>

        {/* Step-by-Step Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-playfair text-3xl font-semibold text-center mb-12 text-charcoal">
            Measurement Instructions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howToMeasure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg border border-beige hover:border-cherryred transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-cherryred text-ivory flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h4 className="font-playfair text-lg font-semibold text-charcoal">{item.title}</h4>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Measurement Charts */}
        <div className="space-y-16">
          {/* Women's Guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-3xl font-semibold text-center mb-8 text-charcoal">
              Women's Measurement Chart
            </h3>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <img
                src="/images/measurements/women-guide.jpg"
                alt="Women's Measurement Guide"
                className="w-full h-auto max-w-xl mx-auto"
              />
            </div>
            <p className="text-center text-sm text-charcoal/70 mt-4 italic">
              Measure at the fullest part of bust, narrowest part of waist, and fullest part of hips.
            </p>
          </motion.div>

          {/* Kids Guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-3xl font-semibold text-center mb-8 text-charcoal">
              Kids' Measurement Chart
            </h3>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <img
                src="/images/measurements/kids-guide.jpg"
                alt="Kids' Measurement Guide"
                className="w-full h-auto max-w-xl mx-auto"
              />
            </div>
            <p className="text-center text-sm text-charcoal/70 mt-4 italic">
              'I-GROW' option adds 2" to inseam and 1.5" to sleeve length for growing children.
            </p>
          </motion.div>

          {/* Pet Guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-3xl font-semibold text-center mb-8 text-charcoal">
              Pet Measurement Chart
            </h3>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <img
                src="/images/measurements/pets-guide.jpg"
                alt="Pet Measurement Guide"
                className="w-full h-auto max-w-xl mx-auto"
              />
            </div>
            <p className="text-center text-sm text-charcoal/70 mt-4 italic">
              Measure from the base of the neck to the base of the tail for back length.
            </p>
          </motion.div>
        </div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-cherryred/10 border-l-4 border-cherryred p-8 rounded"
        >
          <div className="flex items-start gap-4">
            <Info className="text-cherryred flex-shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-playfair text-xl font-semibold text-charcoal mb-3">
                Important Notes
              </h4>
              <ul className="space-y-2 text-charcoal/80">
                <li className="flex items-start gap-2">
                  <span className="text-cherryred mt-1">•</span>
                  <span>Materials will be similar to the catalogue pictures shown.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cherryred mt-1">•</span>
                  <span>All measurements should be in inches unless specified otherwise.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cherryred mt-1">•</span>
                  <span>If you have a reference garment that fits perfectly, you can send us its measurements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cherryred mt-1">•</span>
                  <span>
                    Need guidance? Contact us via WhatsApp at{' '}
                    <a href="tel:+919500710139" className="text-cherryred font-semibold hover:underline">
                      +91 95007 10139
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}