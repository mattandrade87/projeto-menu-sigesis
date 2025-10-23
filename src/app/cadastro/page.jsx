import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RegisterForm from "./components/RegisterForm";
import VoltarButton from "../../components/VoltarButton";

export default function Cadastro({}) {
  return (
    <>
      <Header />
      <main className=" container mx-auto p-4 md:max-w-1/2 py-14  md:pt-20">
        <div className="border p-4 bg-white rounded-lg border-gray-300 shadow-md">
          <div className="relative flex items-center justify-center text-center font-semibold text-2xl pb-2  mb-4 border-gray-300">
            <div className="absolute left-0 flex items-center">
              <VoltarButton />
            </div>
            <h1>Cadastro de Usuário</h1>
          </div>

          <RegisterForm />
        </div>
      </main>

      <Footer />
    </>
  );
}
