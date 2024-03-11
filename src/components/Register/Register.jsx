import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Register.Styled.css";

export default function register() {
  return (
    <div className="container">
      <div className="img_container"></div>
      <div className="login">
        <h1>Register</h1>
        <p>Welcome, please fill the next fields to create an account</p>
        <form action="">
          <input type="text" id="name" placeholder="Nombre" />
          <input type="text" id="email" placeholder="Email" />
          <input type="text" id="user" placeholder="Username" />
          <input type="password" id="password" placeholder="Contrasena" />
          <input
            type="password"
            id="repassword"
            placeholder="Confirma tu contrasena"
          />
          <div className="check">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Acepto los terminos y condiciones</label>
          </div>
        </form>
        <button>Registrarse</button>
        <div className="other">
          <p>Login</p>
          <FontAwesomeIcon icon={faArrowRight} size="2x" color="#d5d5d5" />
        </div>
      </div>
    </div>
  );
}
