import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    marca: "",
    modelo: "",
    preco: "", // Adicionando campo preco ao estado inicial
    image: null,
  });

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/admin/api/vehicles/${id}`
        );
        const { nome, marca, modelo, preco, imageurl } = response.data.vehicle;
        setFormData({ nome, marca, modelo, preco, image: imageurl }); // Incluindo preco no estado inicial
      } catch (error) {
        console.error("Erro ao buscar veículo:", error.response.data.message);
      }
    };
    fetchVehicle();
  }, [id]);

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
    formDataToSend.append("preco", formData.preco); // Incluindo preco nos dados enviados
    if (formData.image instanceof File) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const response = await axios.put(
        `http://localhost:8000/admin/api/vehicles/${id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        console.log("Veículo editado com sucesso:", response.data.vehicle);
        navigate("/veiculos");
      } else {
        console.error("Erro ao editar veículo:", response.data.message);
      }
    } catch (error) {
      console.error("Erro ao editar veículo:", error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Editar Veículo</h1>
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
            Preço
          </label>
          <input
            type="number"
            step="0.01"
            name="preco"
            value={formData.preco}
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
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
};

export default EditVehicle;
