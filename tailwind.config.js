

module.exports = {
  boxShadow: {
    xs: '0px 3.67105px 0px #4378FF',
    xl: ' 3.67105px 3.67105px 3.67105px #4378FF',},
    width: {
      '1/3': '30%',},
      colors: {
        'blue': '#1442A7',
        'white': '#FFFFFF',
        'red':'#FF0000',
        'green':'#008000'
      },
  
  extend: {},
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    screens: {
      'xxs': '443px', 
      // => @media (min-width: 443px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
  }
  }
  

