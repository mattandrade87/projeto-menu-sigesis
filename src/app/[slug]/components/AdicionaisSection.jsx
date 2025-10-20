"use client";
import { useState } from "react";
import AdicionaisCard from "./AdicionaisCard";

export default function AdicionaisSection({
  maxItems = 10,
  items = [],
  title = "Adicionais",
}) {
  const [selected, setSelected] = useState([]);
  const total = selected.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalSelected = selected.reduce((sum, i) => sum + i.quantity, 0);

  const handleChange = (item, quantity) => {
    setSelected((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (quantity === 0) return prev.filter((i) => i.id !== item.id);
      if (existing)
        return prev.map((i) => (i.id === item.id ? { ...i, quantity } : i));
      return [...prev, { ...item, quantity }];
    });
  };

  const isLimitReached = totalSelected >= maxItems;

  return (
    <div className="mt-2 border p-4 border-gray-300 rounded bg-white">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span className="text-sm text-gray-600">
          {totalSelected}/{maxItems} permitidos
        </span>
      </div>

      {isLimitReached && (
        <div className="text-sm text-red-600 mb-2">
          Limite atingido — você não pode adicionar mais itens.
        </div>
      )}

      <div className="grid gap-1">
        {items.map((item) => {
          const existing = selected.find((i) => i.id === item.id);
          // permit increment apenas se ainda houver espaço (totalSelected < maxItems)
          const canIncrement = totalSelected < maxItems;
          return (
            <AdicionaisCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
              quantity={existing?.quantity ?? 0}
              onChange={(qty) => handleChange(item, qty)}
              canIncrement={canIncrement}
            />
          );
        })}
      </div>

      <div className="mt-4 text-right">
        <p className="text-lg font-semibold text-gray-900">
          Total: <span className="text-orange-500">R${total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}
