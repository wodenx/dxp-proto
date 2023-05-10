import { getPackageTailwindConfig } from '@bodiless/fclasses';

const plugin = require('tailwindcss/plugin');

const resolver = (pkgName) => require.resolve(pkgName);

const twConfig = {
  content: ['./lib/**/!(*.d).{ts,js,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px', // => @media (min-width: 640px) { ... }
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '1024px', // => @media (min-width: 1024px) { ... }
      xl: '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1440px', // => @media (min-width: 1440px) { ... }
      '3xl': '1600px', // => @media (min-width: 1600px) { ... }
    },
    colors: {
      primary: {
        brand: '#0059A3',
        'card-bg': '#F1F3F8',
        'page-bg': '#FFFFFF',
        divider: '#C0C0C0',
        'body-copy': '#000000',
        'header-copy': '#333F48',
      },
      secondary: {
        background: '#FAFAFA',
        'footer-bg': '#F1F3F8',
      },
      interactive: {
        primary: '#0059A3',
        'primary-active': '#003160',
        'primary-hover': '#003160',
        'primary-selected': '#003160',
      },
    },
    extend: {
      spacing: {
        7.5: '1.875rem',
        10.5: '3.125rem',
        12.5: '2.625rem',
        18: '4.5rem',
        21: '5.25rem',
        40.5: '10.125rem',
      },
      margin: {
        '-90': '-4rem',
      },
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
        abril: ['Abril', 'arial'],
      },
      fontSize: {
        xs: ['0.625rem', '1rem'],
        sm: ['0.75rem', '1.125rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.625rem', '2rem'],
        '2xl': ['2rem', '2.25rem'],
        '3xl': ['2.5625rem', '2.8125rem'],
        'm-xs': ['0.625rem', '1rem'],
        'm-sm': ['0.75rem', '1.125rem'],
        'm-base': ['0.875rem', '1.25rem'],
        'm-lg': ['1rem', '1.5rem'],
        'm-xl': ['1.4375rem', '1.75rem'],
        'm-2xl': ['1.8125rem', '2rem'],
        'm-3xl': ['2rem', '2.5rem'],
      },
      maxWidth: {
        30: '7.5rem',
        36: '9rem',
        logo: '7.5rem',
        logodesktop: '13.5rem',
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Gotham',
            fontWeight: 300,
            src: "url('@kenvue/lactaid/assets/font/GothamBook.woff2') format('woff2')",
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            fontWeight: 500,
            src: "url('@kenvue/lactaid/assets/font/GothamMedium.woff2') format('woff2')",
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            fontWeight: 700,
            src: "url('@kenvue/lactaid/assets/font/GothamBold.woff2') format('woff2')",
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham',
            fontWeight: 900,
            src: "url('@kenvue/lactaid/assets/font/GothamBlack.woff2') format('woff2')",
          },
        },
        {
          '@font-face': {
            fontFamily: 'Abril',
            src: "url('@kenvue/lactaid/assets/font/AbrilRegular.woff2') format('woff2')",
          },
        },
      ]);
    }),
  ],
};

module.exports = getPackageTailwindConfig({
  twConfig,
  resolver,
});
