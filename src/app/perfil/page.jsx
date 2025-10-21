import Header from "../../components/Header";
import CardPerfil from "./components/CardPerfil";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="pt-24 px-4 pb-2 md:px-32 bg-gray-50">
        <div className="flex justify-center items-start min-h-screen  bg-gray-50">
          <div className="w-full max-w-2xl px-4 md:px-32 ">
            <h1 className="text-3xl font-semibold text-gray-800 ">
              Meus dados
            </h1>
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
