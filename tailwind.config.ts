import type { Config } from 'tailwindcss'

export default <Config>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        warm: {
          50: '#fdf8f0',
          100: '#f9edda',
          200: '#f2d7b4',
          300: '#e9bb84',
          400: '#df9952',
          500: '#d78033',
          600: '#c96828',
          700: '#a74f23',
          800: '#864023',
          900: '#6d361f',
          950: '#3b1a0e',
        },
      },
    },
  },
}
