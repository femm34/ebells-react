import api from "../../services/api";

const productTypeService = {
  getProductTypes: () => api.get("/product_types"),
  getProductTypeById: (productTypeId) =>
    api.get(`/product_types/${productTypeId}`),
  createProductType: (productTypeData) =>
    api.post("/product_types", productTypeData),
  updateProductType: (productTypeId, productTypeData) =>
    api.put(`/product_types/${productTypeId}`, productTypeData),
  deleteProductType: (productTypeId) =>
    api.delete(`/product_types/${productTypeId}`),
};

export default productTypeService;
