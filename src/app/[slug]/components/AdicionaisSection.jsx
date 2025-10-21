"use client";
import { useState } from "react";
import AdicionaisCard from "./AdicionaisCard";
import Textarea from "./Textarea";

export default function AdicionaisSection({
  maxItems = 10,
  items = [],
  title = "Adicionais",
}) {
  const [selected, setSelected] = useState([]);
  const [text, setText] = useState("");
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
    <div className="border p-4 mb-12 border-gray-300 rounded bg-white">
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
      <div className="pt-2">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Observações"
          rows={5}
        />
      </div>

      <div className="mt-4">
        <button className="bg-orange-500 w-full cursor-pointer justify-between flex text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition">
          <span>Concluir Pedido</span>
          <span className="text-white">R${total.toFixed(2)}</span>
        </button>
      </div>
    </div>
  );
}
