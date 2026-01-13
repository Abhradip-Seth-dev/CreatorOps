import Link from "next/link"

export default function Navbar() {
  return (
    <header className="border-b border-zinc-200 bg-white sticky">
      <nav className="  mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900"
        >
          CreatorOps
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium text-zinc-700">
          <Link
            href="/"
            className="hover:text-zinc-900 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="hover:text-zinc-900 transition-colors"
          >
            Dashboard
          </Link>

          <Link
            href="/posts/create"
            className="hover:text-zinc-900 transition-colors"
          >
            Create
          </Link>
          <Link
            href="/signup"
            className=" bg-blue-600 p-1.5 font-bold text-white rounded-[10px] "
          >
            SignUp
          </Link>
        </div>
      </nav>
    </header>
  )
}