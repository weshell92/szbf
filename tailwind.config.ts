import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f1115',
        paper: '#f4efe6',
        bronze: '#b08d57',
        cinnabar: '#c2410c'
      },
      fontFamily: {
        serifcn: ['Noto Serif SC', 'Songti SC', 'SimSun', 'serif'],
        sanscn: ['Noto Sans SC', 'Microsoft YaHei', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
