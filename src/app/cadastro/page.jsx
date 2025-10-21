import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RegisterForm from "./components/RegisterForm";

export default function Cadastro({ onClose }) {
  return (
    <>
      <Header />
      <main className=" container mx-auto max-w-5/6 md:max-w-1/4 py-18  md:pt-22">
        <div className="text-center font-semibold text-2xl pb-4">
          <h1>Cadastro de Usuário</h1>
        </div>
        <RegisterForm />
      </main>

      <Footer />
    </>
  );
}
