import api from "../../services/api";

const productService = {
  getProducts: () => api.get("/products"),
  getProductById: (productId) => api.get(`/products/${productId}`),
  createProduct: (productData) => api.post("/products", productData),
  updateProduct: (productId, productData) =>
    api.put(`/products/${productId}`, productData),
  deleteProduct: (productId) => api.delete(`/products/${productId}`),
};

export default productService;
