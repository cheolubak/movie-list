import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xlg: '1920px',
        lg: '1280px',
        md: '1024px',
        sm: '640px',
        xs: '480px',
      },
    },
  },
  plugins: [],
};
export default config;
