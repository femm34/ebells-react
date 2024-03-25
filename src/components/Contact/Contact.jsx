import Map from "../Map/Map";
import QuotationForm from "../QuotationForm/QuotationForm";
import "./Contact.Styled.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faSquareWhatsapp,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCartShopping,
  faHeart,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="contact-main-container">
      <div className="contact-main-map-phones">
        <div className="contact-map">
          <Map />
        </div>
        <div className="contact-numbers">
          <h2>Teléfonos</h2>
          <div className="contact-icons">
            <div className="contact-number">
              <FontAwesomeIcon icon={faPhone} />
              <h3>7713430594</h3>
            </div>
            <div className="contact-number">
              <FontAwesomeIcon color="#260B01" />
              <FontAwesomeIcon icon={faWhatsapp} color="#260B01" />
              <h3>7713430594</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-quotation">
        <QuotationForm />
      </div>
    </div>
  );
}
