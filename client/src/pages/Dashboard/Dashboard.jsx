import React, { useEffect } from "react";
import DashboardNav from "../../components/dashboardNav/DashboardNav";
import "./style.css";
import Pacientes from "../pacientes/Pacientes";
import Calendario from "../calendario/calendario";

const Dashboard = () => {
  // COLOR DEL BODY
  useEffect(() => {
    const originalBodyBackgroundColor = document.body.style.backgroundColor;

    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = originalBodyBackgroundColor;
    };
  }, []);

  // Filtro por defecto al iniciar es "pacientes"
  const [filtro, setFiltro] = React.useState("pacientes");

  return (
    <div>
      <DashboardNav cambiarFiltro={setFiltro} />
      <div
        class="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        tabindex="-1"
        id="dashboardMenu"
        aria-labelledby="staticBackdropLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="staticBackdropLabel">
            Menu
          </h5>
          <i
            class="bx bx-x btnCloseMenuD"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></i>
        </div>
        <div class="offcanvas-body">
          <div>
            <p>
              <i class="bx bx-group"></i>Red de prestadores
            </p>
            <p>
              <i class="bx bx-edit"></i>Dias Y horarios
            </p>
            <p>
              <i class="bx bx-user-plus"></i>Registrar paciente
            </p>
          </div>
          <div>
            <p>
              <i class="bx bx-support"></i>Soporte tecnico
            </p>
            <p className="btnOut">
              <i class="bx bx-log-out"></i>Cerrar sesion
            </p>
          </div>
        </div>
      </div>
      {filtro === "pacientes" && (
        <div className="bodyDashboard">
          <Pacientes />
        </div>
      )}
      {filtro === "calendario" && (
        <div className="bodyDashboard">
          <Calendario />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
