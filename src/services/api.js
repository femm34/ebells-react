import axios from "axios";

const baseURL = "http://ec2-54-209-38-133.compute-1.amazonaws.com";

const api = axios.create({ baseURL });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Reemplaza con tu lógica para obtener el token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
