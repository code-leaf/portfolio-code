import type { Config } from "tailwindcss";

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.ts', // 定数に記載されたtailwindのクラス名を認識する為
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        python: '#306998', // Python用の色を追加
        sql: '#a8c7fa', // SQL用の色を追加
      },
    },
  },
  plugins: [],
} satisfies Config;
