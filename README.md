# Portmii Next.js Project

This is a complete Next.js conversion of the Portmii landing page, built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portmii-nextjs/
├── app/
│   ├── layout.tsx          # Root layout component
│   └── page.tsx             # Main homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features grid
│   ├── ExamplePage.tsx      # Example page section
│   ├── Pricing.tsx          # Pricing plans
│   ├── EnterpriseReferral.tsx # Enterprise referral section
│   ├── CTA.tsx              # Call-to-action section
│   └── Footer.tsx           # Footer component
├── styles/
│   └── globals.css          # Global styles and Tailwind imports
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Features

- **Modern React Architecture**: Built with Next.js 14 and React 18
- **TypeScript Support**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React Icons**: Beautiful, customizable icons
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Component-Based**: Modular, reusable React components
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📱 Components Overview

### Header
- Sticky navigation with backdrop blur
- Responsive mobile menu
- Gradient CTA button

### Hero
- Animated fade-in effect
- Gradient text effects
- Call-to-action buttons

### Features
- 6 feature cards with hover effects
- Gradient backgrounds
- Interactive elements

### Pricing
- 3-tier pricing structure
- Gradient highlights
- Feature comparison

### Enterprise Referral
- Referral program information
- Card-based layout
- Stripe integration mentions

## 🎯 Integration Guide

### Adding to Existing Project

1. **Copy the components folder** to your existing Next.js project
2. **Install required dependencies:**
   ```bash
   npm install lucide-react
   ```

3. **Update your Tailwind config** to include the custom fonts and animations:
   ```javascript
   // Add to tailwind.config.js
   module.exports = {
     content: [
       './pages/**/*.{js,ts,jsx,tsx,mdx}',
       './components/**/*.{js,ts,jsx,tsx,mdx}',
       './app/**/*.{js,ts,jsx,tsx,mdx}',
     ],
     theme: {
       extend: {
         fontFamily: {
           'inter': ['Inter', 'ui-sans-serif', 'system-ui'],
           // ... other fonts
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
   }
   ```

4. **Import components** in your pages:
   ```tsx
   import Header from '@/components/Header'
   import Hero from '@/components/Hero'
   // ... other imports
   ```

### Customization

- **Colors**: Modify gradient colors in component style props
- **Content**: Update text content directly in component files
- **Layout**: Adjust spacing and sizing using Tailwind classes
- **Fonts**: Add/remove fonts in `tailwind.config.js` and `globals.css`

### Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended for Next.js):
   ```bash
   npx vercel
   ```

3. **Or deploy to other platforms:**
   - Netlify
   - AWS Amplify
   - Railway
   - DigitalOcean App Platform

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

No environment variables are required for basic functionality. Add your own as needed for:
- Analytics tracking
- Contact form endpoints
- API integrations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: support@portmii.com
- Website: [portmii.com](https://portmii.com)

