/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        main: '#0D6EFD',
        white: '#ffffff',
        error: '#DC3545',
        bckgnd: '#0d0f14' 
      },
      fontFamily: {
        pacifico: ['pacifico'],
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
