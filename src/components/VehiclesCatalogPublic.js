import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Logo from "../images/4202069logosimplesocialsocialmedia-115619_115682.png";

const VehicleCatalogPublic = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const checkPriceInRange = (price, filter) => {
    switch (filter) {
      case "0":
        return price <= 39900;
      case "39900":
        return price > 39900 && price <= 59000;
      case "59000":
        return price > 59000 && price <= 99900;
      case "99900":
        return price > 99900 && price <= 149900;
      case "149900":
        return price > 149900 && price <= 199900;
      case "199900":
        return price > 199900 && price <= 299900;
      case "299900":
        return price > 299900 && price <= 399900;
      case "399900":
        return price > 399900;
      default:
        return true;
    }
  };
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/admin/api/vehicles"
        );
        const sortedVehicles = response.data.vehicles.sort(
          (a, b) => a.preco - b.preco
        ); // Ordena os veículos por preço
        setVehicles(sortedVehicles);
      } catch (error) {
        console.error("Erro ao buscar veículos:", error.response.data.message);
      }
    };
    fetchVehicles();
  }, []);

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.nome.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (brandFilter === "" ||
        vehicle.marca.toLowerCase() === brandFilter.toLowerCase()) &&
      (priceFilter === "" || checkPriceInRange(vehicle.preco, priceFilter))
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBrandFilterChange = (e) => {
    setBrandFilter(e.target.value);
  };

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="" class="flex items-center">
              <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Logo" />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Recayd Cars
              </span>
            </a>
            <div class="flex items-center lg:order-2">
              <a
                href="#"
                class="text-gray-800 font-semibold dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Login
              </a>
              <a
                href="#"
                class="text-white font-semibold bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Começar
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Empresa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Catálogo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Valores
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-6 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Pesquisar por nome do carro"
              className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <select
            className="border p-2 rounded-md"
            value={brandFilter}
            onChange={handleBrandFilterChange}
          >
            <option value="">Filtrar por Marca</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Ford">Ford</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Nissan">Nissan</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Audi">Audi</option>
            <option value="Hyundai">Hyundai</option>
          </select>
          <select
            className="border p-2 rounded-md"
            value={priceFilter}
            onChange={handlePriceFilterChange}
          >
            <option value="">Filtrar por Faixa de Preço</option>
            <option value={0}>Até R$ 39.900</option>
            <option value={39900}>R$ 39.901 - R$ 59.000</option>
            <option value={59000}>R$ 59.001 - R$ 99.900</option>
            <option value={99900}>R$ 99.901 - R$ 149.900</option>
            <option value={149900}>R$ 149.901 - R$ 199.900</option>
            <option value={199900}>R$ 199.901 - R$ 299.900</option>
            <option value={299900}>R$ 299.901 - R$ 399.900</option>
            <option value={399900}>Acima de R$ 399.900</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="border rounded-md overflow-hidden shadow-lg"
            >
              <img
                src={vehicle.imageurl}
                alt={vehicle.nome}
                className="w-full h-64 object-fit"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{vehicle.nome}</h2>
                <p className="text-gray-600 mb-2">
                  <strong>Marca:</strong> {vehicle.marca}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Modelo:</strong> {vehicle.modelo}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Preço:</strong> R$ {vehicle.preco}
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                  Saiba mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="" class="hover:underline">
              Recayd Cars™
            </a>
            . Todos direitos reservados.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacidade
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Contato
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Começar
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default VehicleCatalogPublic;
