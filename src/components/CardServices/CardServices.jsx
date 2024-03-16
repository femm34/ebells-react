import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import servicesService from "../../api/services/servicesService";

export default function CardServices() {
  const [allCardServices, setAllCardServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const services = await servicesService.getServices();
        console.log(services.data);
        const cardServices = services.data.map((e) => (
          <Card key={e.id} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">
                {e.service_description}
              </small>
              <h4 className="font-bold text-large">{e.service_name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardBody>
          </Card>
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
