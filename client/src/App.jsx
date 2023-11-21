import React from "react";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Pacientes from "./pages/pacientes/Pacientes";
import Calendario from "./pages/calendario/calendario";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
const { pathname } = useLocation();

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/pacientes" element={<Pacientes />} />
        <Route path="/dashboard/calendario" element={<Calendario />} />
      </Routes>
  );
}

export default App;
