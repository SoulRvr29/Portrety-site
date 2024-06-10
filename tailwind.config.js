/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bkg": "#263041",
        "dark-text": "#ebe2df",
        "dark-accent": "#4a768d",
        "dark-accent-2": "#ff7a90",
        "dark-accent-3": "#ec4c56",
        "light-bkg": "#b8a7aa",
        "light-text": "#48373d",
        "light-accent": "#83616e",
        "light-accent-2": "#ebe6ea",
        "light-accent-3": "#931744",
      },
      fontFamily: {
        caveat: [`var(--font-caveat)`],
      },
    },
  },
  plugins: [],
};
