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
        border: '#DBE8EB',
        eyebrow: '#535353',
        'footer-bg': '#11647B',
        'footer-bg-signup': '#125367',
        'utility-menu': '#11647B',
      },
      interactive: {
        primary: '#27D8A3',
        'primary-active': '#007A53',
        'primary-hover': '#006042',
        'primary-selected': '#006042',
        secondary: '#212121',
      },
    },
    extend: {
      spacing: {
        4.5: '1.125rem',
        15: '5rem'
      },
      padding: {
        5.25: '5.25rem'
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
        'footer-wave': 'url(\'__dxp__/assets/image/footer-desktop.svg\')',
        'mobile-wave-top': 'url(\'__dxp__/assets/image/mobile-footer-up.png\')',
        'mobile-wave-bottom': 'url(\'__dxp__/assets/image/mobile-footer-down.png\')',
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
        '.footer-wave-test': {
          maskImage: 'url(\'__dxp__/assets/image/footer-desktop.svg\')',
          maskPosition: 'top center',
          maskSize: '100%',
        },
      });
    }),
  ],
};

module.exports = getPackageTailwindConfig({
  twConfig,
  resolver,
});
