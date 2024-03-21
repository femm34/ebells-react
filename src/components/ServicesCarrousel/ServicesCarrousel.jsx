import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import serviceService from "../../api/services/servicesService";
import CardServices from "../CardServices/CardServices";
import "./ServicesCarrousel.css";

export default function ServicesCarrousel() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    speed: 500,
    cssEase: "linear",
  };
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const services = await serviceService.getServices();
        setAllServices(services.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const allCardServices = allServices.map((service) => (
    <CardServices
      key={service.id}
      service_image_url={service.service_image_url}
      service_name={service.service_name}
      service_description={service.service_description}
    />
  ));

  return (
    <div className="service-carousel-container">
      <Slider {...settings}>{allCardServices}</Slider>
    </div>
  );
}
