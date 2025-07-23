const {
  Model
} = require('sequelize');
const card = require('./card');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Card}) {
      this.belongsTo(User, { 
        foreignKey:"userId",
        as: 'buyer',
      })
      this.belongsTo(Card, { foreignKey:"cardId"})
    }
  }
  Cart.init({
    userId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};