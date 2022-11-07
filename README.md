# framework-umi-app

这是一个基于 UmiJS 二次封装的前端业务开发框架

<!-- 开始说明 -->
<details>
<summary>开始说明</summary>

## 依赖项
| 名称      | 使用版本    |
| ----------- | ----------- |
| node.js     | 16.0.0      |
| npm         | 7.10.0      |
| umi         | 3.5.35      |
| react       | 17.x        |
| react-dom   | 17.x        |

## 安装依赖

``` bash
npm install
```

## 启动服务

``` bash
npm run start
npm run start:dev
npm run start:pre
npm run start:prod
```
## 打包编译

``` bash
npm run build
npm run build:dev
npm run build:pre
npm run build:prod
```
</details>

<!-- 配置 Tailwind CSS -->
<details>
<summary>配置 Tailwind CSS</summary>

## 安装兼容 PostCSS7 版本的 Tailwind CSS
```bash
npm install --save-dev tailwindcss@npm:@tailwindcss/postcss7-compat
```

## 配置文件
`.umirc.ts`
``` js
extraPostCSSPlugins: [
  require('tailwindcss')({
    config: './tailwind.config.ts',
  }),
],
```

`tailwind.config.ts`
``` ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 全局引入
`./src/global.less`
``` less
@tailwind utilities;
```

## 使用方法
`./src/pages/index.tsx`
``` tsx
<h1 className="text-3xl font-bold underline">
  Hello world!
</h1>
```

## 问题解决

```
问：
引入@tailwind utilities; 编辑器警告 Unknown at rule @tailwindcss(unknownAtRules)

答：
`.vscode/settings.json`
{
  "less.lint.unknownAtRules": "ignore"
}
```
</details>

<!-- 配置代码风格 & 自动格式化 & 提交校验 -->
<details>
<summary>配置代码风格 & 自动格式化 & 提交校验</summary>

## 配置思路
- prettier 负责代码美化
- eslint 负责代码质量检测
- vscode 负责保存代码自动校验和格式化
- git-hooks 负责代码提交前的校验

## 安装依赖
``` bash
npm install --save-dev eslint-plugin-prettier @umijs/fabric
```
## 配置文件
`.vscode/settings.json`
``` json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
}
```

`package.json`
``` json
{
  "scripts": {
    "lint:js": "eslint --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src",
    "lint:prettier": "prettier -c --write src/**/* --end-of-line auto",
    "lint:style": "stylelint src/**/*.less --syntax less"
  },
  "lint-staged": {
    "**/*.{js,jsx,tsx,ts,less,md,json}": [
      "npm run prettier"
    ],
    "**/*.{js,jsx,tsx,ts}": [
      "npm run lint:js"
    ],
    "**/*.{css,less}": [
      "npm run lint:style"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write"
    ]
  }
}
```

`.eslintrc.js`
``` js
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {},
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
```
`.prettierrc.js`
``` js
const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
};
```
`.stylelintrc.js`
``` js
const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.stylelint,
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
};
```
</details>

<!-- 配置多环境变量 -->
<details>
<summary>配置多环境变量</summary>

## 安装依赖
`npm install --save-dev cross-env`

## 配置文件
`package.json`
``` json
"start": "npm run start:dev",
"start:dev": "cross-env UMI_ENV=dev umi dev",
"start:pre": "cross-env UMI_ENV=pre umi dev",
"start:prod": "cross-env UMI_ENV=prod umi dev",
"build": "npm run build:dev",
"build:dev": "cross-env UMI_ENV=dev umi build",
"build:pre": "cross-env UMI_ENV=pre umi build",
"build:prod": "cross-env UMI_ENV=prod umi build",
```
`.umirc.dev.ts`
``` ts
export default {
  define: {
    globalConfig: {
      UMI_CUSTOM_ENV: 'dev',
      UMI_BASE_API: 'http://www.dev.com',
    },
  },
};
```
`.umirc.pre.ts`
``` ts
export default {
  define: {
    globalConfig: {
      UMI_CUSTOM_ENV: 'pre',
      UMI_BASE_API: 'http://www.pre.com',
    },
  },
};
```
`.umirc.prod.ts`
``` ts
export default {
  define: {
    globalConfig: {
      UMI_CUSTOM_ENV: 'prod',
      UMI_BASE_API: 'http://www.prod.com',
    },
  },
};
```
## 类型提示
`typings.d.ts`
``` ts
declare const globalConfig: {
  UMI_CUSTOM_ENV: string;
  UMI_BASE_API: string;
  // ...
};
```

## 使用方法
`index.tsx`
``` tsx
console.log(globalConfig.UMI_CUSTOM_ENV);

export default function IndexPage() {
  return (
    <div>
      <h1>{globalConfig.UMI_BASE_API}</h1>
    </div>
  );
}
```
</details>

<!-- 配置式系统路由 -->
<details>
<summary>配置式系统路由</summary>

## 配置文件
`.umirc.ts`
``` ts
import { defineConfig } from 'umi';
import routes from './src/routes';

export default defineConfig({
  routes,
});
```

`./src/routes/index.ts`
``` ts
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
```
`./src/routes/develop.ts`
``` ts
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
```

## 问题解决
``` ts
问：
运行时怎么全局监听路由切换？

答：
`./src/app.tsx`
export function onRouteChange({ matchedRoutes }: { matchedRoutes: any[] }) {
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title ?? '';
  }
}

问：
怎么配置整体框架结构和嵌套路由？

答：

`./src/pages/_layout/layout-content.tsx`
export default (props: any) => {
  return <div className="layout-content">{props.children}</div>;
};

`./src/pages/_layout/layout-index.tsx`
import Scrollbars from 'react-custom-scrollbars';
import LayoutAside from './layout-aside';
import LayoutHeader from './layout-header';

export default (props: any) => {
  return (
    <div className="layout collapsed">
      <LayoutHeader />
      <div className="layout-footer">
        <LayoutAside />
        <Scrollbars style={{ height: 'calc(100%)' }}>{props.children}</Scrollbars>
      </div>
    </div>
  );
};

`./src/routes/develop.ts`
export default [
  {
    path: '/',
    component: '@/pages/_layout/layout-index',
    routes: [],
  },
];
```
</details>

<!-- 配置系统框架结构 -->
<details>
<summary>配置系统框架结构</summary>

可以自由切换 `固定宽度` `自适应宽度` 两种布局模式

![固定宽度](https://i.postimg.cc/Cw4DVzvm/image.png "固定宽度")
![自适应宽度](https://i.postimg.cc/ZTCqDRX9/image.png "自适应宽度")
</details>

<!-- 配置 VSCode 常用代码片段 -->
<details>
<summary>配置 VSCode 常用代码片段</summary>
</details>

<!-- <details>
<summary>Summary</summary>
</details> -->
