import React from "react";
import "./style.css";
import Logo1 from "../../images/log1.png";

const HomeNav = () => {
  return (
    <>
      <div className="navMenu">
        <div className="comandosNav">
          <img src={Logo1} alt="logo" />
          <p>CONTACTO</p>
          <p>FUNCIONES</p>
          <p>PLANES</p>
        </div>
        <div>
          <p
            data-bs-toggle="modal"
            data-bs-target="#modalLogin"
            className="btnP btnLogin"
          >
            INGRESAR
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeNav;
