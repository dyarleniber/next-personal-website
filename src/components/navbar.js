import Link from "next/link";

export default function Navbar({ blog, name }) {
  return (
    <header
      className={`sticky top-0 left-0 h-16 bg-gray-100 shadow-md z-20 flex justify-end`}
    >
      {blog ? (
        <nav className="flex w-full">
          <ul className="flex justify-around w-full list-none text-base">
            <li className="flex px-6">
              <Link href="/">
                <a className="block m-auto">{name}</a>
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="flex justify-end">
          <ul className="list-none flex text-sm sm:text-base">
            <li className="flex px-6 hover:bg-gray-200">
              <a className="block m-auto" href="#home">
                Home
              </a>
            </li>
            <li className="flex px-6 hover:bg-gray-200">
              <a className="block m-auto" href="#contact">
                Contact
              </a>
            </li>
            <li className="flex px-6 hover:bg-gray-200">
              <Link href="/blog">
                <a className="block m-auto">Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
