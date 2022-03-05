import httpService from "./httpService";
import config from "../config.json";

export function createCard(card) {
  return httpService.post(`${config.apiUrl}/cards`, card);
}

export function getCards() {
  return httpService.get(`${config.apiUrl}/cards/my-cards`);
}

export function getCardById(id) {
  return httpService.get(`${config.apiUrl}/cards/${id}`);
}

export function editCard({ card, id }) {
  return httpService.put(`${config.apiUrl}/${id}`, card);
}

export function deleteCard(id) {
  return httpService.delete(`${config.apiUrl}/${id}`);
}

const cardsService = {
  createCard,
  getCards,
  getCardById,
};

export default cardsService;
