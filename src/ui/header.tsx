import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-15 bg-purple-100 sticky top-0 flex items-center justify-center gap-5 text-purple-900 hover:text-purple-900/80">
      <Link href={""}>Home</Link>
      <Link href={""}>Contact</Link>
      <Link href={""}>Portfolio</Link>
      <Link href={""}>About</Link>
    </div>
  );
}
