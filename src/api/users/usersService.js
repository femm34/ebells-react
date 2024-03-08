import api from "../../services/api";

const userService = {
  getUsers: () => api.get("/users"),
  getUserById: (userId) => api.get(`/users/${userId}`),
  createUser: (userData) => api.post("/users", userData),
  updateUser: (userId, userData) => api.put(`/users/${userId}`, userData),
  deleteUser: (userId) => api.delete(`/users/${userId}`),
};

export default userService;
