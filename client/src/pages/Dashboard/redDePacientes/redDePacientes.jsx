import React from "react";
import "./style.css";

const redDePacientes = () => {
  return (
    <>
      <div className="container-fluid section-rdp">
        <div className="row mb-5">
          <div className="col-12">
            <div className="headRDP">
              <h1>Pacientes</h1>
              <div className="d-flex align-items-center gap-3">
                <form className="form-1">
                  <input
                    type="text"
                    id="agregar"
                    name="q"
                    placeholder="Buscar paciente"
                  />
                  <button type="submit">BUSCAR</button>
                </form>
                <button
                  className="addDoctor"
                  data-bs-toggle="modal"
                  data-bs-target="#ModalAddDoctor"
                >
                  AÑADIR
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL AGREGAR PACIENTE */}
        <div
          className="modal fade"
          id="ModalAddDoctor"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <p>Carga de datos</p>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-6">
                    <form className="form-1 form-1-1">
                      <label className="mt-0">Nombre Completo</label>
                      <input
                        type="text"
                        id="nombreCompleto"
                        name="nombreCompleto"
                        required
                      />
                      <div className="inter">
                        <div className="d-flex flex-column">
                          <label>Edad</label>
                          <input
                            className="inputSmall"
                            type="number"
                            id="cuil"
                            name="edad"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <label>CUIL</label>
                          <input
                            className="inputSmall"
                            type="number"
                            id="cuil"
                            name="cuil"
                          />
                        </div>
                      </div>

                      <label>DNI</label>
                      <input type="text" id="dni" name="dni" />

                      <label>Fecha de nacimiento</label>
                      <input
                        type="text"
                        id="fechaDeNacimiento"
                        name="fechaDeNacimiento"
                      />

                      <label>Telefono</label>
                      <input type="text" id="celular" name="celular" />

                      <label>Correo Electrónico</label>
                      <input
                        type="email"
                        id="correoElectronico"
                        name="correoElectronico"
                      />
                    </form>
                  </div>

                  <div className="col-6">
                    <form className="form-1">
                      <label>Domicilio</label>
                      <input type="text" id="domicilio" name="domicilio" />

                      <label>Obra social</label>
                      <input type="text" id="obraSocial" name="obraSocial" />
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btnescartar"
                  data-bs-dismiss="modal"
                >
                  Descartar
                </button>
                <button type="button" className="saveChanges">
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* FIN MODAL AGREGAR DOCOTOR */}

        <section className="planillaRed">
          <div className="row row-red">
            <div className="col-2"></div>
            <div className="col-3">
              <p className="r-t">Nombre</p>
            </div>
            <div className="col-3">
              <p className="r-t">DNI</p>
            </div>
            <div className="col-4">
              <p className="r-t">Proximo turno</p>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-2 text-center">
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="col-3">
              <p>Valentina García</p>
            </div>
            <div className="col-3">
              <p>XX.XXX.XXX</p>
            </div>
            <div className="col-4">
              <p>XX/XX/XXXX</p>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-2 text-center">
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="col-3">
              <p>Martín Rodríguez</p>
            </div>
            <div className="col-3">
              <p>XX.XXX.XXX</p>
            </div>
            <div className="col-4">
              <p>XX/XX/XXXX</p>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-2 text-center">
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="col-3">
              <p>Carolina López</p>
            </div>
            <div className="col-3">
              <p>XX.XXX.XXX</p>
            </div>
            <div className="col-4">
              <p>XX/XX/XXXX</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default redDePacientes;
