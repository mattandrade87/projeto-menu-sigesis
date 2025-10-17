// import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Nome */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">Sigesis</h2>
          <p
            className="text-sm text-
          gray-400"
          >
            Soluções digitais modernas para o seu negócio.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-white font-semibold mb-3">Links rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Cardápio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Contato
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Sobre nós
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-white font-semibold mb-3">Siga-nos</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500 transition">
              <IoLogoInstagram size={22} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <IoLogoFacebook size={22} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <IoLogoTwitter size={22} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <IoLogoYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Desenvolvido por{" "}
        <span className="text-white font-medium">Sigesis</span>. Todos os
        direitos reservados.
      </div>
    </footer>
  );
}
