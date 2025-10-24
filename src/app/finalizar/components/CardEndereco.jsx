export default function CardEndereco() {
  return (
    <div className="py-4 border-b border-gray-200">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">
            Rua São Paulo, 123 - Centro
          </h2>
          <p className="text-gray-600">Ipatinga/MG</p>
        </div>
        <button className="text-orange-500 font-medium hover:underline cursor-pointer">
          Alterar
        </button>
      </div>
    </div>
  );
}
