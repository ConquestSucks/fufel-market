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
        'background': "#705C53",
        'accent': "#F5F5F7",
        'secondary': "#F4AB4F",
        'primary': "#F4AB4F",
      },
      width: {
        '30': '30%'
      },
    },
  },
  plugins: [nextui()],
};
export default config;
