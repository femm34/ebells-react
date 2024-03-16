import React from "react";
import "./ArticleCard.Styled.css";
import BuyButton from "../Button/BuyButton";

export default function ArticleCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="" className="card-image" />

      <div className="card-body">
        <h1 className="card-title">{props.title}</h1>

        <div className="even-elements">
          <div className="card-price">
            <p>${props.price}</p>
          </div>
          <div className="card-pricess">
            <p>${props.price - 1789}</p>
          </div>
        </div>

        <p className="card-paragraph">{props.description}</p>

        <div className="even-elements">
          <BuyButton title={"Comprar ahora"} />
          <i className="fa-solid fa-cart-shopping"></i>
        </div>

        <div className="even-elements">
          <p className="card-paragraph-quote">
            Envios a toda la republica mexicana
          </p>

          <i className="fa-solid fa-truck-fast"></i>
        </div>
      </div>
    </div>
  );
}
