"use client";
import { useState } from "react";
import { FaCreditCard, FaMoneyBillWave, FaRegCreditCard } from "react-icons/fa";

export default function CardPagamento() {
  const [metodo, setMetodo] = useState("cartaoCredito");

  const opcoes = [
    {
      id: "credito",
      label: "Cartão de Crédito",
      icon: <FaCreditCard className="text-xl" />,
    },
    {
      id: "debito",
      label: "Cartão de Débito",
      icon: <FaRegCreditCard className="text-xl" />,
    },
    {
      id: "dinheiro",
      label: "Dinheiro",
      icon: <FaMoneyBillWave className="text-xl" />,
    },
  ];

  return (
    <div className="py-4 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Forma de Pagamento
      </h2>

      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Forma de Pagamento
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {opcoes.map((opcao) => (
          <button
            key={opcao.id}
            onClick={() => setMetodo(opcao.id)}
            className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer
              ${
                metodo === opcao.id
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 hover:border-gray-400"
              }`}
          >
            <div
              className={`mb-2 ${
                metodo === opcao.id ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {opcao.icon}
            </div>
            <span
              className={`text-sm font-medium ${
                metodo === opcao.id ? "text-blue-700" : "text-gray-700"
              }`}
            >
              {opcao.label}
            </span>
          </button>
        ))}
      </div>
      {metodo && (
        <p className="mt-4 text-sm text-gray-600">
          Você selecionou:{" "}
          <span className="font-semibold text-blue-600 capitalize">
            {metodo}
          </span>
        </p>
      )}
    </div>
  );
}
