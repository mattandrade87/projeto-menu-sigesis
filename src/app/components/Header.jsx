"use client";
import { useState } from "react";
import LoginPopup from "./Login";
import RegisterPopup from "./Cadastro";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <header className="bg-zinc-900 text-white flex items-center justify-between px-4 lg:px-24 py-3 shadow-md relative">
        <div className="flex items-center space-x-2">
          <span className="text-orange-500 text-2xl">🍽️</span>
          <h1 className="text-orange-400 font-bold text-xl font-serif">
            Restaurante
          </h1>
        </div>

        <div className="flex items-center space-x-5">
          <button
            className="text-sm cursor-pointer hover:text-orange-400 flex-shrink-0"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
          <button
            className="text-sm cursor-pointer hover:text-orange-400 flex-shrink-0"
            onClick={() => setShowRegister(true)}
          >
            Cadastrar
          </button>
          <Link
            href="/perfil"
            className="text-sm cursor-pointer hover:text-orange-400 flex-shrink-0"
          >
            Perfil
          </Link>

          <button className="text-sm cursor-pointer hover:text-orange-400 flex-shrink-0">
            <FaShoppingCart size={23} />
          </button>
        </div>
      </header>

      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterPopup onClose={() => setShowRegister(false)} />}
    </>
  );
}
