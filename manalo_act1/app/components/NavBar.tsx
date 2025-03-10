import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-pink-500 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Me</Link></li>
      </ul>
    </nav>
  );
}
