import Image from "next/image";
import Link from "next/link";

export default function FoodCardGeral({ name, description, price, imageUrl }) {
  return (
    <Link href={"/123"} className="cursor-pointer">
      <div className="relative bg-white border border-gray-300 rounded-sm overflow-hidden shadow-lg xl:min-w-xl xl:max-w-2xl h-30 p-4">
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-24 w-24 lg:h-22 lg:w-32 object-center rounded"
        />

        <h2 className="absolute top-3 left-4 text-lg font-bold text-gray-900">
          {name}
        </h2>

        <p className="absolute left-4 right-36 top-10 text-gray-700 text-sm overflow-hidden text-ellipsis line-clamp-2">
          {description}
        </p>

        <p className="absolute left-4 bottom-2 text-orange-500 font-semibold">
          {price}
        </p>
      </div>
    </Link>
  );
}
