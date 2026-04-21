/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tokyo': {
          'bg': '#1A1B26',
          'bg-dark': '#13141C',
          'surface': '#1E1F2B',
          'surface-light': '#24253A',
          'border': '#2F3049',
          'text': '#C0CAF5',
          'text-muted': '#565F89',
          'blue': '#7AA2F7',
          'green': '#9ECE6A',
          'purple': '#BB9AF7',
          'orange': '#FF9E64',
          'red': '#F7768E',
          'cyan': '#7DCFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
