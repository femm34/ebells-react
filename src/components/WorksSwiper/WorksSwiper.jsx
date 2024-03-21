import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  EffectCube,
  Pagination,
  Parallax,
  EffectCards,
  Navigation,
  Keyboard,
} from "swiper/modules";
import CardServices from "../CardServices/CardServices";
import serviceService from "../../api/services/servicesService";
import "./WorksSwiper.css";

function WorksSwiper() {
  return <></>;
  // const [allServices, setAllServices] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const services = await serviceService.getServices();
  //       setAllServices(services.data);
  //     } catch (error) {
  //       console.error("Error fetching services:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const allSlides = allServices.map((service) => (
  //   <SwiperSlide key={service.id}>
  //     <CardServices
  //       service_image_url={service.service_image_url}
  //       service_name={service.service_name}
  //       service_description={service.service_description}
  //     />
  //   </SwiperSlide>
  // ));

  // return (
  //   <>
  //     <h1 className="heading">Nuestros Servicios</h1>
  //     <div className="container-general-swiper">
  //       <div className="container-swiper">
  //         <Swiper
  //           spaceBetween={-230}
  //           slidesPerView={"auto"}
  //           centeredSlides={true}
  //           keyboard={{
  //             enabled: true,
  //           }}
  //           loop={true}
  //           pagination={{
  //             el: ".swiper-pagination",
  //             clickable: true,
  //             dynamicBullets: true,
  //           }}
  //           navigation={{
  //             nextEl: ".swiper-button-next",
  //             prevEl: ".swiper-button-prev",
  //             clickable: true,
  //           }}
  //           modules={[Parallax, Pagination, Keyboard, Navigation, EffectCards]}
  //           className="swiper_container"
  //         >
  //           {allSlides}
  //         </Swiper>
  //       </div>
  //       <div className="container-swiper-nav">
  //         <div className="slider-controler">
  //           <div className="swiper-button-prev slider-arrow">
  //             <ion-icon name="arrow-back-outline"></ion-icon>
  //           </div>
  //           <div className="swiper-button-next slider-arrow">
  //             <ion-icon name="arrow-forward-outline"></ion-icon>
  //           </div>
  //           <div className="swiper-pagination"></div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default WorksSwiper;
