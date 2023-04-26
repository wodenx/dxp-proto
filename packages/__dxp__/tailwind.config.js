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
        brand: '#105367',
        'card-bg': '#EFF8FA',
        'page-bg': '#F8FFFF',
        divider: '#D8D8D8',
        'body-copy': '#222222',
        'header-copy': '#333333',
      },
      secondary: {
        eyebrow: '#535353',
        'footer-bg': '#105367',
        'footer-bg-signup': '#11647A',
        border: '#DBE8EB',
      },
      interactive: {
        primary: '#5BF4C6',
        'primary-active': '#007A53',
        'primary-hover': '#006042',
        'primary-selected': '#006042',
        secondary: '#212121',
        'tertiary-hover': '#27D8A3',
      },
    },
    extend: {
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        15: '5rem'
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
      }
    },
  },
  plugins: [
    plugin(({ addBase, addComponents }) => {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Gotham HTF',
            fontWeight: 300,
            src: "url('--dxp--/assets/font/GothamHTF-Book.otf') format('opentype')",
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham HTF',
            fontWeight: 500,
            src: "url('--dxp--/assets/font/GothamHTF-Medium.otf') format('opentype')",
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gotham HTF',
            fontWeight: 700,
            src: "url('--dxp--/assets/font/GothamHTF-Bold.otf') format('opentype')",
          },
        },
        {
          '@font-face': {
            fontFamily: 'Knockout',
            src: "url('--dxp--/assets/font/Knockout.otf') format('opentype')",
          },
        },
      ]);
      addComponents({
        '.card-corner': {
          width: 'calc(100% - 60px)',
          'margin-left': '20px',
          float: 'right',
          'border-radius': '0 0 0 150px',
          'object-fit': 'cover',
          'object-position': 'center',
        },

        // @TODO make card-corner responsive and be bigger on larger screens
        // @include media-breakpoint-up(sm) {
        //   height: 20rem; //  think it should be deleted
        //   border-radius: 0 0 0 200px;
        // }

        // @include media-breakpoint-up(md) {
        //   width: 50%;
        //   height: 31rem;  //  think it should be deleted
        //   border-radius: 0 0 0 150px;
        //   object-position: 72%;
        // }

        // @include media-breakpoint-up(lg) {
        //   width: 100%;
        //   height: 38rem; //  think it should be deleted
        //   float: none;
        //   border-radius: unset;
        // }
        
      });
    }),
  ],
};

module.exports = getPackageTailwindConfig({
  twConfig,
  resolver,
});
