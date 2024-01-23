/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black": "#222",
        "white": "#fcfcff",
        "bg": '#e5e8ec',
        'blue-light': '#dee8f6',
        'blue-medium': '#2060c2',
        'blue-dark': '#19335C',
        'blue-desaturated': '#4D4D59'
      }
    },
  },
  corePlugins: {
    preflight: true
  },
  plugins: [],
}

