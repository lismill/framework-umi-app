export default [
  {
    path: '/develop',
    title: '开发者工具',
    component: '@/pages/_layout/layout-content',
    routes: [
      {
        exact: true,
        path: '/develop/list',
        title: '测试列表',
        component: '@/pages/develop/list',
      },
      {
        path: '/develop/others',
        title: '其他组件',
        component: '@/pages/_layout/layout-content',
        routes: [
          {
            exact: true,
            path: '/develop/others/affix',
            title: '固钉',
            component: '@/pages/develop/others/affix',
          },
        ],
      },
    ],
  },
];
