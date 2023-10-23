/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      white:"#fff",
      titremini:"#9899a1",
      text:"#6d707b",
      yellowOrange:"#f1b95b",
      hover:"#6d707b",
      section1:"#333646",
      section2:"#252734",
      boxesdefault:"#424657",
      underline:"#3b3d48"
    },
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-banner': "url('/img/Banner.png')"
      },
    },
  },
  plugins: [],
}
