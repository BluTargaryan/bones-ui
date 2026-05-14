import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["app/components/ui/index.ts"],
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true,                  // generates .d.ts declaration files
  tsconfig: "tsconfig.build.json",
  splitting: false,           // one file per format, easier to debug
  sourcemap: true,
  clean: true,                // wipe dist/ before each build
  external: [
    // Never bundle peer deps
    "react",
    "react-dom",
    "react/jsx-runtime",
  ],
  esbuildOptions(options) {
    // Required for JSX to work
    options.jsx = "automatic"
  },
  // Copy CSS-related exports through untouched
  treeshake: true,
})