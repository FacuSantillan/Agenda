import React from "react";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Pacientes from "./pages/pacientes/Pacientes";
import RedDePrestadores from "./pages/Dashboard/redDePrestadores/redDePrestadores";
import RedDePacientes from "./pages/Dashboard/redDePacientes/redDePacientes";
import Calendario from "./pages/calendario/calendario";
import DashboardNav from "./components/dashboardNav/DashboardNav";
import Menu from "./components/menu/menu";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== "/" && <DashboardNav />}
      {pathname !== "/" && <Menu />}
      {pathname === "/dashboard" && <Pacientes />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/pacientes" element={<Pacientes />} />
        <Route path="/dashboard/calendario" element={<Calendario />} />
        <Route
          path="/dashboard/redDePrestadores"
          element={<RedDePrestadores />}
        />
        <Route path="/dashboard/redDePacientes" element={<RedDePacientes />} />s
      </Routes>
    </div>
  );
}

export default App;
