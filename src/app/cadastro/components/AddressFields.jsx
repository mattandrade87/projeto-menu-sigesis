import InputField from "./InputField";

export default function AddressFields({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <InputField
        label="Rua"
        name="street"
        placeholder="Nome da rua"
        value={formData.street}
        onChange={handleChange}
      />
      <InputField
        label="Número"
        name="number"
        placeholder="Nº"
        value={formData.number}
        onChange={handleChange}
      />
      <InputField
        label="Bairro"
        name="neighborhood"
        placeholder="Bairro"
        value={formData.neighborhood}
        onChange={handleChange}
      />
      <InputField
        label="Cidade"
        name="city"
        placeholder="Cidade"
        value={formData.city}
        onChange={handleChange}
      />
      <InputField
        label="Estado"
        name="state"
        placeholder="UF"
        value={formData.state.toUpperCase()}
        onChange={handleChange}
        maxLength={2}
      />
    </div>
  );
}
