import Header from "../../components/Header";
import CardEndereco from "./components/CardEndereco";
import CardEntrega from "./components/CardEntrega";
import CardPagamento from "./components/CardPagamento";
import CardPedido from "./components/CardPedido";
import ValorTotalCard from "./components/ValorTotalCard";

export default function FinalizarPedido() {
  return (
    <>
      <Header />
      <main className="mx-auto container min-h-screen pt-20 max-w-3xl px-8">
        <h1 className="text-3xl font-bold">Finalize seu pedido</h1>
        <CardEndereco />
        <CardEntrega />
        <CardPedido />
        <ValorTotalCard />
        <CardPagamento />

        <button className="w-full bg-orange-500 text-white py-3 rounded-lg mb-12 hover:bg-orange-600 cursor-pointer transition-colors font-semibold">
          Realizar Pedido
        </button>
      </main>
    </>
  );
}
