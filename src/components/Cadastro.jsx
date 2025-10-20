"use client";
import { useState } from "react";
import { IoEye, IoEyeOff, IoCloseOutline } from "react-icons/io5";

export default function RegisterPopup({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  // formata o telefone para (XX) XXXXX-XXXX
  const formatPhone = (value) => {
    const onlyNums = value.replace(/\D/g, "");
    if (onlyNums.length <= 2) return onlyNums;
    if (onlyNums.length <= 7)
      return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2)}`;
    if (onlyNums.length <= 11)
      return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(
        2,
        7
      )}-${onlyNums.slice(7)}`;
    return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 7)}-${onlyNums.slice(
      7,
      11
    )}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // aplica a formatação de telefone
    if (name === "phone") {
      setFormData({ ...formData, [name]: formatPhone(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Cadastro enviado:", formData);
    // Aqui você pode enviar os dados para sua API
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-zinc-800 rounded-2xl shadow-lg p-6 w-[90%] max-w-md relative overflow-y-auto max-h-[90vh]">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          <IoCloseOutline size={20} />
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-100">
          Criar conta
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Nome completo
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Seu nome"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          {/* Celular */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Número de celular
            </label>
            <input
              type="tel"
              name="phone"
              required
              maxLength={15}
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="(00) 00000-0000"
            />
          </div>

          {/* Endereço */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Rua
              </label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Nome da rua"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Número
              </label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Nº"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Bairro
              </label>
              <input
                type="text"
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Bairro"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Cidade
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Cidade"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Estado
            </label>
            <input
              type="text"
              name="state"
              maxLength={2}
              value={formData.state.toUpperCase()}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none uppercase"
              placeholder="UF"
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
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none pr-10"
                placeholder="Crie uma senha"
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

          {/* Confirmar senha */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Confirmar senha
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none pr-10"
                placeholder="Repita sua senha"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {showConfirm ? <IoEyeOff size={18} /> : <IoEye size={18} />}
              </button>
            </div>
          </div>

          {/* Botão de cadastrar */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
