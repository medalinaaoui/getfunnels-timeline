import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: "#FFF",
        primary: "#8200FF",
        // secondary: "#6B6B6B",
        paragraph: "#6B6B6B",
        darkText: "#000",
        lightText: "#FFF",
        disabled: "#e1dada",
        greenCheck: "#1bb32f",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
