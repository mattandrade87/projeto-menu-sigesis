import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function BotaoHome() {
  return (
    <Link href="/" className="text-orange-500 font-semibold hover:underline">
      <FaHome size={22} />
    </Link>
  );
}
