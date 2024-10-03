/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
       'primary-bg-color': 'var(--primary-bg-color)',
        'secundary-bg-color': 'var(--secundary-bg-color)',
        'third-bg-color': 'var(--third-bg-color)',
        'fourth-bg-color': 'var(--fourth-bg-color)',
        'primary-text-color': 'var(--primary-text-color)',
        'cancel-text-color': 'var(--cancel-text-color)',
    },
  },
},
  plugins: [],
};
