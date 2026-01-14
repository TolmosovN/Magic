const { Card, User, Cart  } = require('../../db/models');

class CardsService {
  static getAllCards() {
    return Card.findAll({
      include: {
        model: User,
        as: 'seller', 
        attributes: ['city'],
      },
    });
  }

  static async create(data) {
    const card = await Card.create(data);
    return card;
  }

}

module.exports = CardsService;
