"use client";
import { useState } from "react";
// import { Eye, EyeOff, X } from "lucide-react";
import { IoEye, IoEyeOff, IoCloseOutline } from "react-icons/io5";

export default function LoginPopup({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-zinc-800 rounded-2xl shadow-lg p-6 w-[90%] max-w-md relative">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-800 dark:hover:text-white"
        >
          <IoCloseOutline size={20} />
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
          Entrar
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none pr-10"
                placeholder="Digite sua senha"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {showPassword ? <IoEyeOff size={18} /> : <IoEye size={18} />}
              </button>
            </div>
          </div>

          {/* Esqueceu a senha */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => alert("Recuperar senha")}
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              Esqueceu sua senha?
            </button>
          </div>

          {/* Botão de login */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
