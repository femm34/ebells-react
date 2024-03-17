import React from "react";
import UploadPortfolio from "./UploadPortfolio/UploadPortfolio";
import OurServices from "./OurServices/OurServices.jsx";
import "./ControlPanel.css";
import ProductTypesManager from "./ProductTypesManager/ProductTypesManager.jsx";

export default function ControlPanel() {
  return (
    <div
      className="container control-panel-main-container"
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
      }}
    >
      <UploadPortfolio />
      <OurServices />
      <ProductTypesManager />
    </div>
  );
}
