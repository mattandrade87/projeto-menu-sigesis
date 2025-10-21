"use client";
import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function VoltarButton() {
  const router = useRouter();

  const handleVoltar = () => {
    router.back();
  };

  return (
    <button
      onClick={handleVoltar}
      className="text-orange-500   py-2  cursor-pointer "
    >
      <IoChevronBack className="inline-block mr-2" color="orange" size={22} />
    </button>
  );
}
