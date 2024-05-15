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
        bgcolor: "#050200",
        primary: "#F26615",
        maincards: "#0E0E0E",
        secondary: "#C5C5C5",
        divider: "#474747",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
