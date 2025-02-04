/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xsm': '320px',
        'sm': '573px',
        'tab': '650px',
        'md': '1024px',
        'lg': '1100px',
        'xl': '1280px',
        '2xl': '1536px',
      }, 
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        playflair: ['Playfair Display', 'serif']
      },
      fontWeight: {
        'hairline': 100,
        'extralight': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0em',
        wide: '.025em',
        wider: '.05em',
        widest: '.075em',
      },
      lineHeight: {
        tight: 1.1,
        snug: 1.3,
        normal: 1.5,
        relaxed: 1.6,
        loose: 2,
      }
    },
  },
  plugins: [],
}

