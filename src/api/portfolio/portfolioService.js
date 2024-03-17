import api from "../../services/api";

const portfolioService = {
  getPortfolios: () => api.get("/portfolios"),
  getPortfolioById: (portfolioId) => api.get(`/portfolios/${portfolioId}`),
  createPortfolio: (portfolioData) => api.post("/portfolios", portfolioData),
  updatePortfolio: (portfolioId, portfolioData) =>
    api.put(`/portfolios/${portfolioId}`, portfolioData),
  deletePortfolio: (portfolioId) => api.delete(`/portfolios/${portfolioId}`),
};

export default portfolioService;
