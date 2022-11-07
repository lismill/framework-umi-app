import common from './common';
import develop from './develop';
import system from './system';

export default [
  { exact: true, path: '/login', component: '@/pages/_login' },
  {
    path: '/',
    component: '@/pages/_layout/layout-index',
    routes: [...common, ...system, ...develop, { component: '@/pages/_not-found' }],
  },
  { component: '@/pages/_not-found' },
];
