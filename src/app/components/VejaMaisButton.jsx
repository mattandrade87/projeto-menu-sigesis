import Link from "next/link";

export default function VejaMaisButton() {
  return (
    <Link
      href="/veja-mais"
      className="text-orange-500 font-semibold hover:underline"
    >
      Veja Mais
    </Link>
  );
}
