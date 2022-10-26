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

<!-- <details>
<summary>Summary</summary>
</details> -->