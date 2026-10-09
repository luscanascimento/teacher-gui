/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'british-red': {
          DEFAULT: '#9E2A2B',
          dark: '#7D1F20',
          darker: '#5F1415',
          light: '#B63536',
          subtle: '#FAF0F0',
        },
        'british-blue': {
          DEFAULT: '#1C2A39',
          dark: '#121D28',
          light: '#283B4F',
          subtle: '#EFF3F7',
        },
        'british-cream': {
          DEFAULT: '#F4F1EA',
          light: '#FAF8F5',
          dark: '#E5DFD1',
        },
        'british-camel': {
          DEFAULT: '#DDA15E',
          light: '#E7B477',
          dark: '#C78C45',
        },
        'british-grey': {
          DEFAULT: '#7D8597',
          light: '#A3AAB9',
          dark: '#585F70',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"DM Serif Display"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(28, 42, 57, 0.15)',
        'editorial-red': '0 20px 40px -15px rgba(158, 42, 43, 0.25)',
        'card': '0 8px 30px rgba(28, 42, 57, 0.08)',
        'card-hover': '0 16px 40px rgba(28, 42, 57, 0.12)',
        'stamp': '0 4px 14px rgba(158, 42, 43, 0.2)',
      },
      borderRadius: {
        'editorial': '1.25rem',
      },
      letterSpacing: {
        'tightest': '-0.035em',
        'vintage': '0.12em',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
