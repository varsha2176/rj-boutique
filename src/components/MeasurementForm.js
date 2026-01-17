'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Phone, Upload, AlertCircle } from 'lucide-react'
import { sizeCharts, measurementFields, measurementTips } from '@/data/measurementData'

export default function MeasurementForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    designType: '', // 'catalogue' or 'own'
    catalogueRef: '', // e.g., "Short Kurti - Style 6"
    measurements: {},
    designImage: null,
  })

  const [imagePreview, setImagePreview] = useState(null)

  const handleCategoryChange = (category) => {
    setFormData({
      ...formData,
      category,
      measurements: {},
    })
  }

  const handleSizeSelect = (size) => {
    const sizeData = sizeCharts[formData.category][size]
    setFormData({
      ...formData,
      measurements: { ...sizeData },
    })
  }

  const handleMeasurementChange = (field, value) => {
    setFormData({
      ...formData,
      measurements: {
        ...formData.measurements,
        [field]: value,
      },
    })
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({ ...formData, designImage: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone || !formData.category || !formData.designType) {
      alert('Please fill in all required fields')
      return
    }

    if (formData.designType === 'catalogue' && !formData.catalogueRef) {
      alert('Please enter catalogue style reference')
      return
    }

    if (Object.keys(formData.measurements).length === 0) {
      alert('Please enter at least one measurement or select a size')
      return
    }

    onSubmit(formData)
  }

  const getCurrentFields = () => {
    if (!formData.category) return []
    return measurementFields[formData.category] || []
  }

  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-5xl mx-auto">
        {/* Measurement Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blush/30 border-l-4 border-cherryred p-6 rounded mb-8"
        >
          <div className="flex items-start gap-3 mb-3">
            <AlertCircle className="text-cherryred flex-shrink-0 mt-1" size={20} />
            <h3 className="font-playfair text-lg font-semibold text-charcoal">Measurement Tips</h3>
          </div>
          <ul className="space-y-2 text-sm text-charcoal/80">
            {measurementTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-cherryred mt-1">•</span>
                <span>{tip}</span>
              </li>
            ))}
            <li className="flex items-start gap-2">
              <span className="text-cherryred mt-1">•</span>
              <span className="font-semibold">If unsure about measurements, refer to the measurement chart below for guidance</span>
            </li>
          </ul>
        </motion.div>

        {/* Main Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-lg shadow-2xl border border-beige"
        >
          {/* Customer Details */}
          <div className="mb-8">
            <h3 className="text-xl font-playfair font-semibold text-charcoal mb-6 border-b border-beige pb-3">
              Customer Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm uppercase tracking-wide text-charcoal font-medium mb-3">
                  <User size={18} className="text-cherryred" />
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-beige focus:border-cherryred outline-none text-charcoal rounded transition-all"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm uppercase tracking-wide text-charcoal font-medium mb-3">
                  <Phone size={18} className="text-cherryred" />
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 border-2 border-beige focus:border-cherryred outline-none text-charcoal rounded transition-all"
                  required
                />
              </div>
            </div>
          </div>

          {/* Category Selection */}
          <div className="mb-8">
            <h3 className="text-xl font-playfair font-semibold text-charcoal mb-6 border-b border-beige pb-3">
              Select Category *
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {['women', 'kids', 'pets'].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`py-4 px-4 border-2 text-sm uppercase tracking-wide font-semibold transition-all rounded ${
                    formData.category === category
                      ? 'bg-cherryred text-ivory border-cherryred shadow-lg scale-105'
                      : 'bg-white text-charcoal border-beige hover:border-cherryred'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Design Type Selection */}
          {formData.category && (
            <div className="mb-8">
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-6 border-b border-beige pb-3">
                Design Type *
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, designType: 'catalogue', catalogueRef: '', designImage: null })}
                  className={`p-6 border-2 text-left transition-all rounded ${
                    formData.designType === 'catalogue'
                      ? 'bg-cherryred text-ivory border-cherryred'
                      : 'bg-white text-charcoal border-beige hover:border-cherryred'
                  }`}
                >
                  <p className="font-semibold mb-2">Catalogue Style</p>
                  <p className="text-sm opacity-90">I'll provide a catalogue style number</p>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, designType: 'own', catalogueRef: '' })}
                  className={`p-6 border-2 text-left transition-all rounded ${
                    formData.designType === 'own'
                      ? 'bg-cherryred text-ivory border-cherryred'
                      : 'bg-white text-charcoal border-beige hover:border-cherryred'
                  }`}
                >
                  <p className="font-semibold mb-2">Own Design</p>
                  <p className="text-sm opacity-90">I'll send my own design reference</p>
                </button>
              </div>

              {/* Catalogue Reference Input */}
              {formData.designType === 'catalogue' && (
                <div className="mt-6">
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    Enter Catalogue Style Reference *
                  </label>
                  <input
                    type="text"
                    value={formData.catalogueRef}
                    onChange={(e) => setFormData({ ...formData, catalogueRef: e.target.value })}
                    placeholder='e.g., "Short Kurti - Style 6" or "Blouse front - Design 1"'
                    className="w-full px-4 py-3 border border-beige focus:border-cherryred outline-none text-charcoal rounded"
                  />
                </div>
              )}

              {/* Own Design Image Upload */}
              {formData.designType === 'own' && (
                <div className="mt-6">
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    Upload Design Reference (Optional - can also send later on WhatsApp)
                  </label>
                  <div className="border-2 border-dashed border-beige rounded-lg p-6 text-center">
                    <Upload className="mx-auto text-cherryred mb-3" size={32} />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="design-upload"
                    />
                    <label
                      htmlFor="design-upload"
                      className="inline-block px-6 py-3 bg-cherryred text-ivory hover:bg-charcoal cursor-pointer uppercase text-sm tracking-wide font-medium transition-all rounded"
                    >
                      Choose Image
                    </label>
                    {imagePreview && (
                      <div className="mt-4">
                        <img src={imagePreview} alt="Design preview" className="max-w-xs mx-auto rounded shadow-lg" />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Quick Size Selection */}
          {formData.category && formData.designType && (
            <div className="mb-8">
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-6 border-b border-beige pb-3">
                Quick Fill - Select Size (Optional)
              </h3>
              <p className="text-sm text-charcoal/70 mb-4">
                Click a size to auto-fill measurements, or skip and enter manually below
              </p>
              <div className="flex flex-wrap gap-3">
                {Object.keys(sizeCharts[formData.category]).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => handleSizeSelect(size)}
                    className="px-6 py-3 border-2 border-beige hover:border-cherryred hover:bg-cherryred hover:text-ivory font-semibold transition-all rounded"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Measurement Fields */}
          {formData.category && formData.designType && (
            <div className="mb-8">
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-6 border-b border-beige pb-3">
                Enter Measurements (in inches)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getCurrentFields().map((field) => (
                  <div key={field.id}>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      value={formData.measurements[field.id] || ''}
                      onChange={(e) => handleMeasurementChange(field.id, e.target.value)}
                      placeholder={field.hint}
                      className="w-full px-4 py-3 border border-beige focus:border-cherryred outline-none text-charcoal rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.designType}
            className={`w-full py-4 uppercase text-sm tracking-widest font-semibold transition-all rounded ${
              formData.designType
                ? 'bg-cherryred text-ivory hover:bg-charcoal cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {formData.designType ? 'Submit Measurements' : 'Please Complete All Required Fields First'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}