export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00A83B',
          dark: '#00782A',
          deep: '#005C20',
          tint: '#EEF8F1',
        },
        accent: {
          DEFAULT: '#FF8A00',
        },
        gold: '#FFB000',
        ink: '#222222',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
