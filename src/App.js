import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/authContext";
import Login from "./components/Login";
import VehicleCatalog from "./components/Vehicles";
import HomePage from "./components/HomePage";

const PrivateRoute = ({ children }) => {
  const { isAdmin } = useAuth();
  return isAdmin ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route
          path="/adicionar-veiculos"
          element={
            <PrivateRoute>
              <VehicleCatalog />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
