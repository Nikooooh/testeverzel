import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VehicleCatalog = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    marca: "",
    modelo: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("nome", formData.nome);
    formDataToSend.append("marca", formData.marca);
    formDataToSend.append("modelo", formData.modelo);
    formDataToSend.append("image", formData.image);

    try {
      const response = await axios.post(
        "http://localhost:8000/admin/api/vehicles",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        console.log("Veículo adicionado com sucesso:", response.data.vehicle);
        setFormData({
          nome: "",
          marca: "",
          modelo: "",
          image: null, // Correto: image
        });
        navigate("/adicionar-veiculos");
      } else {
        console.error("Erro ao adicionar veículo:", response.data.message);
      }
    } catch (error) {
      console.error("Erro ao adicionar veículo:", error.response.data.message);
    }
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
          <label className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Marca
          </label>
          <input
            type="text"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Modelo
          </label>
          <input
            type="text"
            name="modelo"
            value={formData.modelo}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Foto
          </label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Adicionar Veículo
        </button>
      </form>
    </div>
  );
};

export default VehicleCatalog;
