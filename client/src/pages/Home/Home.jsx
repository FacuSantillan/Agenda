import React, { useState } from "react";
import { useDispatch, connect } from 'react-redux'
import { createUsuario, loginUsuario, guardarInformacion } from '../../redux/action'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import NavHome from "../../components/navHome/NavHome";
import imgHome from "../../images/Pngtreehealth_workers_fight_coronavirus_5349560.png";
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";

const Home = ({ guardarInformacion }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    email: "",
    clinica: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    guardarInformacion(usuario);
    event.preventDefault();
    if (!usuario.email || !usuario.clinica || !usuario.contraseña || !usuario.confirmarPassword) {
      if (!usuario.email) {
        toast.error("Por favor, ingrese un correo electrónico.",{
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
      if (!usuario.clinica) {
        toast.error("Por favor, ingrese el nombre del establecimiento.",{
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
      if (!usuario.contraseña) {
        toast.error("Por favor, ingrese una contraseña.",{
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
      if (!usuario.confirmarPassword) {
        toast.error("Por favor, confirme la contraseña.",{
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } else
    dispatch(createUsuario(usuario)).then((response) => {
      if (response.payload.status === 201) {
        toast.error("El usuario ya existe. Intente con otro correo.",{
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      } else {
        toast.success("¡Registro exitoso! Redireccionando...",{
          position: toast.POSITION.BOTTOM_RIGHT,
        })
        setTimeout(() => {
          navigate('/dashboard');
        }, 5650);
      }
    });
  };

  const handleLoginSubmit = (event) =>{
    guardarInformacion(usuario);
    event.preventDefault();
    if (!usuario.email || !usuario.contraseña) {
      if (!usuario.email) {
        toast.error("Por favor, ingrese su correo electrónico.",{
          position: toast.POSITION.BOTTOM_RIGHT,
          })};
      if (!usuario.contraseña) {
        toast.error("Por favor, ingrese su contraseña.",{
          position: toast.POSITION.BOTTOM_RIGHT,
          });
    }
  }
    dispatch(loginUsuario(usuario)).then((response) => {
      if (response.payload.status !== 200) {
        toast.error("Email o contraseña incorrectos.",{
          position: toast.POSITION.BOTTOM_RIGHT,
        })};

      if (response.payload.status === 200) {
        toast.success("¡Login exitoso! Redireccionando...",{
          position: toast.POSITION.BOTTOM_RIGHT,
        })
        setTimeout(() => {
          navigate('/dashboard');
        }, 5650)};   
        
      
  }
   )
  }

  return (
    <>
    <ToastContainer/>
      <NavHome />
      <div className="container-fluid section-home">
        <div className="row">
          <div className="col-sm-12">
            <div className="d-flex justify-content-between">
              <div className="titleHome">
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
                    <form onSubmit={handleSubmit}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email1"
                        name="email"
                        value={usuario.email}
                        onChange={handleChange}
                        // required
                      />
                      <br />

                      <label htmlFor="clinica">Nombre del establecimiento</label>
                      <input
                        type="text"
                        id="clinica"
                        name="clinica"
                        value={usuario.clinica}
                        onChange={handleChange}
                        // required
                      />
                      <br />

                      <label htmlFor="contraseña"> Crear contraseña</label>
                      <input
                        type="password"
                        id="contraseña"
                        name="contraseña"
                        value={usuario.contraseña}
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
                        value={usuario.confirmcontraseña}
                        onChange={handleChange}
                        // required
                      />
                      <br />
                      <div className="text-center mt-3">
                        <button className="btnFormLogin" type="submit" onClick={handleSubmit}>Confirmar</button>
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
                    <form onSubmit={handleSubmit}>
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
                        id="contraseña"
                        name="contraseña"
                        value={usuario.contraseña}
                        onChange={handleChange}
                        // required
                      />
                      <br />

                      <div className="text-center mt-3">
                        <button className="btnFormLogin" type="submit" onClick={handleLoginSubmit}>
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

export default connect(null, { guardarInformacion })(Home);