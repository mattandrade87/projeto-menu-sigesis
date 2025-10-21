"use client";

import Header from "../../components/Header";
import { useState } from "react";

export default function Cadastro({ onClose }) {
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
  };
  return (
    <>
      <Header />
      <main className="pt-22">
        <div className="mx-auto container min-h-screen  max-w-2xl bg-white/90 border border-gray-300 p-6 rounded">
          <h1 className="text-2xl font-semibold pb-4 text-center">Cadastro</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Nome completo
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-white  outline-none"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg bg-white  outline-none"
                placeholder="Seu email"
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
