"use client";
import { useState } from "react";
import LoginPopup from "./Login";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import CartDropDown from "./CartDropDown";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <header className="bg-zinc-900 text-white flex items-center justify-between px-4 lg:px-24 py-3 shadow-md fixed w-full z-100">
        <Link href="/">
          <div className="">
            <h1 className="text-orange-400 font-bold  md:text-xl font-serif">
              Restaurante
            </h1>
          </div>
        </Link>

        <div className="flex items-center space-x-5">
          <Link
            href="/"
            className="text-sm cursor-pointer hover:text-orange-400 flex-shrink-0"
          >
            Inicio
          </Link>
          <button
            className="text-sm cursor-pointer hover:text-orange-400 flex-shrink-0"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
          <Link
            href="/cadastro"
            className="text-sm cursor-pointer hover:text-orange-400 flex-shrink-0"
            onClick={() => setShowRegister(true)}
          >
            Cadastrar
          </Link>
          <Link
            href="/perfil"
            className="text-sm cursor-pointer hover:text-orange-400 flex-shrink-0"
          >
            Perfil
          </Link>

          <button
            className="text-sm cursor-pointer hover:text-orange-400 flex-shrink-0"
            onClick={() => setShowCart((prev) => !prev)} //verificar
          >
            <FaShoppingCart size={23} />
          </button>
        </div>
      </header>

      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}

      <CartDropDown open={showCart} onClose={() => setShowCart(false)} />
    </>
  );
}
