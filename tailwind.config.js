module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        md: '16px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      fontWeight: {
        400: '400',
        700: '700',
      },
      colors: {
        primary: {
          pink: 'hsl(322, 100%, 66%)',
          verypalecyan: 'hsl(193, 100%, 96%)',
          verydarkcyan: 'hsl(192, 100%, 9%)',
          grayishblue: 'hsl(208, 11%, 55%)',
        },
      },
      boxShadow: {
        s1: 'rgba(17, 17, 26, 0.1) 0px 0px 8px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
