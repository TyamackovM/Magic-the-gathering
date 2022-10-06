'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Card }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Card, { foreignKey: 'card_id' });
    }
  }
  Order.init({
    card_id: DataTypes.INTEGER,
    // card_name: DataTypes.STRING,
    // card_price: DataTypes.INTEGER,
    // card_image: DataTypes.STRING,
    // card_condition: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
