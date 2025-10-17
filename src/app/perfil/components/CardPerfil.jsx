import { TiArrowRight } from "react-icons/ti";

export default function CardPerfil({ titulo, subtitulo }) {
  return (
    <div className="flex justify-between border-b-1 border-gray-300 py-4 cursor-pointer items-center">
      <div>
        <p className="font-semibold">{titulo}</p>
        <p className="text-gray-400">{subtitulo}</p>
      </div>
      <TiArrowRight color="orange" size={22} />
    </div>
  );
}
