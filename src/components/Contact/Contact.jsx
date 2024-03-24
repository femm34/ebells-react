import Map from "../Map/Map";
import QuotationForm from "../QuotationForm/QuotationForm";
import "./Contact.Styled.css";
import React from "react";

export default function Contact() {
  return (
    <div className="contact-main-container">
      <div className="contact-map">
        <Map />
      </div>
      <div className="contact-quotation">
        <QuotationForm />
      </div>
    </div>
  );
}
