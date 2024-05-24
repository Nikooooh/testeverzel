import React from "react";
import { motion } from "framer-motion";
import CarImage from "../images/car.png";

const CarAnimation = () => {
  return (
    <div className="absolute top-0 left-0 w-full pointer-events-none">
      <motion.img
        src={CarImage}
        alt="Car"
        initial={{ x: "-100%", y: "-20%", scale: 0.3 }} // Tornar o carro inicialmente menor e movê-lo mais para cima
        animate={{
          x: "200%",
          y: "5%",
          scale: 0.3,
          transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
        style={{ position: "absolute" }}
      />
    </div>
  );
};

export default CarAnimation;
