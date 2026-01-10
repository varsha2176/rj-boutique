# RJ Boutique - Luxury Custom Designer Wear Website

**Tagline:** Designed for You. Stitched with Love.

A premium luxury editorial boutique website for custom-stitched designer clothing. Built with Next.js, Tailwind CSS, and Framer Motion.

---

## ✨ Features

- 🎨 **Luxury Editorial Design** - Magazine-style layouts with generous white space
- 💄 **Cherry Red Theme** - Elegant cherry lipstick red accent color
- 📱 **Fully Responsive** - Mobile-first design optimized for all devices
- 🛍️ **Custom Catalogues** - Women's wear, Kids & Baby, Pet wear collections
- 📸 **Manual Image Integration** - All images managed locally in public folder
- 💬 **WhatsApp Integration** - Direct ordering with pre-filled messages
- 📍 **Google Maps** - Embedded map for Bangalore, Karnataka location
- 🚚 **Pan India Delivery** - Courier service information throughout site
- ✨ **Smooth Animations** - Scroll-based animations using Framer Motion
- 🔍 **SEO Optimized** - Meta tags and semantic HTML

---

## 🎨 Color Palette

- **Ivory** (#FAF9F6) - Primary background
- **Beige** (#F5E6D3) - Soft accents
- **Charcoal** (#1C1C1C) - Primary text
- **Cherry Red** (#C1282D) - Logo & accent color (like cherry lipstick)
- **Blush** (#FFF5F0) - Subtle highlights
- **Rose Gold** (#C6A16E) - Secondary accent

---

## 📁 Project Structure

```
rj-boutique/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   │   └── rj-logo.png          ← YOUR LOGO (cherry red lipstick design)
│   │   ├── hero/
│   │   │   ├── hero-1.jpg           ← Main hero image
│   │   │   ├── hero-2.jpg
│   │   │   └── hero-3.jpg
│   │   ├── women/
│   │   │   ├── short-kurtis/ (1.jpg to 10.jpg)
│   │   │   ├── long-kurtis/ (1.jpg to 10.jpg)
│   │   │   ├── chudi-tops/ (1.jpg to 10.jpg)
│   │   │   ├── straight-cut-chudi/ (1.jpg to 10.jpg)
│   │   │   ├── umbrella-tops/ (1.jpg to 10.jpg)
│   │   │   ├── gowns/ (1.jpg to 10.jpg)
│   │   │   ├── skirts/ (1.jpg to 10.jpg)
│   │   │   ├── western-tops/ (1.jpg to 10.jpg)
│   │   │   ├── blouses/ (1.jpg to 10.jpg)
│   │   │   ├── designer-blouses/ (1.jpg to 10.jpg)
│   │   │   └── crop-tops/ (1.jpg to 10.jpg)
│   │   ├── kids/
│   │   │   ├── kids-gowns/ (1.jpg to 10.jpg)
│   │   │   └── baby-dresses/ (1.jpg to 10.jpg)
│   │   ├── pets/
│   │   │   ├── dog-dresses/ (1.jpg to 10.jpg)
│   │   │   └── cat-dresses/ (1.jpg to 10.jpg)
│   │   └── our-works/
│   │       ├── 1.jpg
│   │       ├── 2.jpg
│   │       └── ... (add your real stitched work photos)
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.js               ← Root layout with Navbar/Footer
│   │   ├── page.js                 ← Homepage
│   │   ├── globals.css             ← Global styles
│   │   ├── catalogue/
│   │   │   └── page.js             ← Catalogue page
│   │   ├── our-works/
│   │   │   └── page.js             ← Portfolio/Our Works
│   │   ├── about/
│   │   │   └── page.js             ← About page
│   │   └── contact/
│   │       └── page.js             ← Contact with Bangalore map
│   ├── components/
│   │   ├── Navbar.js               ← Fixed navigation (updated)
│   │   ├── Footer.js               ← Footer with logo
│   │   ├── Hero.js                 ← Hero section
│   │   ├── ProductCard.js          ← Product display card
│   │   └── WhatsAppButton.js       ← Floating WhatsApp button
│   ├── data/
│   │   └── products.js             ← Product data (manual images)
│   └── utils/
│       └── whatsapp.js             ← WhatsApp helper function
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js              ← Cherry red color added
├── postcss.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Clone or navigate to project:**
   ```bash
   cd rj-boutique
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add your images:**
   - Place your logo at `public/images/logo/rj-logo.png`
   - Add hero images to `public/images/hero/`
   - Add catalogue images following the folder structure
   - Add your real work photos to `public/images/our-works/`

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open browser:**
   Navigate to `http://localhost:3000`

---

## 📸 Image Guidelines

### Logo Image
- **File:** `public/images/logo/rj-logo.png`
- **Background:** #FAF9F6 (ivory/cream)
- **Design:** Cherry red lipstick icon with black text
- **Recommended size:** 200x60px (transparent PNG)
- **Adjust size in Navbar.js:** Change `h-12` class if needed

### Hero Images
- **Location:** `public/images/hero/`
- **Size:** 1920x1080px minimum
- **Format:** JPG or WebP
- **Quality:** High quality, compressed to 80%

### Catalogue Images
- **Size:** 800x1200px (3:4 aspect ratio)
- **Format:** JPG
- **Naming:** Sequential (1.jpg, 2.jpg, etc.)
- **Quality:** 85% compression

### Our Works Images
- **Size:** 800x1200px recommended
- **Format:** JPG
- **Real photos only:** Actual stitched work from your boutique

---

## 🎨 Customizing Cherry Red Color

If you want to adjust the cherry red shade, edit `tailwind.config.js`:

```javascript
colors: {
  cherryred: '#C1282D', // Change this hex code
}
```

---

## 📱 WhatsApp Integration

The website uses WhatsApp number: **+91 95007 10139**

To change it:
1. Search for `919500710139` in all files
2. Replace with your WhatsApp number (include country code without +)

---

## 🗺️ Google Maps Integration

The map is already set to **Bangalore, Karnataka, India** in `src/app/contact/page.js`.

To use your exact location:
1. Go to Google Maps
2. Find your exact location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `contact/page.js`

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "RJ Boutique website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"
   - Your site will be live in minutes!

### Build Locally (Test Production)

```bash
npm run build
npm run start
```

---

## ✅ Final Checklist Before Launch

- [ ] Logo added at `public/images/logo/rj-logo.png`
- [ ] All hero images added
- [ ] All catalogue images organized in folders
- [ ] Our Works photos added
- [ ] WhatsApp number updated everywhere
- [ ] Google Maps embedded with exact location
- [ ] Contact phone number verified
- [ ] Email address updated
- [ ] Social media links added (Instagram/Facebook)
- [ ] Tested on mobile devices
- [ ] Tested WhatsApp ordering flow
- [ ] SEO meta tags reviewed
- [ ] Favicon added

---

## 📞 Support

For any issues:
- **Phone:** +91 95007 10139
- **Email:** rj.boutique.jeya@gmail.com
- **Location:** Bangalore, Karnataka, India

---

## 📄 License

This project is created for RJ Boutique. All rights reserved.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**