# Simlife - Coming Soon Landing Page

A premium, futuristic "Coming Soon" landing page for a high-end supplement brand. Built with Next.js, TailwindCSS, Framer Motion, and GSAP.

## 🚀 Features

- **Premium Design**: Dark matte background with lavender-themed accents
- **Advanced Animations**: Framer Motion for component animations, GSAP for scroll effects
- **Custom Cursor**: Lavender glow cursor with hover effects (desktop only)
- **Real-time Countdown**: Dynamic countdown timer with smooth number transitions
- **Email Capture**: Glassmorphism input with animated success states
- **3D Elements**: Floating capsule animations
- **Particle Effects**: Animated background particles
- **Light Streaks**: Subtle animated light effects
- **Fully Responsive**: Optimized for all screen sizes
- **Performance Optimized**: Smooth 60fps animations

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** - Component animations
- **GSAP** - Advanced scroll effects
- **Three.js** - 3D elements (optional)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design System

### Colors
- **Deep Lavender**: `#7C6BFF`
- **Electric Lavender**: `#9F8CFF`
- **Midnight Purple**: `#1C1B2E`
- **Matte Black**: `#0F0F14`
- **Soft White**: `#F5F5FA`

### Typography
- **Font**: Inter (Google Fonts)
- **Headlines**: Bold, uppercase, letter-spaced
- **Body**: Light, clean, minimal

## 📱 Sections

1. **Hero Section**: Full-screen with animated logo and tagline
2. **Countdown**: Real-time countdown with glassmorphism cards
3. **Email Capture**: Frosted input with glow effects
4. **Brand Teaser**: 3 feature blocks with scroll animations
5. **Performance**: 4 performance highlights
6. **Footer**: Social links and contact info

## 🎯 Customization

### Update Launch Date
Edit `components/Countdown.tsx`:
```typescript
const LAUNCH_DATE = new Date('2024-12-31T23:59:59').getTime()
```

### Update Brand Name
Edit `components/Hero.tsx`:
```typescript
SIMLIFE // Change to your brand name
```

### Update Contact Email
Edit `components/Footer.tsx`:
```typescript
hello@simlife.com // Change to your email
```

## 🌐 Deployment

This project is ready to deploy on:
- **Vercel** (recommended)
- **Netlify**
- **Any Node.js hosting**

## 📝 Notes

- Custom cursor is disabled on mobile/touch devices
- All animations are optimized for performance
- GSAP ScrollTrigger is loaded dynamically for better performance
- Particle effects use Canvas API for smooth rendering

## 🚧 Future Enhancements

- Three.js 3D supplement capsule in hero
- Email integration (backend API)
- Analytics integration
- A/B testing capabilities
- Multi-language support

---

Built with ❤️ for a premium brand experience.
