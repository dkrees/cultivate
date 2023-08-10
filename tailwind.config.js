/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Extend colors with custom a color palette.
      // By default these colors will be made available everywhere in the framework like text color, border color and background color
      colors: {
        'primary': '#2BB3BB',
        'secondary': '#EF8547',
        'accent': '#C41565',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('autoprefixer'),
  ],
}
