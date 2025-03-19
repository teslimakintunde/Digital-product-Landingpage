import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "991px",
    },
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
      transitionDuration: {
        1400: "0.5s",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
      colors: {
        primaryColor: "#5A58E8",
        secondaryColor: "#FFDE56",
        primaryColor2: "#CAFFFA",
        brandColor: "#504ECF",
        brandColor2: "#FF0000",
        textColorLight: "#6D7D8B",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
