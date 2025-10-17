import Image from "next/image";
import Link from "next/link";

export default function FoodCard({ name, description, price, imageUrl }) {
  return (
    <Link href={"#"} className="cursor-pointer">
      <div className="bg-white relative flex flex-col max-h-70 min-h-70 border border-gray-300 rounded-lg overflow-hidden shadow-lg min-w-xs max-w-xs">
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className="w-full h-32 object-cover"
        />
        <div className="flex flex-col flex-1 p-2 pb-4">
          <h2 className="text-lg font-bold mb-">{name}</h2>
          <p className="text-gray-700 mb-4 overflow-hidden text-ellipsis line-clamp-3">
            {description}
          </p>
        </div>
        <p className="absolute left-2 bottom-2 text-orange-500 font-semibold">
          {price}
        </p>
      </div>
    </Link>
  );
}
