import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Pedido from "./components/Pedido";
import FoodCardResumido from "./components/AdicionaisCard";
import AdicionaisCard from "./components/AdicionaisCard";
import Bridge from "./components/Bridge";
import BotaoHome from "../../components/BotaoHome";
import ConcluirButton from "./components/ConcluirButton";

export default function Page({ params }) {
  return (
    <div>
      <Header />

      <main className="mx-auto container min-h-screen pt-24 max-w-4xl">
        <BotaoHome />
        <Pedido />
        <Bridge />
        <div>
          <AdicionaisCard
            key={1}
            name="Bacon"
            description="Hamburguer delicioso com ingredientes frescos"
            price="R$5.99"
            imageUrl="/bacon.jpg"
          />
          <AdicionaisCard
            key={2}
            name="Bacon"
            description="Hamburguer delicioso com ingredientes frescos"
            price="R$5.99"
            imageUrl="/bacon.jpg"
          />
          <AdicionaisCard
            key={3}
            name="Bacon"
            description="Hamburguer delicioso com ingredientes frescos"
            price="R$5.99"
            imageUrl="/bacon.jpg"
          />
        </div>
        <ConcluirButton />
      </main>

      <Footer />
    </div>
  );
}
