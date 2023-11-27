import React, { useState } from "react";
import NavHome from "../../components/navHome/NavHome";
import "./style.css";
import imgHome from "../../images/Pngtreehealth_workers_fight_coronavirus_5349560.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };
  return (
    <>
      <NavHome />
      <div className="container-fluid section-home">
        <div className="row">
          <div className="col-sm-12">
            <div className="d-flex justify-content-between">
              <div className="titleHome">
                <Link to="/Dashboard">REGISTRARME</Link>
                <p className="pHome">
                  Agenda reuniones, citas, clientes, servicios y gestiona tu
                  agenda online
                </p>
                <p
                  className="btnP btnRegister"
                  data-bs-toggle="modal"
                  data-bs-target="#modalRegister"
                >
                  Registrate ahora!
                </p>
              </div>
              <div className="imgHome">
                <img src={imgHome} alt="imgHome" />
              </div>
            </div>

            {/* MODAL REGISTER */}
            <div
              className="modal fade"
              id="modalRegister"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header flex-column">
                    <h1 id="exampleModalLabel">¡Registrate!</h1>
                    <small>Para acceder a los servicios y beneficios</small>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={usuario.email}
                        onChange={handleChange}
                        // required
                      />
                      <br />

                      <label htmlFor="nombre">Nombre del establecimiento</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={usuario.nombre}
                        onChange={handleChange}
                        // required
                      />
                      <br />

                      <label htmlFor="password"> Crear contraseña</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={usuario.password}
                        onChange={handleChange}
                        // required
                      />
                      <br />

                      <label htmlFor="confirmarPassword">
                        Confirmar contraseña
                      </label>
                      <input
                        type="password"
                        id="confirmarPassword"
                        name="confirmarPassword"
                        value={usuario.confirmarPassword}
                        onChange={handleChange}
                        // required
                      />
                      <br />
                      <div className="text-center mt-3">
                        <button className="btnFormLogin" type="submit"></button>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer justify-content-center">
                    <p>
                      Ya tienes una cuenta?
                      <span data-bs-toggle="modal" data-bs-target="#modalLogin">
                        INICIAR SESION
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* FIN MODAL REGISTER */}

            {/* MODAL LOGIN */}
            <div
              className="modal fade"
              id="modalLogin"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header flex-column">
                    <h1 id="exampleModalLabel">Ingresa a tu cuenta</h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={usuario.email}
                        onChange={handleChange}
                        required
                      />
                      <br />

                      <label htmlFor="password">Contraseña</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={usuario.password}
                        onChange={handleChange}
                        required
                      />
                      <br />

                      <div className="text-center mt-3">
                        <button className="btnFormLogin" type="submit">
                          INGRESAR
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer justify-content-center">
                    <p>
                      Aún no eres miembro?{" "}
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#modalRegister"
                      >
                        CREAR CUENTA
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* FIN MODAL LOGIN */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
