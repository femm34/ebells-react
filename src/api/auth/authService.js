import api from "../../services/api";

const authService = {
  login: (credentials) => {
    return api.post("/auth", credentials).then((response) => {
      const data = response.data;
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
      }
      return response;
    });
  },
};

export default authService;
