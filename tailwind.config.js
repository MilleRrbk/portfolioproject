/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      mainBlack: '#16100F',
      mainText: '#F3EAE4',
      mainAccent: '#FF4E8F',
      },
    },
  },
  plugins: [],
}

