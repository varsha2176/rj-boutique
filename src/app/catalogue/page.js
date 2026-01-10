'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import { categories } from '@/data/products'
import { Sparkles, ArrowLeft, Upload, Plus } from 'lucide-react'

export default function CataloguePage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')

  const [selectedMainCategory, setSelectedMainCategory] = useState(categoryParam || null)
  const [selectedSubCategory, setSelectedSubCategory] = useState(null)

  useEffect(() => {
    if (categoryParam && categoryParam !== selectedMainCategory) {
      setSelectedMainCategory(categoryParam)
      setSelectedSubCategory(null)
    }
  }, [categoryParam])

  const resetToMain = () => {
    setSelectedMainCategory(null)
    setSelectedSubCategory(null)
    window.history.pushState({}, '', '/catalogue')
  }

  const resetToSub = () => {
    setSelectedSubCategory(null)
  }

  // Custom Design WhatsApp Handler
  const handleCustomDesign = (categoryName) => {
    const phone = '919500710139'
    const message = encodeURIComponent(
      `Hi RJ Boutique! 

I want to send my own design for custom stitching.

 Category: ${categoryName}

I will share the design image/reference with you. Please provide pricing and timeline.`
    )
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  const mainCategories = [
    {
      key: 'women',
      title: "Women's Collection",
      image: '/images/hero/hero-1.jpg',
      description: 'Designer wear for the modern woman',
    },
    {
      key: 'kids',
      title: 'Kids & Baby Collection',
      image: '/images/hero/hero-2.jpg',
      description: 'Adorable outfits for little ones',
    },
    {
      key: 'pets',
      title: 'Pet Collection',
      image: '/images/hero/hero-3.jpg',
      description: 'Stylish wear for your furry friends',
    },
  ]

  if (!selectedMainCategory) {
    return (
      <div className="pt-28">
        <section className="section-padding bg-gradient-to-br from-beige via-ivory to-blush text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-cherryred uppercase tracking-[0.3em] text-sm mb-4">
              Explore Our Collections
            </p>
            <h1 className="luxury-heading mb-6">
              Choose Your Category
            </h1>
            <p className="subtitle max-w-3xl mx-auto">
              Select from our exclusive collections of custom-stitched designer wear
            </p>
          </motion.div>
        </section>

        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {mainCategories.map((category, index) => (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    setSelectedMainCategory(category.key)
                    window.history.pushState({}, '', `/catalogue?category=${category.key}`)
                  }}
                  className="group relative overflow-hidden cursor-pointer rounded-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <h3 className="font-playfair text-3xl font-semibold text-ivory mb-3">
                        {category.title}
                      </h3>
                      <p className="text-ivory/90 text-sm mb-6">
                        {category.description}
                      </p>
                      <div className="px-8 py-3 bg-cherryred text-ivory hover:bg-ivory hover:text-cherryred border border-cherryred uppercase text-sm tracking-widest font-medium transition-all rounded group-hover:scale-110">
                        Explore
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (selectedMainCategory && !selectedSubCategory) {
    const currentCategory = categories[selectedMainCategory]

    return (
      <div className="pt-28">
        <section className="section-padding bg-gradient-to-br from-beige via-ivory to-blush">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={resetToMain}
              className="flex items-center gap-2 text-cherryred hover:text-charcoal mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="uppercase text-sm tracking-wide font-medium">Back to Categories</span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className="text-cherryred uppercase tracking-[0.3em] text-sm mb-4">
                {currentCategory.title}
              </p>
              <h1 className="luxury-heading mb-6">
                Choose Your Style
              </h1>
              <p className="subtitle max-w-3xl mx-auto">
                Select a category to browse our curated collection
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            {/* Custom Design Upload Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <button
                onClick={() => handleCustomDesign(currentCategory.title)}
                className="w-full group relative overflow-hidden bg-gradient-to-r from-cherryred to-cherryred/80 hover:from-cherryred/90 hover:to-cherryred text-ivory rounded-lg p-8 transition-all hover:shadow-2xl border-2 border-cherryred"
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-ivory/20 group-hover:bg-ivory/30 transition-all">
                    <Upload size={36} className="text-ivory" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-2 flex items-center justify-center md:justify-start gap-3">
                      
                      Send Your Own Design
                    </h3>
                    <p className="text-ivory/90 text-base md:text-lg">
                      Have a unique style in mind? Share your design image on WhatsApp and we'll stitch it perfectly for you!
                    </p>
                  </div>
                  <div className="px-8 py-3 bg-ivory text-cherryred hover:bg-ivory/90 uppercase text-sm tracking-widest font-semibold transition-all rounded">
                    Upload Design
                  </div>
                </div>
              </button>
            </motion.div>

            {/* Subcategory Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentCategory.subcategories.map((subcat, index) => (
                <motion.button
                  key={subcat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedSubCategory(subcat.id)}
                  className="group relative overflow-hidden bg-white border-2 border-beige hover:border-cherryred rounded-lg p-8 text-center transition-all hover:shadow-xl"
                >
                  <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded">
                    <img
                      src={subcat.images[0]}
                      alt={subcat.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <h3 className="font-playfair text-xl font-medium text-charcoal mb-2 group-hover:text-cherryred transition-colors">
                    {subcat.name}
                  </h3>
                  <p className="text-sm text-charcoal/60 mb-3">
                    {subcat.images.length} Designs
                  </p>
                  <div className="flex items-center justify-center gap-2 text-cherryred text-sm">
                    <Sparkles size={16} />
                    <span>View Collection</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  const currentCategory = categories[selectedMainCategory]
  const currentSubCategory = currentCategory.subcategories.find(
    (sub) => sub.id === selectedSubCategory
  )

  return (
    <div className="pt-28">
      <section className="section-padding bg-gradient-to-br from-beige via-ivory to-blush">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={resetToMain}
              className="text-cherryred hover:text-charcoal transition-colors uppercase text-sm tracking-wide font-medium"
            >
              All Categories
            </button>
            <span className="text-charcoal/40">/</span>
            <button
              onClick={resetToSub}
              className="text-cherryred hover:text-charcoal transition-colors uppercase text-sm tracking-wide font-medium"
            >
              {currentCategory.title}
            </button>
            <span className="text-charcoal/40">/</span>
            <span className="text-charcoal uppercase text-sm tracking-wide font-medium">
              {currentSubCategory.name}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="luxury-heading mb-4">
              {currentSubCategory.name}
            </h1>
            <div className="flex items-center gap-2 text-cherryred mb-4">
              <Sparkles size={20} />
              <p className="text-sm uppercase tracking-wide">
                {currentSubCategory.images.length} Inspiration Designs • Custom Pricing Available
              </p>
            </div>
            <p className="subtitle max-w-3xl">
              Have your own design? Share it with us and we'll create it perfectly tailored to your measurements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentSubCategory.images.map((image, index) => (
              <ProductCard
                key={`${currentSubCategory.id}-${index}`}
                image={image}
                name={`${currentSubCategory.name} - Style ${index + 1}`}
                category={currentCategory.title}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}