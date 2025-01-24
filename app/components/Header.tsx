import Link from "next/link";

const Header = () => (
  <header>
    <nav className="bg-gray-800 w-full h-[64px] flex items-center justify-between px-6">
      <Link href="/" className="text-xl">
        A Simple Project
      </Link>
      <ul className="flex gap-6">
        <li>
          <Link href="/recipes">Recipes</Link>
        </li>
        <li>
          <Link href="/artworks">Artworks</Link>
        </li>
        <li>
          <Link href="/employees-of-the-month">People</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
