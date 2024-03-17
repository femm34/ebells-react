import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React from "react";
import "./Introduction.Styled.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CardServices from "../CardServices/CardServices";

const images = [
  {
    original: "/src/assets/images/slider/sliderOne.png",
    thumbnail: "/src/assets/images/slider/sliderOne.png",
    thumbnailWidth: "200px;",
    originalHeight: "500px !important",
    originalTitle: "asdasd",
  },
  {
    original: "/src/assets/images/slider/sliderTwo.png",
    thumbnail: "/src/assets/images/slider/sliderTwo.png",
  },
  {
    original: "/src/assets/images/slider/sliderThree.png",
    thumbnail: "/src/assets/images/slider/sliderThree.png",
  },
];
export default function Introduction() {
  return (
    <div>
      <div className="who-we-are-container">
        <div className="who-we-are-container-wave">
          {/* <svg
            className="svg-wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 260"
          >
            <path
              fill="#E9E9E9"
              d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,234.7C672,245,768,203,864,160C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg> */}
        </div>

        <div className="who-we-are-container-text">
          <h1 className="who-we-are-container-title text-4xl">
            No somos los únicos, pero si los mejores.
          </h1>
          <p className="who-we-are-container-paragraph">
            La tradición de la fundición de campanas en Arca de la Alianza se
            remonta a 1940 y ha perdurado sin interrupciones hasta la fecha
            actual. Tres generaciones respaldan la calidad, el sonido y la
            durabilidad de todas las campanas elaboradas en nuestro taller.
            Ofrecemos servicio a domicilio para satisfacer las necesidades de
            nuestros clientes.
          </p>
        </div>
        <div className="who-we-are-container-gallery">
          <ImageGallery
            thumbnailPosition="left"
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={true}
            showNav={false}
            showBullets={true}
            slideOnThumbnailOver={true}
          />
        </div>
        <div className="svg-bottom-wave-div">
          {/* <svg
            className="svg-bottom-wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 260"
          >
            <path
              fill="#E9E9E9"
              d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,234.7C672,245,768,203,864,160C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg> */}
        </div>
      </div>

      <div className="services-container">
        <div className="light text-foreground w-screen  h-screen p-8 flex items-start justify-center service-container-div">
          <CardServices />
        </div>
      </div>

      <div className="mission-container">
        <h1 className="mission-container-title">
          Forjando tradición, resonando en el arte.
        </h1>
        <p className="mission-container-paragraph">
          Nuestra principal prioridad es garantizar la plena satisfacción del
          cliente al atender todas sus necesidades durante la adquisición de
          nuestros productos. Somos una empresa dedicada a la creación de
          campanas artesanales con sede en el estado de Hidalgo, México. Estamos
          comprometidos a proporcionar productos de la más alta calidad mientras
          ofrecemos una experiencia única y personalizada para cada cliente. Nos
          esforzamos por superar las expectativas y convertir cada adquisición
          en una experiencia memorable.
        </p>
      </div>

      <div className="works-done"></div>
    </div>
  );
}
