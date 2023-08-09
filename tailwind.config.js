/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: ["light", "dark", "night"],
  },
  theme: {
    extend: {
      spacing: {
        '100': '25rem',
        '106': '26.5rem',
        '112' : '28rem',
        '128': '32rem',
      },
      maxWidth:{
        '90': '90%'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin'),    require('@tailwindcss/typography'),],
}
