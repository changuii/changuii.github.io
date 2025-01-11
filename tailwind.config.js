/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '4px 6px 6px rgba(0, 0, 0, 0.6), -6px -6px 6px rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
}

