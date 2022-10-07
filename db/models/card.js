'use strict';
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
    static associate({ User, Basket, Order }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Basket, { foreignKey: 'card_id' });
      this.hasMany(Order, { foreignKey: 'card_id' });
      // this.hasMany(Order, { foreignKey: 'card_name' });
      // this.hasMany(Order, { foreignKey: 'card_price' });
      // this.hasMany(Order, { foreignKey: 'card_image' });
      // this.hasMany(Order, { foreignKey: 'card_condition' });
    }
  }
  Card.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    image: DataTypes.STRING,
    condition: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
