import React from "react";
import "./NavbarEcommerce.Styled.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavbarE() {
  return (
    <div className="navbar">
      <div className="title">
        <h1>Ebells</h1>
      </div>
      <div className="search">
        <input type="text" name="" id="" placeholder="Search" />
      </div>
      <div className="botones">
        <FontAwesomeIcon icon={faHeart} size="2x" color="red" />
        <h1>Inicio</h1>
        <h1>Mi cuenta</h1>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" />
      </div>
    </div>
  );
}
