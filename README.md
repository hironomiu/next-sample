# next-vercel-sample

Next.js + Vercel のサンプル

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

## run

```
npm run dev
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
