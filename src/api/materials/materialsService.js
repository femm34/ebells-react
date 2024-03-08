import api from "../../services/api";

const materialService = {
  getMaterials: () => api.get("/materials"),
  getMaterialById: (materialId) => api.get(`/materials/${materialId}`),
  createMaterial: (materialData) => api.post("/materials", materialData),
  updateMaterial: (materialId, materialData) =>
    api.put(`/materials/${materialId}`, materialData),
  deleteMaterial: (materialId) => api.delete(`/materials/${materialId}`),
};

export default materialService;
