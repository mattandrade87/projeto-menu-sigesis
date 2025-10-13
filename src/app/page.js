import Image from "next/image";
import Header from "./components/Header";
import CardapioSection from "./components/CardapioSection";
import InputComponent from "./components/InputComponent";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto pt-8 pb-6">
        <InputComponent placeholder={"Digite o nome do produto"} />
      </div>
      <CardapioSection />
    </div>
  );
}
