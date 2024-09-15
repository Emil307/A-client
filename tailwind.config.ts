import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        blue: "#1D9Bf0",
        white: "#FFF",
        textWhite: "#E7E9EA",
        textGray: "#71767B",
        textBlack: "#0F1419",
        borderColor: "rgb(47, 51, 54)",
      },
      width: {
        xlContainer: "1200px",
      },
      borderWidth: {
        sm: "1px",
      },
    },
  },
  plugins: [],
};
export default config;
