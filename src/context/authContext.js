import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api, { setAuthToken } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password, token) => {
    try {
      setIsAdmin(true);
      setAuthToken(token);
      navigate("/adicionar-veiculos");
    } catch (error) {
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
