"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function AdicionaisCard({
  id,
  name,
  description,
  price,
  imageUrl,
  quantity: initialQuantity = 0,
  onChange,
  canIncrement = true, // flag vinda do pai: se ainda pode aumentar
}) {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    // se o pai atualizar (por exemplo vindo de um reset), sincroniza
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const parsedPrice =
    typeof price === "string"
      ? parseFloat(price.replace("R$", "").replace(",", "."))
      : Number(price || 0);

  const increment = (e) => {
    e?.preventDefault();
    // bloqueia incremento se não permitido
    if (!canIncrement) return;
    const newQty = quantity + 1;
    setQuantity(newQty);
    onChange?.(newQty);
  };

  const decrement = (e) => {
    e?.preventDefault();
    if (quantity === 0) return;
    const newQty = quantity - 1;
    setQuantity(newQty);
    onChange?.(newQty);
  };

  return (
    <div
      className={`bg-white border md:h-20 border-gray-300 rounded-sm overflow-hidden shadow-sm p-2 md:px-6 flex items-center justify-between transition`}
    >
      <div className="relative flex items-center">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={name}
            width={64}
            height={64}
            className="h-16 w-16 object-cover rounded"
          />
        )}
        <div className="px-3">
          <h2 className="font-bold text-gray-900">{name}</h2>
          {description && (
            <p className="text-gray-600 text-sm line-clamp-1">{description}</p>
          )}
          <p className="text-orange-500 font-semibold">
            R${parsedPrice.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3 bg-gray-100 rounded-full px-2 py-2 shadow-inner">
        <button
          onClick={decrement}
          disabled={quantity === 0}
          className="p-2 rounded-full cursor-pointer bg-white hover:bg-orange-100 transition disabled:opacity-50 disabled:cursor-default"
          aria-label={`Diminuir ${name}`}
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
          disabled={!canIncrement}
          className="p-2 rounded-full cursor-pointer bg-white hover:bg-orange-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={`Aumentar ${name}`}
          title={!canIncrement ? "Limite atingido" : ""}
        >
          <FaPlus className="text-orange-500" size={12} />
        </button>
      </div>
    </div>
  );
}
