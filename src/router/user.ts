export default [
  {
    path: '/user',
    title: '用户管理',
    component: '@/pages/_layout/layout-content',
    routes: [
      {
        exact: true,
        path: '/user/list',
        title: '用户列表',
        component: '@/pages/user/list',
      },
    ],
  },
];
