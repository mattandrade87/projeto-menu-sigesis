"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-zinc-900 text-white flex items-center justify-between lg:px-24 py-3 shadow-md relative">
      <div className="flex items-center space-x-2">
        <span className="text-orange-500 text-2xl">🍽️</span>
        <h1 className="text-orange-400 font-bold text-xl font-serif">
          Restaurante
        </h1>
      </div>

      <div className="flex items-center space-x-5">
        <button className="text-sm hover:text-orange-400">Login</button>
        <button className="text-sm hover:text-orange-400">Cadastrar</button>
      </div>
    </header>
  );
}
