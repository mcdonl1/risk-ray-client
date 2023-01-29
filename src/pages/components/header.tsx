import Link from 'next/link';

const Header = () => {
  return (
    <nav className="p-6 flex justify-between items-center text-2xl">
      <Link href="/" className="text-white text-4xl font-bold">
        <h1>Risk Ray</h1>
      </Link>
      <div className="flex items-center">
        <Link href="/dashboard" className="text-white mr-6 hover:text-purple-300">
          Dashboard
        </Link>
        <Link href="/contact" className="text-white mr-6 hover:text-purple-300">
          Contact Us
        </Link>
        <Link href="/login" className="text-white hover:text-purple-300">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;