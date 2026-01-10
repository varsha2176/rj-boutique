// Generate WhatsApp link for product orders
export function generateWhatsAppLink(category, design = '', notes = '') {
  const phone = '919500710139'
  
  let message = `Hi RJ Boutique! 

I'm interested in ordering a custom-stitched dress:

 Category: ${category}`

  if (design) {
    message += `
 Design Reference: ${design}`
  }

  if (notes) {
    message += `
 Notes: ${notes}`
  }

  message += `

Please share pricing and customization options.`

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

// Open WhatsApp for product orders
export function openWhatsApp(category, design = '', notes = '') {
  const link = generateWhatsAppLink(category, design, notes)
  window.open(link, '_blank')
}

// Generate WhatsApp link for custom design upload
export function generateCustomDesignLink(categoryName) {
  const phone = '919500710139'
  
  const message = `Hi RJ Boutique! 

I want to send my own design for custom stitching.

 Category: ${categoryName}

I will share the design image/reference with you. Please provide pricing and timeline.`

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

// Open WhatsApp for custom design upload
export function openCustomDesignWhatsApp(categoryName) {
  const link = generateCustomDesignLink(categoryName)
  window.open(link, '_blank')
}