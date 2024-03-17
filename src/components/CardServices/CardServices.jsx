import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
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
            <Tabs aria-label="Options">
              <Tab key="servicio" title="  ">
                <Card>
                  <CardBody>
                    <h1 className="font-bold">{e.service_name}</h1>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="descripction" title="Descripción">
                <Card>
                  <CardBody>{e.service_description}</CardBody>
                </Card>
              </Tab>
            </Tabs>
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
