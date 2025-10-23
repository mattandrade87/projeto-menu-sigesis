import VoltarButton from "../../../components/VoltarButton";
import Image from "next/image";

export default function Pedido() {
  return (
    <div className="items-center bg-white  rounded border border-gray-300">
      <div className="relative p-2 flex items-center border-b-1 border-gray-300 justify-center w-full">
        <div className="absolute left-2">
          <VoltarButton />
        </div>

        <span className="text-lg font-semibold ">Detalhes do Pedido</span>
      </div>
      <div className="p-4 relative flex flex-col md:flex-row items-center overflow-hidden ">
        <Image
          src={"/pizza.jpg"}
          alt="pizza"
          width={300}
          height={300}
          className="w-60 h-50 md:w-60 md:h-50 rounded"
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
    </div>
  );
}
