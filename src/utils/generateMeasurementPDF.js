import jsPDF from 'jspdf'
import { clothingTypes, deliveryInfo } from '@/data/measurementData'

export const generateMeasurementPDF = (formData) => {
  const pdf = new jsPDF()
  
  // Colors
  const cherryRed = [193, 40, 45]
  const charcoal = [28, 28, 28]
  const ivory = [250, 249, 246]
  const lightGray = [200, 200, 200]
  
  // Header Background
  pdf.setFillColor(...ivory)
  pdf.rect(0, 0, 210, 45, 'F')
  
  // Logo Text
  pdf.setFontSize(28)
  pdf.setTextColor(...cherryRed)
  pdf.setFont('helvetica', 'bold')
  pdf.text('RJ BOUTIQUE', 105, 20, { align: 'center' })
  
  pdf.setFontSize(11)
  pdf.setTextColor(...charcoal)
  pdf.setFont('helvetica', 'normal')
  pdf.text('Designed for You. Stitched with Love.', 105, 28, { align: 'center' })
  pdf.text('Custom Measurement Form', 105, 36, { align: 'center' })
  
  // Main Divider
  pdf.setDrawColor(...cherryRed)
  pdf.setLineWidth(0.8)
  pdf.line(20, 42, 190, 42)
  
  let yPos = 55
  
  // Customer Information Section
  pdf.setFontSize(14)
  pdf.setFont('helvetica', 'bold')
  pdf.setTextColor(...cherryRed)
  pdf.text('CUSTOMER INFORMATION', 20, yPos)
  
  yPos += 10
  pdf.setFontSize(11)
  pdf.setTextColor(...charcoal)
  pdf.setFont('helvetica', 'normal')
  
  const customerInfo = [
    ['Name:', formData.name],
    ['WhatsApp:', formData.phone],
    ['Category:', formData.category.toUpperCase()],
    ['Clothing Type:', clothingTypes[formData.category].find(t => t.id === formData.clothingType)?.label || formData.clothingType],
    ['Delivery Type:', deliveryInfo[formData.deliveryType]?.title + ' (' + deliveryInfo[formData.deliveryType]?.time + ')'],
  ]
  
  customerInfo.forEach(([label, value]) => {
    pdf.setFont('helvetica', 'bold')
    pdf.text(label, 25, yPos)
    pdf.setFont('helvetica', 'normal')
    pdf.text(String(value), 70, yPos)
    yPos += 7
  })
  
  // Divider
  yPos += 5
  pdf.setDrawColor(...lightGray)
  pdf.setLineWidth(0.3)
  pdf.line(20, yPos, 190, yPos)
  
  // Measurements Section
  yPos += 10
  pdf.setFontSize(14)
  pdf.setFont('helvetica', 'bold')
  pdf.setTextColor(...cherryRed)
  pdf.text('BODY MEASUREMENTS', 20, yPos)
  
  yPos += 10
  pdf.setFontSize(10)
  pdf.setTextColor(...charcoal)
  
  // Measurements Table
  const measurements = Object.entries(formData.measurements).filter(([_, value]) => value)
  const midPoint = Math.ceil(measurements.length / 2)
  const leftColumn = measurements.slice(0, midPoint)
  const rightColumn = measurements.slice(midPoint)
  
  const maxRows = Math.max(leftColumn.length, rightColumn.length)
  
  for (let i = 0; i < maxRows; i++) {
    if (leftColumn[i]) {
      const [key, value] = leftColumn[i]
      pdf.setFont('helvetica', 'bold')
      pdf.text(`${key.charAt(0).toUpperCase() + key.slice(1)}:`, 25, yPos)
      pdf.setFont('helvetica', 'normal')
      pdf.text(String(value) + '"', 80, yPos)
    }
    
    if (rightColumn[i]) {
      const [key, value] = rightColumn[i]
      pdf.setFont('helvetica', 'bold')
      pdf.text(`${key.charAt(0).toUpperCase() + key.slice(1)}:`, 110, yPos)
      pdf.setFont('helvetica', 'normal')
      pdf.text(String(value) + '"', 165, yPos)
    }
    
    yPos += 7
  }
  
  // Fabric Notes Section
  if (formData.fabricNotes) {
    yPos += 5
    pdf.setDrawColor(...lightGray)
    pdf.line(20, yPos, 190, yPos)
    yPos += 10
    
    pdf.setFontSize(12)
    pdf.setFont('helvetica', 'bold')
    pdf.setTextColor(...cherryRed)
    pdf.text('FABRIC & DESIGN NOTES', 20, yPos)
    
    yPos += 8
    pdf.setFontSize(10)
    pdf.setTextColor(...charcoal)
    pdf.setFont('helvetica', 'normal')
    const fabricLines = pdf.splitTextToSize(formData.fabricNotes, 170)
    pdf.text(fabricLines, 25, yPos)
    yPos += fabricLines.length * 5 + 5
  }
  
  // Additional Notes Section
  if (formData.additionalNotes) {
    yPos += 5
    pdf.setDrawColor(...lightGray)
    pdf.line(20, yPos, 190, yPos)
    yPos += 10
    
    pdf.setFontSize(12)
    pdf.setFont('helvetica', 'bold')
    pdf.setTextColor(...cherryRed)
    pdf.text('ADDITIONAL NOTES', 20, yPos)
    
    yPos += 8
    pdf.setFontSize(10)
    pdf.setTextColor(...charcoal)
    pdf.setFont('helvetica', 'normal')
    const notesLines = pdf.splitTextToSize(formData.additionalNotes, 170)
    pdf.text(notesLines, 25, yPos)
    yPos += notesLines.length * 5
  }
  
  // Footer
  const pageHeight = pdf.internal.pageSize.height
  pdf.setFontSize(9)
  pdf.setTextColor(100, 100, 100)
  pdf.setFont('helvetica', 'italic')
  
  pdf.text('RJ Boutique | Bangalore, Karnataka, India', 105, pageHeight - 25, { align: 'center' })
  pdf.text('Phone: +91 95007 10139 | WhatsApp: +91 95007 10139', 105, pageHeight - 20, { align: 'center' })
  pdf.text('Materials will be similar to catalogue pictures shown', 105, pageHeight - 15, { align: 'center' })
  pdf.text('Generated on: ' + new Date().toLocaleString(), 105, pageHeight - 10, { align: 'center' })
  
  // Save
  pdf.save(`RJ-Boutique-Measurements-${formData.name.replace(/\s/g, '-')}-${Date.now()}.pdf`)
}