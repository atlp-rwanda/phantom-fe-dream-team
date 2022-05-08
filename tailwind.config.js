module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    screens: {
     

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
     

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xs': {'max':'414px'}
     
    },
    boxShadow: {
      a: '0px 3.67105px 0px #4378FF',
      b: ' 3.67105px 3.67105px 3.67105px #4378FF',},
      width: {
        '1/3': '30%',},
    extend: {},
  },
  }
