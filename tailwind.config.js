const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      'primary-color': '#FFE600',
      'dark-color': '#333333',
      'dark-gray-color': '#666666',
      'gray-color': '#999999',
      'second-gray-color': '#ced3da',
      'white-gray-color': '#EEEEEE',
      'blue-color': '#3483FA',
      'white-color': '#FFFFFF',
    },
  },
  plugins: [],
};
