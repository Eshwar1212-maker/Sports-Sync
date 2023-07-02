/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth': 'https://images.template.net/114624/free-falling-basketball-background-ff026.jpeg'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class'
    })
  ],
}
