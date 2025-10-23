"use client";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import AddressFields from "./AddressFields";
import { useState } from "react";

export default function RegisterForm() {
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
    if (name === "phone") {
      setFormData({ ...formData, [name]: formatPhone(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // TEMPORARIO
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    // console.log("Cadastro enviado:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <InputField
        label="Nome completo"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="seuemail@exemplo.com"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <InputField
        label="Número de celular"
        type="tel"
        name="phone"
        placeholder="(00) 00000-0000"
        value={formData.phone}
        onChange={handleChange}
        maxLength={15}
        required
      />

      <AddressFields formData={formData} handleChange={handleChange} />

      <PasswordField
        label="Senha"
        name="password"
        placeholder="Crie uma senha"
        value={formData.password}
        onChange={handleChange}
      />

      <PasswordField
        label="Confirmar senha"
        name="confirmPassword"
        placeholder="Repita sua senha"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-orange-500 cursor-pointer text-white py-2.5 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
      >
        Cadastrar
      </button>
    </form>
  );
}
