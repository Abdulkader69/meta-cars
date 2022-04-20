module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        header: '0px 2px 8px rgba(69, 71, 82, 0.08);',
      },
      colors: {
        Primary: '#33A8FF',
        Primary2: '#0F84DF',
        Secondary: '#C7C7C7',
        Secondary2: '#D6D6D6',
        Secondary3: '#9DA5AC',
      },
    },
    maxWidth: {
      siteContainer: '119rem',
    },
  },
  plugins: [],
};
