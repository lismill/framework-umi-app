import common from './common';
import user from './user';

export default [
  {
    exact: false,
    path: '/',
    component: '@/pages/_layout',
    routes: [...common, ...user, { component: '@/pages/_not-found' }],
  },
];
