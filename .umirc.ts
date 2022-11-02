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
  links: [
    { rel: 'icon', href: "./favicon.ico"}
  ],
  theme: {
    "primary-color": "#1966ff",
  }
});
