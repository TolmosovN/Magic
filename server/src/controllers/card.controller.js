const CardService = require('../services/card.services');

class CardController {
  static async getAllCards(req, res) {
    try {
      const cards = await CardService.getAllCards();
      res.json(cards);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка при получении карточек' });
    }
  }

  static async createCard(req, res) {
    try {
      console.log(req.body);
      
      const newCard = await CardService.create(req.body);
      res.json(newCard);
    } catch (err) {
      console.log(e);
      
      res.status(500).json({ message: err.message });
    }
  }

  static async updateCard(req, res) {
    try {
      const updatedCard = await CardService.edit(req.body);
      console.log(updatedCard);
      
      return await res.json(updatedCard);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }


}

module.exports = CardController;