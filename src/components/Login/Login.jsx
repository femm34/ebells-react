import React from "react";
import "./Login.Styled.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default function Login() {
  return (
    <div className="container">
      <div className="login">
        <div className="other">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" color="#d5d5d5" />
          <a>Register</a>
        </div>
        <h1>Login</h1>
        <p>
          Welcome, please fill username and password to enter into your account
        </p>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </form>
        <p className="forgot">Forgot your password?</p>
        <button>Login</button>
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
