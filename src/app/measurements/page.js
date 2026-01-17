'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import MeasurementGuide from '@/components/MeasurementGuide'
import MeasurementForm from '@/components/MeasurementForm'
import { MessageCircle, CheckCircle, Sparkles } from 'lucide-react'

export default function MeasurementsPage() {
  const [submittedData, setSubmittedData] = useState(null)

  const handleFormSubmit = (data) => {
    setSubmittedData(data)
    
    // Automatically send to WhatsApp
    setTimeout(() => {
      handleWhatsAppShare(data)
      document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleWhatsAppShare = (data = submittedData) => {
    let message = `Hi RJ Boutique! 

I'd like to place a custom stitching order:

 *Customer Details*
Name: ${data.name}
Phone: ${data.phone}
Category: ${data.category.toUpperCase()}

 *Design Type*
${data.designType === 'catalogue' 
  ? `Catalogue Reference: ${data.catalogueRef}`
  : `Own Design (I'll send reference ${data.designImage ? 'image' : 'later'})`
}

 *Measurements (in inches)*
${Object.entries(data.measurements)
  .filter(([_, value]) => value)
  .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}: ${value}"`)
  .join('\n')}

Please confirm and provide pricing. Thank you!`

    window.open(`https://wa.me/919500710139?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="pt-28">
      {/* Hero Section with Sparkle Icon */}
      <section className="py-16 bg-gradient-to-br from-beige via-ivory to-blush text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-center mb-4">
            <Sparkles className="text-cherryred" size={40} />
          </div>
          <h1 className="luxury-heading mb-6">
            Submit Your Measurements
          </h1>
          <p className="subtitle max-w-3xl mx-auto">
            Fill in your details carefully. We'll create your perfect custom-fitted outfit based on these measurements.
          </p>
        </motion.div>
      </section>

      {/* Measurement Form */}
      <MeasurementForm onSubmit={handleFormSubmit} />

      {/* Measurement Guide */}
      <MeasurementGuide />

      {/* Results Section */}
      {submittedData && (
        <>
          <section id="result-section" className="section-padding bg-gradient-to-br from-blush/20 via-ivory to-beige/30">
            <div className="max-w-4xl mx-auto">
              {/* Success Message */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="text-green-600" size={48} />
                </div>
                <h2 className="luxury-heading text-3xl mb-4">
                  Measurements Sent!
                </h2>
                <p className="text-charcoal/70 text-lg">
                  Your details have been automatically sent to us on WhatsApp. We'll review and get back to you shortly!
                </p>
              </motion.div>

              {/* Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-12 rounded-lg shadow-2xl border-2 border-cherryred/20 mb-8"
              >
                <h3 className="font-playfair text-2xl font-semibold mb-6 text-center text-charcoal border-b border-beige pb-4">
                  Order Summary
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-charcoal/60 mb-1">Customer Name</p>
                    <p className="text-lg font-medium text-charcoal">{submittedData.name}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-charcoal/60 mb-1">WhatsApp Number</p>
                    <p className="text-lg font-medium text-charcoal">{submittedData.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-charcoal/60 mb-1">Category</p>
                    <p className="text-lg font-medium text-cherryred uppercase">{submittedData.category}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-charcoal/60 mb-1">Design Type</p>
                    <p className="text-lg font-medium text-charcoal">
                      {submittedData.designType === 'catalogue' ? submittedData.catalogueRef : 'Own Design'}
                    </p>
                  </div>
                </div>

                <div className="border-t border-beige pt-6">
                  <p className="text-xs uppercase tracking-wide text-charcoal/60 mb-4 font-semibold">Measurements</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {Object.entries(submittedData.measurements)
                      .filter(([_, value]) => value)
                      .map(([key, value]) => (
                        <div key={key} className="bg-blush/30 p-3 rounded">
                          <p className="text-xs uppercase tracking-wide text-charcoal/70 mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-base font-semibold text-charcoal">{value}"</p>
                        </div>
                      ))}
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={() => handleWhatsAppShare()}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-green-600 text-white hover:bg-green-700 uppercase text-sm tracking-widest font-semibold transition-all rounded shadow-lg hover:shadow-xl"
                >
                  <MessageCircle size={24} />
                  Resend to WhatsApp
                </button>

                <div className="bg-blush/30 border-l-4 border-cherryred p-6 rounded mt-6">
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    <strong className="text-cherryred">Your measurements have been sent!</strong> We've automatically opened WhatsApp with your details.
                    {submittedData.designType === 'own' && submittedData.designImage && ' Please attach your design image in the WhatsApp chat.'}
                    {submittedData.designType === 'own' && !submittedData.designImage && ' You can send your design reference in the WhatsApp chat.'}
                    {' '}We'll review everything and get back to you with pricing and timeline confirmation!
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}