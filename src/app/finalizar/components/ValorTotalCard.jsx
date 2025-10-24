export default function ValorTotalCard() {
  return (
    <div className="py-4 border-b border-gray-200">
      <p className="text-gray-600">Subtotal - R$ 50,00</p>
      <p className="text-gray-600">Taxa de Serviço - R$ 1,00</p>
      <p className="text-gray-600">
        Taxa de Entrega - <span className="text-green-500">Grátis</span>
      </p>
      <div className="flex justify-between text-xl font-semibold text-gray-700 pt-4">
        <h2 className="">Valor Total</h2>
        <p className="">R$ 51,00</p>
      </div>
    </div>
  );
}
