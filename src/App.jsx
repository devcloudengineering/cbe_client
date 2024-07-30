import React, { useState, useEffect } from "react";
import Combustible from "./components/Combustible/Combustible";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/Login/ProtectedRoute";
import PanelDashboard from "./components/PanelDashboard/PanelDashboard";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Spinner } from "@nextui-org/react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const validateToken = async () => {
    const token = localStorage.getItem("token");

    if (!token) return false;

    try {
      const response = await fetch(
        "https://combustible-node-app-e4e4349af549.herokuapp.com/validarjwt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const resultado = response.ok ? true : false;
      console.log("Token validado ", resultado);
      return resultado;
    } catch (error) {
      console.error("Error validando el token:", error);
      return false;
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const isValid = await validateToken();
      setIsAuthenticated(isValid);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <Spinner
        label="Cargando"
        color="warning"
        className="h-screen flex justify-center"
      />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PanelDashboard />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/combustible"
          element={
            <ProtectedRoute canActivate={isAuthenticated}>
              <Combustible />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
