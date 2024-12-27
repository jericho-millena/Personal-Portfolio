/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js", // Include Flowbite components
  ],
  theme: {
    extend: {
      backgroundImage: {
        "layered-gradient": `
          linear-gradient(to bottom, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 0) 30%),
          radial-gradient(circle at 20% 30%, rgba(128, 90, 213, 0.2) 10%, transparent 30%),
          radial-gradient(circle at 50% 75%, rgba(128, 90, 213, 0.1) 20%, transparent 50%),
          radial-gradient(circle at 75% 20%, rgba(128, 90, 213, 0.2) 15%, transparent 40%)
        `,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: { sans: ["Raleway", "sans-serif"] },

      keyframes: {
        "progress-gradient": {
          // Updated with 50%
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "gradient-move": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideInUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "split-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "split-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "scale-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.8)", opacity: "0" },
        },
        "underline-in": {
          "0%": { transform: "scaleX(0)", transformOrigin: "leftt" },
          "100%": { transform: "scaleX(1)", transformOrigin: "right" },
        },
      },
      animation: {
        "gradient-move": "gradient-move 5s ease infinite", // Smooth gradient animation
        "fade-in": "fadeIn 0.5s ease-in-out",
        "progress-gradient": "progress-gradient 5s ease infinite",
        "fade-in-left": "fadeInLeft 0.5s ease-in-out",
        slideInUp: "slideInUp 1s ease-out",
        "split-in-left": "split-in-left 0.5s ease-out forwards",
        "split-in-right": "split-in-right 0.5s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out",
        "scale-out": "scale-out 0.3s ease-in",
        "fade-in-delay": "fadeIn 2s 2s ease-in forwards",
        "underline-in": "underline-in 0.3s ease-in-out forwards",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // Use the Flowbite plugin
  ],
};
