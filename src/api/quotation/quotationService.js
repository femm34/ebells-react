import api from "../../services/api";
const quotationService = {
  sendQuotation: async (quotationData) => {
    try {
      const response = await api.post("/quotation", quotationData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default quotationService;
