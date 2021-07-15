const colors = require('tailwindcss/colors');

module.exports = {
    purge: {
      content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
        './components/**/*.{js,ts,jsx,tsx}',
        './layout/**/*.{js,ts,jsx,tsx}',
        './helpers/**/*.{js,ts,jsx,tsx}'
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        DEFAULT: '.25rem',
        'lg': '.5rem',
        'full': '9999px',
      },
      opacity: {
        '0': '0',
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
        '100': '1',
      },
      screens: {
        'sm': '640px',    // => @media 'tablet' (min-width: 640px) { ... }
        'md': '1024px',   // => @media 'laptop' (min-width: 1024px) { ... }
        'ld': '1280px',  // => @media 'desktop' (min-width: 1280px) { ... }
      },
      extend: {
        spacing: {
          px: '1px',
          0: '0',
          0.5: '0.125rem',
          1: '0.25rem',
          1.5: '0.375rem',
          2: '0.5rem',
          2.5: '0.625rem',
          3: '0.75rem',
          3.5: '0.875rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          7: '1.75rem',
          8: '2rem',
          9: '2.25rem',
          10: '2.5rem',
          11: '2.75rem',
          12: '3rem',
          14: '3.5rem',
          16: '4rem',
          18: '4.5rem',
          20: '5rem',
          22: '5.5rem',
          24: '6rem',
          27: '6.75rem',
          28: '7rem',
          30: '7.5rem',
          31: '7.75rem',
          32: '8rem',
          33: '8.25rem',
          34: '8.5rem',
          35: '8.75rem',
          36: '9rem',
          38: '9.5rem',
          40: '10rem',
          44: '11rem',
          48: '12rem',
          50: '12.5rem',
          52: '13rem',
          56: '14rem',
          60: '15rem',
          64: '16rem',
          68: '17rem',
          70: '17.5rem',
          71: '17.75rem',
          72: '18rem',
          76: '19rem',
          80: '20rem',
          96: '24rem',

          gridTemplateColumns: {
            'experienceCols': '200px minmax(900px, 1fr)',

            // Simple 8 row grid
            '8': 'repeat(8, minmax(0, 1fr))',
            // Complex site-specific row configuration
           'layout': '200px minmax(900px, 1fr) 200px',
          },
        },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        gray: colors.gray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }