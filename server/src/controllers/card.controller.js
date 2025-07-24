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
}

module.exports = CardController;