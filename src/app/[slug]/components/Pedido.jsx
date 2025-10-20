import Image from "next/image";

export default function Pedido() {
  return (
    <div className="relative flex p-4 flex-col items-center bg-white md:flex-row rounded overflow-hidden border border-gray-300">
      <Image
        src={"/pizza.jpg"}
        alt="pizza"
        width={300}
        height={300}
        className="w-60 h-50 md:w-60 md:h-60"
      />
      <div className="p-4 lg:p-8 relative flex flex-col gap-1">
        <h1 className="font-bold text-2xl">Pizza de Calabresa</h1>
        <h2 className="">
          Escolha seu sanduíche com sua proteína favorita (Steak Churrasco ou
          Frango ou Frango Empanado), escolha até 2 vegetais e 2 molhos de sua
          preferência. Imagem Ilustrativa.
        </h2>
        <p className=" text-xl text-orange-500 font-semibold">R$5.99</p>
      </div>
    </div>
  );
}
