import React from "react";
import "./Home.Styled.css";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="title">
          <h1>eBells</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
            libero. Debitis nesciunt quis laudantium ad, cupiditate maxime
            dolores illo aperiam voluptatem aliquam suscipit inventore rem sunt
            vero totam, fugit error?
          </p>
          <div className="btn">
            <button className="See">Ver productos</button>
            <button className="Cout">Cotizar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
