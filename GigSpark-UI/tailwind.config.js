import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
// @ts-ignore
// import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        logo: ["Sour Gummy", "sans-serif"],
        primary: ["Exo 2", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(63.44% 63.44% at 50% 50%, #c2ffe2 0, #fff 100%)",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  // plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// function addVariablesForColors({ addBase, theme }) {
  // let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }
