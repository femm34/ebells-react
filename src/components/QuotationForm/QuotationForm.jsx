import React, { useState } from "react";
import "./QuotationForm.Styled.css";
import { Button } from "@nextui-org/react";
import quotationService from "../../api/quotation/quotationService";

export default function QuotationForm() {
  const [quotationForm, setQuotationForm] = useState({
    name: "",
    cellphone_number: "",
    client_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuotationForm({
      ...quotationForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await quotationService.sendQuotation(quotationForm);
      console.log(response);
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <form className="quotation-form">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="quotation-form-title text-base font-semibold leading-7 text-gray-900">
            Cotiza con nosotros, dejanos un mensaje...
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Por favor, complete el siguiente formulario con sus datos para
            brindarle un mejor servicio.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre completo
              </label>
              <div className="">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={quotationForm.name}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="block w-full m-0 p-2 rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Telefono
              </label>
              <div className="">
                <input
                  type="text"
                  name="cellphone_number"
                  id="cellphone_number"
                  value={quotationForm.cellphone_number}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="block w-full m-0 p-2 rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo electronico
              </label>
              <div className="">
                <input
                  type="email"
                  name="client_email"
                  id="client_email"
                  value={quotationForm.client_email}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="block w-full p-2 m-0 rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mensaje:
              </label>
              <div className="">
                <textarea
                  id="message"
                  name="message"
                  value={quotationForm.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="block p-2 w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
                <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 ">
                  <Button color="#fff" variant="ghost" onClick={handleSubmit}>
                    Enviar cotización
                  </Button>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Nos pondremos en contacto contigo lo más pronto posible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
