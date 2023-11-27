import React, { useState } from "react";
import "./style.css";

const RedDePrestadores = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState({});

  const handleDayChange = (day) => {
    if (selectedDays.includes(day)) {
      const updatedDays = selectedDays.filter(
        (selectedDay) => selectedDay !== day
      );
      const updatedTimes = { ...selectedTimes };
      delete updatedTimes[day];
      setSelectedDays(updatedDays);
      setSelectedTimes(updatedTimes);
    } else {
      setSelectedDays([...selectedDays, day]);
      setSelectedTimes({ ...selectedTimes, [day]: [""] });
    }
  };

  const handleTimeChange = (day, index, value) => {
    setSelectedTimes((prevTimes) => ({
      ...prevTimes,
      [day]: [
        ...prevTimes[day].slice(0, index),
        value,
        ...prevTimes[day].slice(index + 1),
      ],
    }));
  };

  const handleAddTimeInput = (day) => {
    setSelectedTimes((prevTimes) => ({
      ...prevTimes,
      [day]: [...prevTimes[day], ""],
    }));
  };

  const handleRemoveTimeInput = (day, index) => {
    setSelectedTimes((prevTimes) => ({
      ...prevTimes,
      [day]: [
        ...prevTimes[day].slice(0, index),
        ...prevTimes[day].slice(index + 1),
      ],
    }));
  };

  return (
    <>
      <div className="container-fluid section-rdp">
        <div className="row mb-5">
          <div className="col-12">
            <div className="headRDP">
              <h1>Red de prestadores</h1>
              <div className="d-flex align-items-center gap-3">
                <form className="form-1">
                  <input
                    type="text"
                    id="agregar"
                    name="q"
                    placeholder="Buscar profesional"
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

        {/* MODAL AGREGAR DOCOTOR */}
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
                    <form className="form-1">
                      <label className="mt-0">Nombre Completo</label>
                      <input
                        type="text"
                        id="nombreCompleto"
                        name="nombreCompleto"
                        required
                      />
                      <label>Especialidad</label>
                      <input type="text" id="especialidad" name="obraSocial" />

                      <label>DNI</label>
                      <input type="text" id="dni" name="dni" />

                      <label>Telefono</label>
                      <input type="text" id="celular" name="celular" />

                      <label>Correo Electrónico</label>
                      <input
                        type="email"
                        id="correoElectronico"
                        name="correoElectronico"
                      />

                      <label>Matricula</label>
                      <input type="text" id="matricula" name="obraSocial" />
                      <div className="mt-3">
                        <button
                          class="btnVerRef"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          Refernecias
                        </button>
                        <div class="collapse" id="collapseExample">
                          <div class="card card-body mt-2">
                            Some placeholder content for the collapse component.
                            This panel is hidden by default but revealed when
                            the user activates the relevant trigger.
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="col-6">
                    <form className="form-2">
                      <label>Dias/horas disponibles</label>
                      <div className="selectDate">
                        {[
                          "LUNES",
                          "MARTES",
                          "MIERCOLES",
                          "JUEVES",
                          "VIERNES",
                          "SABADO",
                        ].map((day) => (
                          <div key={day}>
                            <div className="selectDay">
                              <input
                                className="checkDay form-check-input"
                                type="checkbox"
                                value={day}
                                checked={selectedDays.includes(day)}
                                onChange={() => handleDayChange(day)}
                              />
                              <label>{day}</label>
                            </div>
                            {selectedTimes[day] && (
                              <div className="comandosDyH">
                                {selectedTimes[day].map((time, timeIndex) => (
                                  <div key={timeIndex} className="d-flex">
                                    <input
                                      className="hora"
                                      type="time"
                                      value={time}
                                      onChange={(e) =>
                                        handleTimeChange(
                                          day,
                                          timeIndex,
                                          e.target.value
                                        )
                                      }
                                    />
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleRemoveTimeInput(day, timeIndex)
                                      }
                                    >
                                      <i class="fa-solid fa-minus"></i>
                                    </button>
                                  </div>
                                ))}
                                <button
                                  type="button"
                                  onClick={() => handleAddTimeInput(day)}
                                >
                                  <i class="fa-solid fa-plus"></i>
                                </button>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* DIV PARA IMPRIMIR DATOS PARA VER SI SETEA */}
                      {/* <div>
                        <p>Días seleccionados: {selectedDays.join(", ")}</p>
                        <p>
                          Horarios seleccionados:{" "}
                          {JSON.stringify(selectedTimes)}
                        </p>
                      </div> */}
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
              <p className="r-t">Especialidad</p>
            </div>
            <div className="col-4">
              <p className="r-t">Dias disponibles</p>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-2 text-center">
              <i class="fa-solid fa-user-doctor"></i>
            </div>
            <div className="col-3">
              <p>Victor Ruiz</p>
            </div>
            <div className="col-3">
              <p>Odontologo</p>
            </div>
            <div className="col-4">
              <p>Lunes a viernes</p>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-2 text-center">
              <i class="fa-solid fa-user-doctor"></i>
            </div>
            <div className="col-3">
              <p>Alejando Galan</p>
            </div>
            <div className="col-3">
              <p>Cirujano</p>
            </div>
            <div className="col-4">
              <p>Lunes, miercoles, viernes</p>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-2 text-center">
              <i class="fa-solid fa-user-doctor"></i>
            </div>
            <div className="col-3">
              <p>Leonel Andres Messi Cuccittini</p>
            </div>
            <div className="col-3">
              <p>Fisioterapeuta</p>
            </div>
            <div className="col-4">
              <p>Sabado</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RedDePrestadores;
