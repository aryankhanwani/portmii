# Integration Guide: Adding Portmii Components to Your Existing Project

## 🎯 Quick Integration Steps

### 1. Install Required Dependencies

```bash
npm install lucide-react
# or
yarn add lucide-react
```

### 2. Copy Components

Copy the entire `components/` folder to your existing Next.js project:

```
your-project/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── ExamplePage.tsx
│   ├── Pricing.tsx
│   ├── EnterpriseReferral.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
```

### 3. Update Tailwind Configuration

Add these configurations to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
        'geist': ['Geist', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'instrument-serif': ['Instrument Serif', 'serif'],
        'merriweather': ['Merriweather', 'serif'],
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
        'pt-serif': ['PT Serif', 'serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        'space-mono': ['Space Mono', 'monospace'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      animation: {
        'fade-slide-in': 'fadeSlideIn 0.8s ease-out 0.2s forwards',
      },
      keyframes: {
        fadeSlideIn: {
          'from': { opacity: '0', filter: 'blur(8px)', transform: 'translateY(16px)' },
          'to': { opacity: '1', filter: 'blur(0)', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
```

### 4. Add Font Imports

Add these Google Fonts imports to your `globals.css` or `_app.tsx`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap');
```

### 5. Use Components in Your Pages

```tsx
// pages/index.tsx or app/page.tsx
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ExamplePage from '@/components/ExamplePage'
import Pricing from '@/components/Pricing'
import EnterpriseReferral from '@/components/EnterpriseReferral'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      <Header />
      <Hero />
      
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>
      
      <Features />
      
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>
      
      <ExamplePage />
      
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>
      
      <Pricing />
      
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>
      
      <EnterpriseReferral />
      
      <CTA />
      <Footer />
    </div>
  )
}
```

## 🎨 Customization Options

### Color Schemes
Modify gradient colors in component style props:

```tsx
// Example: Change primary gradient
style={{background: 'linear-gradient(180deg, rgb(59, 130, 246) 0%, rgb(147, 51, 234) 100%)'}}
```

### Content Updates
- **Text**: Edit content directly in component files
- **Links**: Update href attributes to match your routing
- **Images**: Replace image URLs with your own assets

### Layout Adjustments
- **Spacing**: Modify padding/margin using Tailwind classes
- **Grid**: Adjust grid layouts for different screen sizes
- **Sections**: Add/remove sections as needed

## 🔧 Advanced Integration

### Adding State Management
```tsx
// Example: Add React state for mobile menu
const [isMenuOpen, setIsMenuOpen] = useState(false)
```

### Adding Analytics
```tsx
// Example: Add Google Analytics tracking
useEffect(() => {
  gtag('event', 'page_view', {
    page_title: 'Portmii Landing Page',
    page_location: window.location.href,
  })
}, [])
```

### Adding Form Handling
```tsx
// Example: Add form submission
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // Handle form submission
}
```

## 🚀 Deployment Considerations

### Performance Optimization
- **Image Optimization**: Use Next.js Image component for better performance
- **Font Loading**: Consider using `next/font` for better font loading
- **Code Splitting**: Components are automatically code-split by Next.js

### SEO Optimization
- **Meta Tags**: Update metadata in `layout.tsx` or `_app.tsx`
- **Structured Data**: Add JSON-LD structured data for better SEO
- **Sitemap**: Generate sitemap for better crawling

### Analytics Integration
- **Google Analytics**: Add GA4 tracking
- **Hotjar**: Add user behavior tracking
- **Mixpanel**: Add event tracking

## 🐛 Troubleshooting

### Common Issues

1. **Icons not showing**: Ensure `lucide-react` is installed
2. **Styles not applying**: Check Tailwind configuration
3. **Fonts not loading**: Verify Google Fonts imports
4. **Build errors**: Check TypeScript configuration

### Performance Issues

1. **Slow loading**: Optimize images and fonts
2. **Large bundle**: Use dynamic imports for heavy components
3. **CLS issues**: Add proper image dimensions

## 📞 Support

For integration help or custom modifications:
- Check the component documentation
- Review Tailwind CSS documentation
- Contact: support@portmii.com

