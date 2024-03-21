import React from "react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import "./CardServices.Styled.css";

export default function CardServices(props) {
  const handleImageHover = (e) => {
    e.target.style.filter = e.type === "mouseover" ? "brightness(70%)" : "none";
  };

  const truncatedServiceDescription = props.service_description.substring(
    0,
    83
  );

  return (
    <div className="">
      <Card style={{ width: "350px", borderRadius: "0", margin: "20px" }}>
        <CardHeader style={{ padding: 0, margin: 0 }}>
          <img
            src={props.service_image_url}
            alt=""
            style={{
              width: "100%",
              margin: 0,
              padding: 0,
              transition: "filter 0.3s ease",
            }}
            className="card-service-image"
            onMouseOver={handleImageHover}
            onMouseOut={handleImageHover}
          />
        </CardHeader>
        <CardBody>
          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontWeight: "700",
                color: "#260B01",
                padding: "10px 0 15px 0",
              }}
            >
              {props.service_name}
            </h1>
            <p
              style={{
                fontWeight: "300",
                textAlign: "center",
                margin: 0,
              }}
            >
              {truncatedServiceDescription}...
            </p>
          </div>
          <div>
            <Button
              style={{
                backgroundColor: "#260B01",
                color: "#f2f2f2",
                width: "100%",
                margin: "20px 0 0 0",
                padding: 0,
                borderRadius: "5px",
              }}
            >
              Cotizar Servicio
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
