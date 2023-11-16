import React from "react";
import "./style.css";

// FILTRADO + NAV
const DashboardNav = ({ cambiarFiltro, filtro }) => {

  const handleFiltroClick = (filtro) => {
    cambiarFiltro(filtro);

  };

  return (
    <>
      <div className="dMenu">
        <div className="comandosD">
          <p
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#dashboardMenu"
            aria-controls="staticBackdrop"
          >
            <i className="bx bx-menu"></i>Menu
          </p>
          <p
            onClick={() => handleFiltroClick("pacientes")}
            className={filtro === "pacientes" ? "activo" : ""}
          >
            <i className="bx bxs-user-rectangle"></i>Pacientes
          </p>
          <p
            onClick={() => handleFiltroClick("calendario")}
            className={filtro === "calendario" ? "activo" : ""}
          >
            <i className="bx bx-calendar"></i>Calendario
          </p>
        </div>
        <p className="titleLogo2">
          <i className="bx bxs-clinic logo2"></i>Nombre del establecimiento
        </p>
      </div>
    </>
  );
};

export default DashboardNav;
