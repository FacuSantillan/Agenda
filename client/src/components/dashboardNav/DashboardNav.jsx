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
          <Link to="/dashboard/pacientes">
            <p>
              <i className="bx bxs-user-rectangle"></i>
              Pacientes
            </p>
          </Link>
          <Link to="/dashboard/calendario">
            <p>
              <i className="bx bx-calendar"></i>
              Calendario
            </p>
          </Link>
        </div>
        <p className="titleLogo2">
          <i className="bx bxs-clinic logo2"></i>Nombre del establecimiento
        </p>
      </div>
    </>
  );
};

export default DashboardNav;
