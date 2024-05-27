import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CarAnimation from "./CarAnimation"; // Importe o componente de animação de carros

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #FFADAD, #FFD6A5, #FDFFB6)",
      }}
    >
      <CarAnimation /> {/* Renderize o componente de animação de carros */}
      <motion.h1
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
        className="text-5xl font-bold mb-8 text-center text-blue-900"
      >
        Bem-vindo ao Nosso Showroom de Carros!
      </motion.h1>
      <motion.p
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
        className="text-lg  font-semibold mb-12 text-center text-blue-900"
      >
        Encontre os melhores carros para você.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-lg hover:bg-gray-200 text-red-700 font-bold py-3 px-5 rounded-lg shadow-lg transition duration-300 ease-in-out"
      >
        <Link to="/catalogo-veiculos">Ver Catálogo</Link>
      </motion.button>
    </motion.div>
  );
};

export default HomePage;
