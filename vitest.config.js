import { defineConfig } from 'vitest/config'

export default defineConfig({
  assetsInclude: ['**/*.png', '**/*.PNG', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  test: {
    environment: 'jsdom'
  }
})
