import api from "../../services/api";

const addressService = {
  getAddresses: () => api.get("/addresses"),
  getAddressById: (addressId) => api.get(`/addresses/${addressId}`),
  createAddress: (addressData) => api.post("/addresses", addressData),
  updateAddress: (addressId, addressData) =>
    api.put(`/addresses/${addressId}`, addressData),
  deleteAddress: (addressId) => api.delete(`/addresses/${addressId}`),
};

export default addressService;
