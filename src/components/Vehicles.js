import React, { useState } from "react";
import { useAuth } from "../context/authContext";

const VehicleCatalog = () => {
  const { logout } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    photo: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.brand ||
      !formData.model ||
      !formData.photo
    ) {
      setErrors({
        name: !formData.name ? "Campo obrigatório" : "",
        brand: !formData.brand ? "Campo obrigatório" : "",
        model: !formData.model ? "Campo obrigatório" : "",
        photo: !formData.photo ? "Campo obrigatório" : "",
      });
      return;
    }
    console.log(formData);
    setFormData({
      name: "",
      brand: "",
      model: "",
      photo: null,
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-900">
          Formulário para adicionar Veículos
        </h1>
        <button
          onClick={logout}
          className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Sair
        </button>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mt-20 mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-1 font-semibold text-gray-800"
          >
            Nome: <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.name
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
          />
          {errors.name && <p className="text-red-600">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="brand"
            className="block mb-1 font-semibold text-gray-800"
          >
            Marca: <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.brand
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
          />
          {errors.brand && <p className="text-red-600">{errors.brand}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="model"
            className="block mb-1 font-semibold text-gray-800"
          >
            Modelo: <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.model
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
          />
          {errors.model && <p className="text-red-600">{errors.model}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="photo"
            className="block mb-1 font-semibold text-gray-800"
          >
            Foto: <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.photo
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
          />
          {errors.photo && <p className="text-red-600">{errors.photo}</p>}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Adicionar Veículo
        </button>
      </form>
    </div>
  );
};

export default VehicleCatalog;
