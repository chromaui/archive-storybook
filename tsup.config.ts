import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/preset.ts', 'src/preview.ts'],
  splitting: false,
  minify: !options.watch,
  format: ['cjs', 'esm'],
  dts: {
    resolve: true,
  },
  treeshake: true,
  sourcemap: true,
  clean: true,
  platform: 'node',
  // Trying to avoid bundling anything
  bundle: false,
  external: ['@storybook/types'],
  esbuildOptions(options) {
    options.conditions = ['module'];
  },
}));
