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

<details>
<summary>配置式路由</summary>

## 配置文件
`.umirc.ts`
``` ts
import { defineConfig } from 'umi';
import router from './src/router';

export default defineConfig({
  routes: router,
});
```

`./src/router/index.ts`
``` ts
import common from './common';
import user from './user';

export default [
  {
    exact: false,
    path: '/',
    component: '@/pages/_layout',
    routes: [
      ...common,
      ...user,
      { component: '@/pages/_not-found' }
    ],
  },
];
```
`./src/router/common.ts`
``` ts
export default [
  { exact: true, path: '/', component: '@/pages/home' },
  { exact: true, path: '/login', title: '登录页面', component: '@/pages/_login', meta: {}},
];
```
`./src/router/user.ts`
``` ts
export default [
  { exact: true, path: '/user', title: '用户管理', component: '@/pages/user' },
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
`./src/pages/_layout/index.tsx`
import { withRouter } from 'umi';

export default withRouter((props: any) => {
  // 不带整体布局结构的视图
  if (['/login'].includes(props.location.pathname)) {
    return <div>{props.children}</div>;
  }

  // 带整体布局结构的视图
  return (
    <>
      <div>Header</div>
      {props.children}
      <div>Footer</div>
    </>
  );
});
```
</details>

<details>
<summary>配置 VSCode 常用代码片段</summary>
</details>

<!-- <details>
<summary>Summary</summary>
</details> -->
