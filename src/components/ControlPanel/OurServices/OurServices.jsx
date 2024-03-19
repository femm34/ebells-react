import { PhotoIcon } from "@heroicons/react/24/solid";
import "./OurServices.css";
import { AddNoteIcon } from "./AddNoteIcon.jsx";
import { CopyDocumentIcon } from "./CopyDocumentIcon.jsx";
import portfolioService from "../../../api/portfolio/portfolioService.js";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  cn,
  Card,
  CardBody,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";

export default function UploadPortfolio() {
  const [portfolioData, setPortfolioData] = useState({
    work_name: "",
    image: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setPortfolioData({
        ...portfolioData,
        image: e.target.files[0],
        imageUrl: URL.createObjectURL(e.target.files[0]), // Almacena una URL temporal para mostrar la imagen previa
      });
    } else {
      setPortfolioData({ ...portfolioData, [e.target.name]: e.target.value });
    }
    console.log(portfolioData);
  };
  const sendPortfolioData = async () => {
    try {
      const formData = new FormData();
      formData.append("image", portfolioData.image);
      formData.append("work_name", portfolioData.work_name);
      const uploadResponse = await portfolioService.createPortfolio(formData);
      console.log(uploadResponse);
      return;
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="upload-portfolio">
      <Card>
        <CardBody>
          <h1 className="upload-portfolio-title">Servicios</h1>
          <div className="upload-portfolio-card">
            <p className="upload-portfolio-text">
              Administra los servicios de tu negocio
            </p>

            <Dropdown className="light text-foreground bg-background">
              <DropdownTrigger>
                <Button variant="dark" color="default">
                  Opciones
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Dropdown menu with description"
              >
                <DropdownItem
                  key="new"
                  onPress={onOpen}
                  shortcut="⌘N"
                  description="Add evidence a new service"
                  startContent={<AddNoteIcon className={iconClasses} />}
                >
                  Agregar servicio
                </DropdownItem>
                <DropdownItem
                  key="copy"
                  shortcut="⌘C"
                  description="Show all services"
                  startContent={<CopyDocumentIcon className={iconClasses} />}
                >
                  Ver servicios
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col text-black gap-1">
                    Agregar servicio.
                  </ModalHeader>
                  <ModalBody>
                    <div>
                      <form>
                        <label
                          htmlFor="service_name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Nombre del servicio
                        </label>
                        <div className="mt-2">
                          <input
                            name="service_name"
                            onChange={handleChange}
                            type="text"
                            id="service_name"
                            autoComplete="family-name"
                            className="block m-0 w-full rounded-md border-0 py-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>

                        <label
                          htmlFor="service_description"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Descripcion
                        </label>
                        <div className="mt-2">
                          <input
                            name="service_description"
                            onChange={handleChange}
                            type="text"
                            id="service_description"
                            autoComplete="family-name"
                            className="block m-0 w-full rounded-md border-0 py-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Adjunta una imagen
                      </label>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          {portfolioData.imageUrl != "" ? (
                            <img
                              src={portfolioData.imageUrl}
                              alt=""
                              srcSet=""
                            />
                          ) : (
                            <PhotoIcon
                              className="mx-auto h-12 w-12 text-gray-300"
                              aria-hidden="true"
                            />
                          )}

                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Carga un archivo</span>
                              <input
                                onChange={handleChange}
                                id="file-upload"
                                name="image"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">o arrastra y suelta.</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="default" onPress={sendPortfolioData}>
                      Guardar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </CardBody>
      </Card>
    </div>
  );
}
