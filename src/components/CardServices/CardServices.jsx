import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import servicesService from "../../api/services/servicesService";

export default function CardServices() {
  const [allCardServices, setAllCardServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const services = await servicesService.getServices();
        console.log(services.data);
        const cardServices = services.data.map((e) => (
          <div className="flex w-full flex-col">
            {/* <Tabs aria-label="Options"> */}
            {/* <Tab key="servicio" title="  "> */}
            <Card>
              <CardHeader>
                <h1 className="font-bold">{e.service_name}</h1>
              </CardHeader>
              <CardBody>
                <img
                  src="https://res.cloudinary.com/dcojsdfgh/image/upload/v1710793974/portfolioImages/dp9wavv4pceb3sfhdbum.jpg"
                  alt=""
                  srcset=""
                />
              </CardBody>
              <CardFooter>
                <CardBody>{e.service_description}</CardBody>
              </CardFooter>
            </Card>
            {/* </Tab> */}
            {/* <Tab key="descripction" title="Descripción"> */}
            <Card></Card>
            {/* </Tab> */}
            {/* </Tabs> */}
          </div>
        ));
        setAllCardServices(cardServices);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return <>{allCardServices}</>;
}
