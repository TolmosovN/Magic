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

  static async create(data, artistId) {
    const track = await Card.create(data);
    await Cart.create({ cardkId: track.id, artistId });
    return track;
  }

}

module.exports = CardsService;
