import React, { useState } from "react";
import "./style.css";

const Pacientes = () => {
  // ESTADO DEL BOTON EN CARD VER HISTORIAL
  const [historialVisible, setHistorialVisible] = useState(false);

  const toggleHistorial = () => {
    setHistorialVisible(!historialVisible);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <form className="buscadorPaciente">
              <label>
                <i className="bx bx-search-alt"></i>Buscar Paciente
              </label>
              <input
                inputMode="numeric"
                pattern="[0-9]*"
                id="dni"
                className=""
                placeholder="Ingresar DNI"
              />
              <button type="submit" className="btnBuscarDni">
                Buscar
              </button>
            </form>

            <div className="cardPaciente">
              <div className="c1">
                <div className="c1-1">
                  <i className="bx bxs-user-rectangle"></i>
                  <div className="c1-2">
                    <p className="turno">TURNO</p>
                    <aside>
                      <p>
                        N°:<span>XXX</span>
                      </p>
                      <p>
                        DIA:<span>MARTES/XX/XX</span>
                      </p>
                      <p>
                        HORA:<span>XX:XX</span>
                      </p>
                    </aside>
                  </div>
                </div>
                <div className="c2">
                  <p>APELLIDO Y NOMBRE</p>
                  <div className="c2-1">
                    <div className="c2-2">
                      <p>XXXXXXXX</p>
                      <p>CUL: XXX</p>
                      <p>EDAD: XX</p>
                    </div>
                    <div className="">
                      <p>OBRA SOCIAL: XXXXXXXX</p>
                      <p>DOMICILIO: XXXXXXXX</p>
                      <p>FECHA DE NACIMIENTO: XX/XX/XXXX</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end cardContent">
                <p className="d-inline-flex gap-1">
                  <a
                    className={`btnP btnVerHistorial ${
                      historialVisible ? "expanded" : ""
                    }`}
                    onClick={toggleHistorial}
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    {historialVisible ? "VER MENOS" : "VER HISTORIAL"}
                  </a>
                </p>
                <div className="collapse mt-3" id="collapseExample">
                  <div className="card card-body">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pacientes;
