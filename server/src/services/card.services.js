const { Card, User } = require('../../db/models');

class CardsService {
  static getAllCards() {
    return Card.findAll({
      include: {
        model: User,
        attributes: ['city'],
      },
    });
  }
}

module.exports = CardsService;