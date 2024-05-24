import React from "react";
import { useAuth } from "../context/authContext";

const VehicleCatalog = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Catálogo de Veículos</h1>
        <button
          onClick={logout}
          className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Sair
        </button>
      </div>
      <p>Formulário para adicionar veículos</p>
    </div>
  );
};

export default VehicleCatalog;
