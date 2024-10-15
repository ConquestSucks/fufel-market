import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      colors: {
        'accent': "var(--accent)",
        'secondary': "var(--secondary)",
        'primary': "var(--primary)",
      },
      width: {
        '30': '30%',
        
      },
      height: {
        
      }
    },
  },
  plugins: [nextui()],
};
export default config;
