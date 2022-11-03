export default [
  {
    path: '/',
    title: '管理系统',
    component: '@/pages/dashboard',
    meta: { icon: 'MenuDashboard' },
  },
  {
    path: '/login',
    title: '登录页面',
    component: '@/pages/_login',
    meta: {
      hidden: true,
    },
  },
];
