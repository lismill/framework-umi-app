# framework-umi-app

<!-- Getting Started -->
<details>
<summary>Getting Started</summary>

### Install dependencies,

``` bash
npm install
```

### Start the dev server,

``` bash
npm run start
```
</details>

<!-- 配置 Tailwind CSS -->
<details>
<summary>配置 Tailwind CSS</summary>

### 安装兼容 PostCSS7 版本的 Tailwind CSS
```bash
npm install --save-dev tailwindcss@npm:@tailwindcss/postcss7-compat
```

### 配置文件
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
<summary>代码风格 & 自动格式化 & 提交校验</summary>

## 配置思路
- prettier 负责代码美化
- eslint 负责代码质量检测
- vscode 负责保存代码自动校验和格式化
- lint-staged 负责提交代码前的校验

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

<!-- <details>
<summary>Summary</summary>
</details> -->
