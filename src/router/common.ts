export default [
  { exact: true, path: '/', component: '@/pages/home' },
  {
    exact: true,
    path: '/login',
    title: '登录页面',
    component: '@/pages/_login',
    meta: {},
  },
];
