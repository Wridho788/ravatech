/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        // Palet warna Ravatech
        navy: '#0A0F2C',       // Background utama
        cyan: '#00FFFF',       // Warna aksen
        purple: '#A259FF',     // Aksen sekunder
        softgray: '#C0C4D6',   // Teks sekunder
        white: '#FFFFFF',      // Teks utama
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        glow: '0 0 8px #00FFFF',
      },
    },
  },
  plugins: [],
}
export default config
