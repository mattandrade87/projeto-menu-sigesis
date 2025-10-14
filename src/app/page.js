import Image from "next/image";
import Header from "./components/Header";
import CardapioSection from "./components/CardapioSection";
import InputComponent from "./components/InputComponent";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto lg:px-22 px-4 lg:pt-8 pt-4 pb-6">
        <InputComponent placeholder={"Digite o nome do produto"} />
      </div>
      <CardapioSection />

      <Footer />
    </div>
  );
}
