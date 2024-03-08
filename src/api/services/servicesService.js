import api from "../../services/api";

const serviceService = {
  getServices: () => api.get("/services"),
  getServiceById: (serviceId) => api.get(`/services/${serviceId}`),
  createService: (serviceData) => api.post("/services", serviceData),
  updateService: (serviceId, serviceData) =>
    api.put(`/services/${serviceId}`, serviceData),
  deleteService: (serviceId) => api.delete(`/services/${serviceId}`),
};

export default serviceService;
