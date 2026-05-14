import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F2ECDC',
          50: '#FBF8F0',
          100: '#F7F2E5',
          200: '#F2ECDC',
          300: '#E8DEC4',
          400: '#D8C99E',
        },
        navy: {
          DEFAULT: '#0E1F40',
          50: '#E7EAF1',
          100: '#C2C9D8',
          200: '#8A95B0',
          300: '#4E5C82',
          400: '#1F3361',
          500: '#0E1F40',
          600: '#0A1832',
          700: '#071126',
          800: '#050B1A',
          900: '#020610',
        },
        gold: {
          DEFAULT: '#C3A463',
          50: '#FAF5E8',
          100: '#F1E6C5',
          200: '#E2CD90',
          300: '#D2B576',
          400: '#C3A463',
          500: '#A88846',
          600: '#856A35',
          700: '#5F4C26',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'grid-navy':
          'linear-gradient(to right, rgba(14,31,64,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,31,64,0.08) 1px, transparent 1px)',
        'grid-cream':
          'linear-gradient(to right, rgba(242,236,220,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,236,220,0.06) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at center, rgba(195,164,99,0.18) 0%, transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        marquee: 'marquee 40s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
