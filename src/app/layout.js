import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'RJ Boutique - Luxury Custom Designer Wear | Bangalore',
  description: 'RJ Boutique offers custom-stitched designer clothing for women, kids, and pets. Perfect fitting, personalized designs, affordable luxury. Based in Bangalore, India.',
  keywords: 'custom designer wear, boutique Bangalore, custom stitching, women designer clothes, kids wear, pet clothes, custom tailoring',
  openGraph: {
    title: 'RJ Boutique - Luxury Custom Designer Wear',
    description: 'Personalized designer boutique offering custom-stitched clothing with perfect fitting',
    images: ['/images/hero/hero-1.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}