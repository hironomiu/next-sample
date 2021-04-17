# next-sample

## Vercel

### deploy

[deploying-nextjs-app/deploy](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy)

## Memo

### create-next-app

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

### PORT

`package.json`

```
  "scripts": {
-    "dev": "next dev",
+    "dev": "next dev --port 3003",
    "build": "next build",
-    "start": "next start"
+    "start": "next start --port 3003"
```
