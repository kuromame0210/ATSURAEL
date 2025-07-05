/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#064e3b', // より濃いダークグリーン
          green: '#047857', // より濃いメイングリーン
          light: '#d1fae5', // ライトグリーン
        },
        text: {
          primary: '#1f2937', // ダークグレー
          secondary: '#4b5563', // より濃いグレー（薄すぎを解消）
          white: '#ffffff',
        },
        accent: {
          gold: '#d4af37', // ゴールドアクセント
          green: '#059669', // より濃いアクセントグリーン
          emerald: '#065f46', // より濃いエメラルドグリーン
          sage: '#166534', // より濃いセージグリーン
        },
        background: {
          white: '#ffffff',
          light: '#f9fafb', // 非常に薄いグレー
          green: '#ecfdf5', // より薄いグリーン背景
        },
      },
      fontFamily: {
        serif: ['var(--font-noto-serif-jp)', 'serif'],
        sans: ['var(--font-noto-sans-jp)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      fontSize: {
        'price': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
}