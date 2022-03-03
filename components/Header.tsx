import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between w-screen h-10 bg-gray-400 px-4">
      <div className="space-x-3">
        <span>Header</span>
        <Link href="/">
          <a
            className="hover:bg-gray-100 py-1 px-1 rounded"
            data-testid="home-nav"
          >
            Home
          </a>
        </Link>
        <Link href="/posts">
          <a
            className="hover:bg-gray-100 py-1 px-1 rounded"
            data-testid="posts-nav"
          >
            Posts
          </a>
        </Link>
        <Link href="/tab-a">
          <a
            className="hover:bg-gray-100 py-1 px-1 rounded"
            data-testid="tab-a-nav"
          >
            TabA
          </a>
        </Link>
        <Link href="/counter">
          <a
            className="hover:bg-gray-100 py-1 px-1 rounded"
            data-testid="counter-nav"
          >
            Counter
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
