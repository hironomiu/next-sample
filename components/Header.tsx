import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between w-screen h-10 bg-gray-400 px-4">
      <div className="space-x-3">
        <span>Header</span>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="tab-a">
          <a>TabA</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
