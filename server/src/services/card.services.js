const { Card, User, Cart } = require('../../db/models');

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
    console.log();
    
    return card;
  }

  static async edit(data) {
    const card = await Card.findByPk(data.id);
    await card.update(data);
    return card;
  }
}

module.exports = CardsService;
