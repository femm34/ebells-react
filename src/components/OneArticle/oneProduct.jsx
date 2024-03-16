import React from "react";
import "./oneProductStyle.css";

function OneProduct() {
  return (
    <div className="first_container">
      <img
        className="p_image"
        src="https://revistapuebla.com/wp-content/uploads/2022/08/Campana.jpg"
        alt="ola"
      />
      <i className="fa-solid fa-cart-shopping"></i>
      <div className="content">
        <h1 className="title">Campana</h1>
        <p className="product_content">
          Product description: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="pq">
          <h2 className="price">$1000</h2>
          <button className="plus_button">+</button>
          <h1 className="quantity">0</h1>
          <button className="minus_button">-</button>
        </div>
        <div className="pandb_buttons">
          <button className="buy_now">Comprar ahora</button>
          <button className="add_now">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}
export default OneProduct;
