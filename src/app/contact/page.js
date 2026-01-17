'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'

export default function ContactPage() {
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
            <Send className="text-cherryred" size={48} />
          </div>
          <p className="text-cherryred uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Get in Touch
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl font-semibold text-charcoal mb-6 leading-tight">
            Ready to Create Your Perfect Outfit?
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
            Reach out to us via WhatsApp, phone, or visit our boutique in Bangalore
          </p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl font-semibold text-charcoal mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="text-cherryred mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium text-charcoal mb-2">Phone</h3>
                    <a href="tel:9500710139" className="text-charcoal/70 hover:text-cherryred transition-colors">
                      +91 9500710139
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="text-cherryred mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium text-charcoal mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/919500710139"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal/70 hover:text-cherryred transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-cherryred mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium text-charcoal mb-2">Email</h3>
                    <a href="mailto:rj.boutique.jeya@gmail.com" className="text-charcoal/70 hover:text-cherryred transition-colors">
                      rj.boutique.jeya@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-cherryred mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium text-charcoal mb-2">Location</h3>
                    <p className="text-charcoal/70">
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-cherryred mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium text-charcoal mb-2">Working Hours</h3>
                    <p className="text-charcoal/70">
                      Monday - Saturday: 10:00 AM - 7:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-br from-cherryred/10 to-blush/20 p-8 rounded-lg border-2 border-cherryred/20">
                <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
                  Pan-India Delivery
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We offer courier services all over India. Your custom-stitched dress 
                  will be delivered to your doorstep with care.
                </p>
              </div>
            </motion.div>

            {/* Google Map - Bangalore, Karnataka, India */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[600px] rounded-lg overflow-hidden shadow-2xl border-4 border-beige"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77490939327!2d77.30125805!3d12.953945949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1673456789012!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RJ Boutique Location - Bangalore, Karnataka, India"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}