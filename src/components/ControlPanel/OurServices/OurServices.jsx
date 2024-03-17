import { PhotoIcon } from "@heroicons/react/24/solid";
import "./OurServices.css";
import { AddNoteIcon } from "./AddNoteIcon.jsx";
import { CopyDocumentIcon } from "./CopyDocumentIcon.jsx";
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
import React from "react";

export default function OurServices() {
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
              Administra los servicios de tu negocio.
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
                  description="Add a service"
                  startContent={<AddNoteIcon className={iconClasses} />}
                >
                  Agregar Servicio
                </DropdownItem>
                <DropdownItem
                  key="copy"
                  shortcut="⌘C"
                  description="Show all services"
                  startContent={<CopyDocumentIcon className={iconClasses} />}
                >
                  Ver Servicios
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
                    Agrega a tu portafolio.
                  </ModalHeader>
                  <ModalBody className="">
                    <div className="">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Nombre del trabajo
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block m-0 w-full rounded-md border-0 py-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Foto del trabajo
                      </label>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          <PhotoIcon
                            className="mx-auto h-12 w-12 text-gray-300"
                            aria-hidden="true"
                          />
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Carga un archivo</span>
                              <input
                                id="file-upload"
                                name="file-upload"
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
                    <Button color="default" onPress={onClose}>
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
