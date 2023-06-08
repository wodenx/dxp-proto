import { getPackageTailwindConfig } from '@bodiless/fclasses';

const plugin = require('tailwindcss/plugin');

const resolver = (pkgName) => require.resolve(pkgName);

const { color } = require('./assets/design-tokens.nested.json');

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
    colors: color,
    extend: {
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        15: '5rem'
      },
      lineHeight: {
        4.25: '1.063rem',
        4.75: '1.188rem',
        5.5: '1.375rem',
      },
      padding: {
        4.75: '1.3125rem',
        6.5: '1.625rem',
        20.25: '5.25rem'
      },
      maxWidth: {
        logo: '7.1875rem'
      },
      fontFamily: {
        knockout: ['Knockout', 'sans-serif'],
        gotham: ['"Gotham HTF"', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', '1.125rem'],
        base: ['1rem', '1.375rem'],
        lg: ['1.125rem', '1.5rem'],
        xl: ['1.3125rem', '1.5rem'],
        '2xl': ['1.625rem', '2rem'],
        '3xl': ['2rem', '2.125rem'],
        '4xl': ['2.5625rem', '2.75rem'],
        '5xl': ['3.625rem', '3.75rem'],
        'm-sm': ['0.6875rem', '0.9375rem'],
        'm-base': ['0.875rem', '1.125rem'],
        'm-lg': ['1rem', '1.25rem'],
        'm-xl': ['1.375rem', '1.625rem'],
        'm-2xl': ['1.4375rem', '1.625rem'],
        'm-3xl': ['1.75rem', '1.875rem'],
        'm-4xl': ['2.0625rem', '2.25rem'],
        'm-5xl': ['2.5rem', '2.5rem'],
      },
      backgroundImage: {
        'mobile-wave-top': "url('@kenvue/listerine/assets/image/mobile-footer-up.png')",
        'mobile-wave-bottom': "url('@kenvue/listerine/assets/image/mobile-footer-down.png')",
      },
      backgroundSize: {
        'wave-full': '100% 100%',
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents }) => {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Gotham HTF',
            fontWeight: 300,
            src: "url('@kenvue/listerine/assets/font/GothamHTF-Book.otf') format('opentype')",
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham HTF',
            fontWeight: 500,
            src: "url('@kenvue/listerine/assets/font/GothamHTF-Medium.otf') format('opentype')",
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham HTF',
            fontWeight: 700,
            src: "url('@kenvue/listerine/assets/font/GothamHTF-Bold.otf') format('opentype')",
          },
        },
        {
          '@font-face': {
            fontFamily: 'Knockout',
            src: "url('@kenvue/listerine/assets/font/Knockout.otf') format('opentype')",
          },
        },
      ]);
      addComponents({
        '.footer-wave': {
          maskImage: "url('@kenvue/listerine/assets/image/footer-desktop.svg')",
          maskPosition: 'top center',
          maskSize: '100%',
        },
        '.card-corner': {
          width: 'calc(100% - 60px)',
          height: '18rem',
          float: 'right',
          'border-radius': '0 0 0 150px',
          'object-fit': 'cover',
          'object-position': 'center',
        },
        '.card-corner-md': {
          // width: '50%',
          height: '31rem',
          'border-radius': '0 0 0 150px',
          'object-position': '72%',
        },
        '.card-corner-lg': {
          width: '100%',
          height: '38rem',
          float: 'none',
          'border-radius': '0 0 0 400px',
        },
      });
    }),
  ],
};

module.exports = getPackageTailwindConfig({
  twConfig,
  resolver,
});
