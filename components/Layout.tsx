import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>next-sample</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
