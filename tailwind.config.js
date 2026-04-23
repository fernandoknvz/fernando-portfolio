/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        panel: 'rgb(var(--panel) / <alpha-value>)',
        elevated: 'rgb(var(--elevated) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        subtle: 'rgb(var(--subtle) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        navbar: 'rgb(var(--navbar) / <alpha-value>)',
        heroTitle: 'rgb(var(--hero-title) / <alpha-value>)',
        heroSubtitle: 'rgb(var(--hero-subtitle) / <alpha-value>)',
        shadow: 'rgb(var(--shadow) / <alpha-value>)',
        accentForeground: 'rgb(var(--accent-foreground) / <alpha-value>)',
        white: 'rgb(var(--foreground) / <alpha-value>)',
        onAccent: 'rgb(var(--accent-foreground) / <alpha-value>)',
        noir: {
          950: 'rgb(var(--color-noir-950) / <alpha-value>)',
          900: 'rgb(var(--color-noir-900) / <alpha-value>)',
          800: 'rgb(var(--color-noir-800) / <alpha-value>)',
          700: 'rgb(var(--color-noir-700) / <alpha-value>)',
          600: 'rgb(var(--color-noir-600) / <alpha-value>)',
          500: 'rgb(var(--color-noir-500) / <alpha-value>)',
        },
        crimson: {
          DEFAULT: '#c8102e',
          light: '#e8142e',
          dark: '#9a0c23',
          glow: 'rgba(200, 16, 46, 0.25)',
        },
        jade: {
          DEFAULT: '#00c471',
          light: '#00e883',
          dark: '#009955',
          glow: 'rgba(0, 196, 113, 0.2)',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), 
                         linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
