import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Source Sans Pro', 'serif'],
      mono: ['Fira Code', 'monospace'],
    },
  },
})
