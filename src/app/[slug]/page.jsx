import Header from "../../components/Header";
import Pedido from "./components/Pedido";
import AdicionaisSection from "./components/AdicionaisSection";

export default function Page({ params }) {
  const mockAdicionais = [
    {
      id: 1,
      name: "Bacon",
      description: "Crocante e saboroso",
      price: "5.99",
      imageUrl: "/bacon.jpg",
    },
    {
      id: 2,
      name: "Queijo extra",
      description: "Derretido e delicioso",
      price: "3.50",
      imageUrl: "/queijo.jpg",
    },
    {
      id: 3,
      name: "Ovo",
      description: "Frito na hora ",
      price: "2.00",
      imageUrl: "/ovo.jpg",
    },
    {
      id: 4,
      name: "Bacon",
      description: "Crocante e saboroso",
      price: "5.99",
    },
    {
      id: 5,
      name: "Queijo extra",
      price: "3.50",
      imageUrl: "/queijo.jpg",
    },
    {
      id: 6,
      name: "Ovo",
    },
  ];

  return (
    <div>
      <Header />
      <main className="mx-auto container min-h-screen pt-18 md:pt-24 max-w-4xl p-2">
        {/* <VoltarButton /> */}
        <Pedido />
        <AdicionaisSection maxItems={10} items={mockAdicionais} />
      </main>
    </div>
  );
}
