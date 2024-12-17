
/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {



    screens: {


      'xs': '350px',
      // => @media (min-width: 480px) { ... }
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'tablet': '600px',
      // => @media (min-width: 768px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1366px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  corePlugins: {
    extend: {
      zIndex: {
        '-10': '-10',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
         '60': '60',
         '70': '70',
         '80': '80',
         '90': '90',
        '100': '100',

      },
      fontFamily: {
        'body': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
        'sans': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),

  ],

  daisyui: {
    themes: false,
  },
}