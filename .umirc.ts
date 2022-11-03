import { defineConfig } from 'umi';
import routes from './src/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
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
