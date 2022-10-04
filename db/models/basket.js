'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Basket.init({
    user_id: DataTypes.INTEGER,
    card_id: DataTypes.INTEGER,
    card_name: DataTypes.STRING,
    card_price: DataTypes.INTEGER,
    card_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};