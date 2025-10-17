import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Pedido from "./components/Pedido";

export default function Page({ params }) {
  return (
    <div>
      <Header />
      <main className="mx-auto container px-32 py-12">
        <Pedido />
      </main>
      <Footer />
    </div>
  );
}
