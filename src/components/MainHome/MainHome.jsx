import React from "react";
import "./MainHome.Styled.css";
import { Button } from "@nextui-org/react";

export default function MainHome() {
  return (
    <div className="container-background relative bg-cover bg-no-repeat p-12">
      <div className="title">
        <h1>Arca de la Alianza</h1>
        <p>
          Descubre la magia de las campanas en Arca de la Alianza. Encuentra la
          perfecta para ti y explora servicios relacionados que añaden encanto a
          tu espacio.
        </p>
        <div className="btn-group">
          <Button
            className="custom-button text-white"
            radius="none"
            disableRipple
            size="lg"
          >
            VER PRODUCTOS
          </Button>
          <Button className="custom-button-cotizar" radius="none" size="lg">
            <span className="font-medium">COTIZAR</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
