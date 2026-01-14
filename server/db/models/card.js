const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Cart}) {
      this.hasMany(Cart, { foreignKey:"cardId"})
      this.belongsTo(User, { 
        foreignKey:"userId",
        as: 'seller',
      })
    }
  }
  Card.init({
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    price: DataTypes.INTEGER,
    condition: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    isSold: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};