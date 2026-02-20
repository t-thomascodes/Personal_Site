import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-space-mono)', 'Courier New', 'monospace'],
        serif: ['var(--font-libre-baskerville)', 'Georgia', 'serif'],
      },
      colors: {
        dim: '#777',
        faint: '#333',
      },
    },
  },
  plugins: [],
}
export default config
