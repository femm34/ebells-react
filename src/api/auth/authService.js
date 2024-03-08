import api from "../../services/api";

const authService = {
  login: (credentials) => {
    return api.post("/auth/login", credentials).then((response) => {
      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);
      }
      return response;
    });
  },
};

export default authService;
