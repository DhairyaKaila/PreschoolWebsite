import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7043",
        secondary: "#42A5F5", 
        accent: "#66BB6A",
        yellow: "#FFCA28",
        background: "#FFFDF9",
        text: "#2D2D2D",
        muted: "#6B7280",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        'gradient-diagonal': 'linear-gradient(135deg, #FF7043 0%, #42A5F5 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
