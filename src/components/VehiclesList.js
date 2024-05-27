import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/admin/api/vehicles"
        );
        setVehicles(response.data.vehicles);
      } catch (error) {
        console.error("Erro ao buscar veículos:", error.response.data.message);
      }
    };
    fetchVehicles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/admin/api/vehicles/${id}`);
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
    } catch (error) {
      console.error("Erro ao deletar veículo:", error.response.data.message);
    }
  };

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-2xl font-semibold text-blue-900 mb-6">
        Veículos Cadastrados
      </h1>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Buscar veículo pelo nome"
          className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVehicles.map((vehicle) => (
          <div key={vehicle.id} className="border p-4 rounded-md shadow-sm">
            <img
              src={vehicle.imageurl}
              alt={vehicle.nome}
              className="mb-4 w-full h-48 object-fit"
            />
            <h2 className="text-xl font-bold">{vehicle.nome}</h2>
            <p>
              <strong>Marca:</strong> {vehicle.marca}
            </p>
            <p>
              <strong>Modelo:</strong> {vehicle.modelo}
            </p>
            <p>
              {" "}
              {/* Exibição do preço */}
              <strong>Preço:</strong> R$ {vehicle.preco}
            </p>
            <div className="flex mt-4">
              <Link
                to={`/edit/${vehicle.id}`}
                className="mr-4 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Editar
              </Link>
              <button
                onClick={() => handleDelete(vehicle.id)}
                className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
