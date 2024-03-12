import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import userService from "../../api/users/usersService";
import "./Register.Styled.css";

export default function register() {
  const [formDataRegister, setFormData] = useState({
    full_name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formDataRegister, [e.target.name]: e.target.value });
    console.log(formDataRegister);
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.createUser(formDataRegister);
      console.log(response);
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="img_container"></div>
      <div className="login">
        <h1>Register</h1>
        <p>Welcome, please fill the next fields to create an account</p>
        <form onSubmit={sendData}>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            placeholder="Nombre"
            name="full_name"
          />
          <input
            type="text"
            id="email"
            onChange={handleChange}
            placeholder="Email"
            name="email"
          />
          <input
            type="text"
            id="user"
            onChange={handleChange}
            placeholder="Username"
            name="username"
          />
          <input
            type="password"
            id="password"
            onChange={handleChange}
            placeholder="Contrasena"
            name="password"
          />
          <input
            type="password"
            id="repassword"
            placeholder="Confirma tu contrasena"
            name="repassword"
          />
          <div className="check">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Acepto los terminos y condiciones</label>
          </div>
          <button type="submit">Registrarse</button>
        </form>
        <div className="other">
          <p>Login</p>
          <FontAwesomeIcon icon={faArrowRight} size="2x" color="#d5d5d5" />
        </div>
      </div>
    </div>
  );
}
