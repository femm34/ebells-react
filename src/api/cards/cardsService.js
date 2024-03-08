import api from "../../services/api";

const cardService = {
  getCards: () => api.get("/cards"),
  getCardById: (cardId) => api.get(`/cards/${cardId}`),
  createCard: (cardData) => api.post("/cards", cardData),
  updateCard: (cardId, cardData) => api.put(`/cards/${cardId}`, cardData),
  deleteCard: (cardId) => api.delete(`/cards/${cardId}`),
};

export default cardService;
