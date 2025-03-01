import copy from 'esbuild-plugin-copy';
import { defineConfig } from 'tsup';

const config = defineConfig({
  outDir: './dist',
  entry: {
    content: './src/content.js',
  },
  format: 'esm',
  target: ['chrome117', 'edge117'],

  minify: true,
  treeshake: 'recommended',

  clean: true,

  esbuildPlugins: [
    copy({
      resolveFrom: 'out',
      assets: [
        {
          from: ['./src/injected.js'],
          to: './',
        },
        {
          from: ['./src/manifest.json'],
          to: './',
        },
        {
          from: ['./src/assets/**/*'],
          to: './assets/',
        },
      ],
    }),
  ],
});

export default config;
