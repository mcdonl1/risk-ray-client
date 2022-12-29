import Link from "next/link";

export default function Header() {
  return (
    <header className="top-3 flex w-full items-center justify-between p-4">
      <h1 className="m-2 text-3xl font-bold tracking-tight text-white sm:text-[5rem]">
        Risk Ray
      </h1>
      <nav className=" mr-6 flex gap-7 text-2xl text-white">
        <Link href="/">Info</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
}