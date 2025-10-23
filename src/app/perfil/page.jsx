import VoltarButton from "../../components/VoltarButton";
import Header from "../../components/Header";
import CardPerfil from "./components/CardPerfil";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="py-18  md:pt-18 md:pb-28 px-4  md:px-32 bg-gray-50">
        <div className="flex justify-center items-start  bg-gray-50">
          <div className="w-full max-w-xl p-8 px-12 rounded-lg  border-gray-300 bg-white border">
            <div className="pb-8">
              <div className="absolute">
                <VoltarButton />
              </div>
              <h1 className="text-3xl font-semibold text-center text-gray-800 ">
                Meus dados
              </h1>
            </div>

            <CardPerfil
              titulo={"Informações Pessoais"}
              subtitulo={"Nome Completo e CPF"}
            />
            <CardPerfil
              titulo={"Dados de Contato"}
              subtitulo={"E-mail e Telefone"}
            />
            <CardPerfil titulo={"Endereço"} subtitulo={"Rua, Número, Bairro"} />
            <CardPerfil
              titulo={"Pedidos"}
              subtitulo={"Confira informações dos seus pedidos"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
