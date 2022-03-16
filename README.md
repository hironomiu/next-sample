# next-vercel-sample

TypeScript + Next.js + Vercel のサンプル

## Vercel

### deploy

[deploying-nextjs-app/deploy](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy)

### CLI

```
npm i -g vercel
```

nodenv で管理してる場合はコマンドが認識されない可能性があるので`rehash`をする

```
nodenv rehash
```

## Run

```
npm run dev
```

## Build

```
npm run build
```

## Testin

```
npm test
```

## Install Memo

### Next.js

```
npx create-next-app .
```

### TypeScript

[TypeScript](https://nextjs.org/learn/excel/typescript/create-tsconfig)

#### PORT

`package.json`

```
  "scripts": {
-    "dev": "next dev",
+    "dev": "next dev --port 3003",
    "build": "next build",
-    "start": "next start"
+    "start": "next start --port 3003"
```

### Tailwind

[公式](https://tailwindcss.com/)

[チートシート](https://nerdcave.com/tailwind-cheat-sheet)

#### Installation Next.js

[tailwindcss/nextjs](https://tailwindcss.com/docs/guides/nextjs)

install

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

init

```
npx tailwindcss init -p
```

`tailwind.config.js`

```
-   purge: [],
+   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
```

### Testing

```
npm install --save-dev jest @testing-library/react @types/jest @testing-library/jest-dom @testing-library/dom @testing-library/user-event
```

```
npm install --save-dev  @babel/plugin-syntax-jsx
npm install --save-dev @babel/preset-react
```

`./.babelrc`

```
{
    "presets": [
        "next/babel"
    ],
    "parser": "@babel/eslint-parser"
}
```

### Next12 へバージョンアップ後に追加でインストールしたもの

```
npm install --save-dev eslint
npm install --save-dev @babel/eslint-parser
npm install --save-dev eslint-config-next
```

Next v12 に対応したのでインストール

```
npm install --save-dev next-page-tester
npm install --save-dev jest-css-modules
```

`package.json`(`moduleNameMapper`を追加)

```
  "jest": {
    "testPathIgnorePatterns": [
      "<rootDir>/.next/",
      "<rootDir>/node_modules/"
    ],
    "moduleNameMapper": {
      "\\.(css)$": "<rootDir>/node_modules/jest-css-modules"
    },
    "testEnvironment": "jsdom"
  }
```
