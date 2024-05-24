import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email === "admin@hotmail.com" && password === "admin") {
      setIsAdmin(true);
      navigate("/adicionar-veiculos");
    } else {
      alert("Credenciais inválidas");
    }
  };

  const logout = () => {
    setIsAdmin(false);
    navigate("/admin");
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
