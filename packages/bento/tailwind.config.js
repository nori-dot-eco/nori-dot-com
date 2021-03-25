const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '4xl': ['4.5rem', '4.5rem'],
      '3xl': ['2.5rem', '2.5rem'],
      '2xl': ['1.75rem', '2.5rem'],
      xl: ['1.25rem', '1.75rem'],
      base: ['1rem', '1.5rem'],
      sm: ['0.875rem', '1.25rem'],
      xs: ['0.75rem', '1.25rem'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      red: {
        900: '#34050C',
        800: '#470810',
        700: '#6B1219',
        600: '#8F1B22',
        500: '#B00020',
        400: '#F9889C',
        300: '#FFA8B7',
        200: '#FFE3E8',
        100: '#FFF5F7',
      },
      blue: {
        900: '#14223C',
        800: '#132B58',
        700: '#173773',
        600: '#174190',
        500: '#0E45AC',
        400: '#AEC8F8',
        300: '#D2E0FA',
        200: '#EEF4FF',
        100: '#F5F8FE',
      },
      green: {
        900: '#0A1F15',
        800: '#1C442E',
        700: '#245E3C',
        600: '#1A723E',
        500: '#088F5A',
        400: '#B2F7D7',
        300: '#CEFAE6',
        200: '#EFFFF8',
        100: '#FAFFFD',
      },
      yellow: {
        900: '#453003',
        800: '#664D15',
        700: '#93680A',
        600: '#DEA31F',
        500: '#FBBB2C',
        400: '#F3D36D',
        300: '#F9DC9C',
        200: '#FFF3D9',
        100: '#FFFAF0',
      },
      orange: {
        900: '#4B2507',
        800: '#7B3B08',
        700: '#9E4615',
        600: '#CA6025',
        500: '#F46E23',
        400: '#FEAE6F',
        300: '#FBC5A7',
        200: '#FCECDE',
        100: '#FEFCFB',
      },
      teal: {
        900: '#072B34',
        800: '#0C4452',
        700: '#0D5E6B',
        600: '#01788B',
        500: '#058EA4',
        400: '#91C4D0',
        300: '#C2DFE5',
        200: '#E9F4F6',
        100: '#F6FAFB',
      },
      gray: {
        900: '#1F2123',
        800: '#383D45',
        700: '#4E525A',
        600: '#6A7079',
        500: '#888D96',
        400: '#D1D3D7',
        300: '#E4E7E9',
        200: '#FAFBFB',
        100: '#FFFFFF',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        hero: '80ch',
        header: '69ch',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'currentColor',
            a: {
              textDecoration: 'none',
              color: theme('colors.teal.700'),
              '&:hover': {
                color: theme('colors.teal.800'),
              },
            },
            h1: {
              fontSize: theme('fontSize.xl'),
              fontWeight: theme('fontWeight.bold'),
            },
            h2: {
              fontSize: theme('fontSize.base'),
              fontWeight: theme('fontWeight.bold'),
            },
            h3: {
              fontSize: theme('fontSize.sm'),
              fontWeight: theme('fontWeight.bold'),
            },
            h4: {
              fontSize: theme('fontSize.sm'),
              fontWeight: theme('fontWeight.bold'),
            },
            h5: {
              fontSize: theme('fontSize.sm'),
              fontWeight: theme('fontWeight.bold'),
            },
            h6: {
              fontSize: theme('fontSize.sm'),
              fontWeight: theme('fontWeight.bold'),
            },
            p: {
              fontWeight: theme('fontWeight.normal'),
            },
            'ol > li::before': {
              content:
                'counter(list-item, var(--list-counter-style, decimal)) "."',
              position: 'absolute',
              fontWeight: '400',
              color: theme('colors.gray.600', defaultTheme.colors.gray[600]),
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme(
                'colors.gray.600',
                defaultTheme.colors.gray[600]
              ),
              borderRadius: '50%',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
      padding: ['first'],
      backgroundColor: ['disabled', 'active'],
      placeholderColor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-textshadow'),
    require('@tailwindcss/forms'),
    plugin(({ addVariant, e }) => {
      addVariant('error', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`error${separator}${className}`)}:error`;
        });
      });
    }),
  ],
};
