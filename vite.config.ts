import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from 'rollup-plugin-typescript2'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // typescript2({
    //   check: false,
    //   include: ['src/components/*.vue'],
    //   tsconfigOverride: {
    //     exclude: [
    //       "vite.config.ts"
    //     ]
    //   }
    // }),
    dts(({ insertTypesEntry: true}))
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/components/index.ts",
      formats: ["es", "cjs"],
      name: "Sidebar",
      fileName: (format) => format === "es" ? "index.js" : "index.cjs",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
