import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>next-sample</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://github.com/hironomiu/next-sample"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by github:hironomiu/next-sample
        </a>
      </footer>
    </div>
  )
}

export default Layout
