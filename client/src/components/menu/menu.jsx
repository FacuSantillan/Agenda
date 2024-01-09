import React, { useEffect } from "react";

import "./style.css";
import { Link } from "react-router-dom";

const Menu = () => {
  // COLOR DEL BODY
  return (
    <div className="body">
      <div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="dashboardMenu"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            Menu
          </h5>
          <i
            className="bx bx-x btnCloseMenuD"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></i>
        </div>
        <div className="offcanvas-body">
          <div>
            <Link to={"/dashboard/redDePrestadores"}>
              <p>
                <i className="bx bx-group"></i>Red de prestadores
              </p>
            </Link>
            <p>
              <i className="bx bx-edit"></i>Dias Y horarios
            </p>
            <Link to={"/dashboard/redDepacientes"}>
              <p>
                <i className="bx bx-user-plus"></i>Registrar paciente
              </p>
            </Link>
          </div>
          <div>
            <p>
              <i className="bx bx-support"></i>Soporte tecnico
            </p>
            <p className="btnOut">
              <i className="bx bx-log-out"></i>Cerrar sesion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
