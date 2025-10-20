"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function AdicionaisCard({ name, description, price, imageUrl }) {
  const [quantity, setQuantity] = useState(0);

  const increment = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };
  const decrement = (e) => {
    e.preventDefault();
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="cursor-default">
      <div className=" bg-white border  md:h-20 border-gray-300 rounded-sm overflow-hidden shadow-lg p-2 md:px-8 flex items-center justify-between">
        <div className="relative flex items-center">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={name}
              width={50}
              height={50}
              className=" h-20 w-20 lg:h-16 lg:18 object-center rounded"
            />
          )}
          <div className="px-4">
            <h2 className="font-bold text-gray-900">{name}</h2>

            {description && (
              <p className=" text-gray-700 text-sm overflow-hidden">
                {description}
              </p>
            )}
            <p className=" text-orange-500 font-semibold">{price}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 bg-gray-100 rounded-full px-2 py-2 shadow-inner">
          <button
            onClick={decrement}
            className="p-2 rounded-full cursor-pointer bg-white hover:bg-orange-100 transition"
          >
            <FaMinus className="text-orange-500" size={12} />
          </button>

          <input
            type="text"
            readOnly
            value={quantity}
            className="w-8 text-center cursor-default bg-transparent text-gray-800 font-semibold outline-none"
          />

          <button
            onClick={increment}
            className="md:p-2 rounded-full cursor-pointer bg-white hover:bg-orange-100 transition"
          >
            <FaPlus className="text-orange-500" size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
