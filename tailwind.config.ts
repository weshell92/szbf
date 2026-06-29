import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1115',
        paper: '#F4EFE6',
        bronze: '#B08D57',
        cinnabar: '#C2410C'
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Noto Serif SC', 'serif'],
        sans: ['var(--font-sans)', 'Noto Sans SC', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 80px rgba(0,0,0,0.22)'
      }
    }
  },
  plugins: []
};

export default config;
