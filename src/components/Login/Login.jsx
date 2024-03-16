import React, { useState } from "react";
import "./Login.Styled.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import authService from "../../api/auth/authService";
export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFields = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.login(formData);
      console.log(response.data.access_token);
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
      <div className="login">
        <div className="other">
          <div className="other-icon">
            <FontAwesomeIcon icon={faArrowLeft} size="2x" color="#d5d5d5" />
          </div>
          <div className="other-register">
            <a>Register</a>
          </div>
        </div>
        <h1>Login</h1>
        <p>
          Welcome, please fill username and password to enter into your account
        </p>
        <form onSubmit={handleFields}>
          <label htmlFor="username">Username</label>
          <input
            className="border-2 border-rose-500"
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
        <p className="forgot">Forgot your password?</p>
        <hr />
        <p className="also">Also you can login with:</p>
        <div className="icons">
          <FontAwesomeIcon
            className="iconos"
            icon={faFacebook}
            size="5x"
            color="#7dc1d4"
          />
          <FontAwesomeIcon
            className="iconos"
            icon={faGoogle}
            size="5x"
            color="#7dc1d4"
          />
        </div>
      </div>
      <div className="img_container"></div>
    </div>
  );
}
