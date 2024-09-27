/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        slideInDown: 'slideInDown 0.3s ease-out',
        slideOutUp: 'slideOutUp 0.3s ease-in',
      },
      keyframes: {
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideOutUp: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 },
        },
      },

      screens: {
        'fine-pointer': { raw: '(pointer: fine)' },
        'coarse-pointer': { raw: '(pointer: coarse)' },
        'can-hover': { raw: '(hover: hover)' },
        'no-hover': { raw: '(hover: none)' },
      },

      colors: {
        veryDarkBlue: '#1b1D23',
        darkGrey: '#60636d',
        mediumGrey: '#7d828f',
        lightGrey: '#c8ccd8',
        veryLightGrey: '#eeeff4',
        red: '#df5656',
        redOpacity: 'hsla(0, 68%, 61%, 0.4)',
        blackOpacity: 'hsla(0, 0%, 0%, 0.5)',
        greyLayer: 'rgba(0, 0, 0, 0.37)',
      },

      // Typography
      fontSize: {
        '150xl': ['150px', '200px'],
        '200xl': ['200px', '200px'],
        '250xl': ['250px', '200px'],
      },

      lineHeight: {
        11: '44px',
        12: '48px',
        13: '52px',
        14: '56px',
        15: '60px',
        16: '64px',
        17: '68px',
        18: '72px',
        19: '76px',
        20: '80px',

        200: '200px',
      },

      // spacing
      margin: {
        18: '72px',
      },

      // flexbox & grid
      gap: {
        26: '104px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
