/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-black': '#000000',
        'neo-white': '#ffffff',
        'neo-yellow': '#ffff00',
        'neo-red': '#ff0000',
        'neo-blue': '#0000ff',
        'neo-green': '#00ff00',
        'neo-purple': '#ff00ff',
        'neo-cyan': '#00ffff',
        'neo-gray-light': '#cccccc',
        'neo-gray-dark': '#333333',
      },
      fontFamily: {
        'neo': ['Inter', 'sans-serif'],
        'neo-mono': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neo': '4px 4px 0px #000000',
        'neo-lg': '8px 8px 0px #000000',
        'neo-xl': '12px 12px 0px #000000',
        'neo-2xl': '16px 16px 0px #000000',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
    },
  },
  plugins: [],
}; 