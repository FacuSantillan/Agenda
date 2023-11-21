import React from "react";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Pacientes from "./pages/pacientes/Pacientes";
import Calendario from "./pages/calendario/calendario";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="pacientes" element={<Pacientes />} />
          <Route path="calendario" element={<Calendario />} />
          {/* Puedes agregar más rutas para otras secciones dentro de Dashboard */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
