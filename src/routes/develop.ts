export default [
  {
    path: '/develop',
    title: '开发者工具',
    component: '@/pages/_layout/layout-content',
    meta: { icon: 'MenuDevelop' },
    routes: [
      {
        path: '/develop/table',
        title: '基础表格',
        component: '@/pages/develop/table',
      },
      {
        path: '/develop/others',
        title: '其他组件',
        component: '@/pages/_layout/layout-content',
        routes: [
          {
            path: '/develop/others/affix',
            title: '固钉',
            component: '@/pages/develop/others/affix',
          },
          { component: '@/pages/_not-found', meta: { hidden: true } },
        ],
      },
      { component: '@/pages/_not-found', meta: { hidden: true } },
    ],
  },
];
