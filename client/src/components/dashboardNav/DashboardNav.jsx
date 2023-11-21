import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const DashboardNav = () => {
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
          <p>
            <i className="bx bxs-user-rectangle"></i>
            <Link to="/dashboard/pacientes">Pacientes</Link>
          </p>
          <p>
            <i className="bx bx-calendar"></i>
            <Link to="/dashboard/calendario">Calendario</Link>
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
