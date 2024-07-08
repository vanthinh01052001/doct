import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  safelist: [
    'bg-purple_796EFF',
    'bg-red_FF5263',
    'bg-orange_FFA900',
    'bg-blue_23A9F9',
    'bg-red_button',
    'bg-purple_01',
    'text-red_FF5263',
    'text-purple_796EFF',
  ],
  theme: {
    extend: {
      colors: {
        white_fff: "#ffffff",
        black_000: "#000000",
        gray_F1F1F1: "#F1F1F1",
        gray_FAFBFC: "#FAFBFC",
        gray_F9F9F9: "#F9F9F9",
        gray_E9F6FE: "#E9F6FE",
        gray_ECEFF1: "#ECEFF1",
        gray_E5E5E5: "#E5E5E5",
        gray_CCCCCC: "#CCCCCC",
        gray_B3B3B3: "#B3B3B3",
        gray_A4A7AD: "#A4A7AD",
        black_8D9198: "#8D9198",
        black_767C84: "#767C84",
        black_5F666F: "#5F666F",
        black_49505B: "#49505B",
        black_323A46: "#323A46",
        black_242731: "#242731",
        black_1B2432: "#1B2432",
        black_293245: "#293245",
        black_282A36: "#282A36",
        black_0C0B1A: "#0C0B1A",
        red_FF5263: "#FF5263",
        red_button: "rgba(255, 82, 99, 0.1)",
        orange_FFA900: "#FFA900",
        blue_4FBAFA: "#4FBAFA",
        blue_23A9F9: "#23A9F9",
        purple_F2F1FF: "#F2F1FF",
        purple_796EFF: "#796EFF",
        purple_554DB3: "#554DB3",
        purple_01: "rgba(121, 110, 255, 0.1)",
        white_018: "rgba(255, 255, 255, 0.18)"
      },
      boxShadow: {
        noti: "0px -1px 10px rgba(243, 243, 243, 0.05), 0px 20px 40px rgba(98, 101, 119, 0.2);"
      }
      ,
      spacing: {
        c10: "10px",
      },
      screens: {
        'sm': '640px', //sm: 640px (small devices like phones)
        'md': '768px', //md: 768px (medium devices like tablets)
        'lg': '1024px', //lg: 1024px (large devices like laptops)
        'xl': '1280px', //xl: 1280px (extra large devices like desktops)
        '2xl': '1536px', //2xl: 1536px (extra extra large devices)
      },
    },
  },
  plugins: [],
};
export default config;
