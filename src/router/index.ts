import common from './common';
import develop from './develop';
import user from './user';

export default [
  {
    exact: false,
    path: '/',
    component: '@/pages/_layout/layout-index',
    routes: [...common, ...user, ...develop, { component: '@/pages/_not-found' }],
  },
];
