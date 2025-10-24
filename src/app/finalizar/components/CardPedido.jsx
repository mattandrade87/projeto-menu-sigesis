import { ImBin } from "react-icons/im";

export default function CardPedido() {
  return (
    <div className="py-4 border-b border-gray-200">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Seu pedido em</h2>
          <p className="text-gray-600">Restaurante</p>
        </div>
        <button className="text-orange-500 font-medium hover:underline cursor-pointer">
          Adicionar mais itens
        </button>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <p className="text-gray-600">1x Pizza Calabresa</p>
          <ImBin className="text-red-600 hover:scale-105 cursor-pointer " />
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600">3x Refrigerante Coca-Cola 600ml</p>
          <button className="">
            <ImBin className="text-red-600 hover:scale-105 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}
