import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <header className="flex flex-row items-center justify-between w-screen h-10 bg-gray-400 px-4">
      <div className="space-x-3">
        <span>Header</span>
        <Link href="/">
          <a
            className={`py-1 px-1  hover:border-b-2 ${
              router.pathname === '/' ? 'border-b-2' : null
            }`}
            data-testid="home-nav"
          >
            Home
          </a>
        </Link>
        <Link href="/posts">
          <a
            className={`py-1 px-1  hover:border-b-2 ${
              router.pathname === '/posts' ? 'border-b-2' : null
            }`}
            data-testid="posts-nav"
          >
            Posts
          </a>
        </Link>
        <Link href="/tab-a">
          <a
            className={`py-1 px-1  hover:border-b-2 ${
              router.pathname === '/tab-a' ? 'border-b-2' : null
            }`}
            data-testid="tab-a-nav"
          >
            TabA
          </a>
        </Link>
        <Link href="/counter">
          <a
            className={`py-1 px-1  hover:border-b-2 ${
              router.pathname === '/counter' ? 'border-b-2' : null
            }`}
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
