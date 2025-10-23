import Header from "../components/Header";
import CardapioSection from "../components/CardapioSection";
import InputComponent from "../components/InputComponent";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto lg:px-22 px-4 lg:pt-16 pt-16 pb-6">
        <InputComponent placeholder={"Digite o nome do produto"} />
      </div>
      <CardapioSection />
    </div>
  );
}
