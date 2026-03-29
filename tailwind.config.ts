import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config: import("tailwindcss").Config = {
  content: [
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        thin: "50", // was 100
        extralight: "150", // was 200
        light: "250", // was 300
        normal: "350", // was 400
        medium: "450", // was 500
        semibold: "550", // was 600
        bold: "600", // was 700
        extrabold: "750", // was 800
        black: "850", // was 900
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        tiny: "0.4375rem", // 7px
        xxs: "0.625rem", // 10px
        xs: "0.75rem", // 12px
        small: "0.875rem", // 14px
        medium: "0.9375rem", // 15px
        large: "1.125rem", // 18px
      },
      screens: {
        xxs: "320px",
        xs: "375px",
        sm: "431px",
        md: "769px",
        lg: "1440px",
        xl: "1800px",
        xxl: "2550px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {
        dividerWeight: "1px",
        disabledOpacity: 0.45,
        radius: {
          small: "6px",
          medium: "8px",
          large: "12px",
        },
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "2px",
        },
      },
    themes: {
  light: {
    colors: {
      background: "#ffffff",
      foreground: "#000000",
      focus: "#D40301",
      primary: {
        50:  "#fff0f0",
        100: "#ffd6d6",
        200: "#ffadad",
        300: "#ff7575",
        400: "#ff3333",
        500: "#D40301",   
        600: "#aa0201",
        700: "#800200",
        800: "#550100",
        900: "#2b0100",
        DEFAULT: "#D40301",
      },
    },
  },
  dark: {
    colors: {
      background: "#000000",
      foreground: "#FFFFFF",
      focus: "#ff3333",      
      primary: {
        50:  "#2b0100",     
        100: "#550100",
        200: "#800200",
        300: "#aa0201",
        400: "#D40301",      
        500: "#ff3333",     
        600: "#ff7575",
        700: "#ffadad",
        800: "#ffd6d6",
        900: "#fff0f0",
        DEFAULT: "#ff3333",   
      },
    },
  },
},
    }),
  ],
};

export default config;
