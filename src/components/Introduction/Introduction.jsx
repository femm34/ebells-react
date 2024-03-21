import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ServicesCarrousel from "../ServicesCarrousel/ServicesCarrousel";
import "./Introduction.Styled.css";
import Map from "../Map/Map";

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
        <div className="svg-bottom-wave-div"></div>
      </div>

      <div className="services-container" id="services">
        <h1 className="services-container-title">Nuestros servicios</h1>
        <div className="light">
          <ServicesCarrousel />
        </div>
      </div>

      <div className="mission-container">
        <div className="mission-container-map">
          <Map />
        </div>
        <div className="mission-container-body">
          <div className="mission-container-title">
            <h1>Forjando tradición, resonando en el arte.</h1>
          </div>
          <div className="mission-container-paragraph">
            <p>
              Nuestra principal prioridad es garantizar la plena satisfacción
              del cliente al atender todas sus necesidades durante la
              adquisición de nuestros productos. Somos una empresa dedicada a la
              creación de campanas artesanales con sede en el estado de Hidalgo,
              México. Estamos comprometidos a proporcionar productos de la más
              alta calidad mientras ofrecemos una experiencia única y
              personalizada para cada cliente. Nos esforzamos por superar las
              expectativas y convertir cada adquisición en una experiencia
              memorable.
            </p>
          </div>
        </div>
      </div>

      <div className="works-done"></div>
    </div>
  );
}
