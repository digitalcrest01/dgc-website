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
          DEFAULT: '#D2B576',
          50: '#FAF5E8',
          100: '#F1E6C5',
          200: '#E2CD90',
          300: '#D2B576',
          400: '#D2B576',
          500: '#C3A463',
          600: '#A88846',
          700: '#856A35',
        },
        ink: {
          DEFAULT: '#080C18',
          900: '#04060E',
          800: '#080C18',
          700: '#0E1426',
          600: '#151D34',
          500: '#1F2848',
          400: '#2A3866',
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
        'grid-ink':
          'linear-gradient(to right, rgba(242,236,220,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,236,220,0.05) 1px, transparent 1px)',
        'grid-cream':
          'linear-gradient(to right, rgba(242,236,220,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,236,220,0.06) 1px, transparent 1px)',
        'grid-navy':
          'linear-gradient(to right, rgba(242,236,220,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,236,220,0.05) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at center, rgba(210,181,118,0.20) 0%, transparent 60%)',
        'aurora':
          'radial-gradient(60% 50% at 20% 0%, rgba(210,181,118,0.20) 0%, transparent 60%), radial-gradient(50% 50% at 85% 30%, rgba(31,51,97,0.5) 0%, transparent 60%)',
      },
      boxShadow: {
        'glow-gold': '0 0 0 1px rgba(210,181,118,0.35), 0 10px 40px -10px rgba(210,181,118,0.35)',
        'glow-soft': '0 1px 0 0 rgba(242,236,220,0.04) inset, 0 20px 60px -20px rgba(0,0,0,0.6)',
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
        'scroll-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0.25' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        marquee: 'marquee 40s linear infinite',
        'scroll-up': 'scroll-up 30s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        blink: 'blink 1.1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
