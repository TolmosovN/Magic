const { Card, User } = require('../../db/models');

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

}

module.exports = CardsService;
