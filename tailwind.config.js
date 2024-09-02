/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      color: {
        primary_1: 'hsl(14, 86%, 42%)',
        primary_2: 'hsl(159, 69%, 38%)',
        secondary_50: 'hsl(20, 50%, 98%)',
        secondary_100: 'hsl(13, 31%, 94%)',
        secondasry_300: 'hsl(14, 25%, 72%)',
        secondary_400: 'hsl(7, 20%, 60%)',
        secondary_500: 'hsl(12, 20%, 44%)',
        secondasry_900: 'hsl(14, 65%, 9%)',
      },
    },
  },
  plugins: [],
};
