import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-15 bg-purple-100 sticky top-0 flex items-center justify-center gap-5 text-purple-900 hover:text-purple-900/80 z-50">
      <Link href={"/"}>Home</Link>
      <Link href="/under_construction">Contact</Link>
      <Link href="/under_construction">Portfolio</Link>
      <Link href="/under_construction">About</Link>
    </div>
  );
}
