/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-fg': 'rgb(var(--accent-fg) / <alpha-value>)',
        'syn-kw': 'rgb(var(--syn-kw) / <alpha-value>)',
        'syn-str': 'rgb(var(--syn-str) / <alpha-value>)',
        'syn-num': 'rgb(var(--syn-num) / <alpha-value>)',
        'syn-prop': 'rgb(var(--syn-prop) / <alpha-value>)',
        'syn-pun': 'rgb(var(--syn-pun) / <alpha-value>)',
        'syn-var': 'rgb(var(--syn-var) / <alpha-value>)',
        'syn-fn': 'rgb(var(--syn-fn) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
      },

      extend: {
        screens: {
          "4k": "1980px",
        },
      },
    },
  },
  plugins: [],
}
