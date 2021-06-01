# next-sample

## Vercel

### deploy

[deploying-nextjs-app/deploy](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy)

## Memo

### Next.js

#### create-next-app

```
Creating a new Next.js app in /next-sample.

Installing react, react-dom, and next using npm...


added 276 packages, and audited 277 packages in 8s

44 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Initialized a git repository.

Success! Created next-sample at /next-sample
Inside that directory, you can run several commands:

  npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm start
    Runs the built app in production mode.

We suggest that you begin by typing:

  cd /Users/h-miura/Desktop/next-sample
  npm run dev
```

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
$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
added 85 packages, changed 1 package, and audited 362 packages in 4s

57 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

```

init

```
$ npx tailwindcss init -p

   tailwindcss 2.1.1

   ✅ Created Tailwind config file: tailwind.config.js
   ✅ Created PostCSS config file: postcss.config.js
```

`tailwind.config.js`

```
-   purge: [],
+   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
```
