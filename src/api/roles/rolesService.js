import api from "../../services/api";

const roleService = {
  getRoles: () => api.get("/roles"),
  getRoleById: (roleId) => api.get(`/roles/${roleId}`),
  createRole: (roleData) => api.post("/roles", roleData),
  updateRole: (roleId, roleData) => api.put(`/roles/${roleId}`, roleData),
  deleteRole: (roleId) => api.delete(`/roles/${roleId}`),
};

export default roleService;
