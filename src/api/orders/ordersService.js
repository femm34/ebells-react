import api from "../../services/api";

const orderService = {
  getOrders: () => api.get("/orders"),
  getOrderById: (orderId) => api.get(`/orders/${orderId}`),
  createOrder: (orderData) => api.post("/orders", orderData),
  updateOrder: (orderId, orderData) => api.put(`/orders/${orderId}`, orderData),
  deleteOrder: (orderId) => api.delete(`/orders/${orderId}`),
};

export default orderService;
