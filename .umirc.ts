import { defineConfig } from 'umi';
import router from './src/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: router,
  fastRefresh: {},
  extraPostCSSPlugins: [
    require('tailwindcss')({
      config: './tailwind.config.ts',
    }),
  ],
});
