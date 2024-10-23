/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f4f9f4', 
        secondary: '#a8cda8',
        
    },
  },
  plugins: [],
}
}
