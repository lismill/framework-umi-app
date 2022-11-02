export default [
  {
    exact: true,
    path: '/',
    title: '管理系统',
    component: '@/pages/dashboard',
    meta: { icon: 'MenuDashboard' },
  },
  {
    exact: true,
    path: '/login',
    title: '登录页面',
    component: '@/pages/_login',
    meta: {
      hidden: true,
    },
  },
];
