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

