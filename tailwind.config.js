/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-green': '#F0F8F0',
        'dark-blue' : '#25A6E0',
        'light-blue' : '#BDE8FC',

      },
      fontFamily: {
        waterfall: ['Waterfall', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
