module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': 'Inter, sans-serif',
      'marker': ['Permanent Marker' , 'cursive'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.6rem',
      '3xl': '1.75rem',
      '4xl': '2.25rem',
      '5xl': '2.5rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        gray: {
          '150': '#0B2253',
          '200': '#B3BECF',
          '250': '#DEE3EB',
          '300': '#F4F7FC',
          '350': '#6D7A98',
          '400': '#6D7A98'
        },
        blue: {
          '750': '#1F6AEC',
          '800': '#0B2253',
        },
      },
      width: {
        '98': '33rem'
      },
      spacing: {
        '1.7': '0.4rem',
        '9': '2.125rem',
        '15': '3.813rem',
        '65': '16.5rem',
        '33': '8.875rem',
        '13': '3.25rem'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}