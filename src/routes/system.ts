export default [
  {
    path: '/system',
    title: '系统设置',
    component: '@/pages/_layout/layout-content',
    meta: { icon: 'MenuSystem' },
    routes: [
      {
        path: '/system/account',
        title: '账号管理',
        component: '@/pages/system/account',
      },
      {
        path: '/system/role',
        title: '角色管理',
        component: '@/pages/system/role',
      },
      { component: '@/pages/_not-found', meta: { hidden: true } },
    ],
  },
];
