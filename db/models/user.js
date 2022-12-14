'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Card, Basket, Order }) {
      this.hasMany(Card, { foreignKey: 'user_id' });
      //!
      // this.hasMany(Card, { foreignKey: 'seller_city' });
      this.hasMany(Basket, { foreignKey: 'user_id' });
      this.hasMany(Order, { foreignKey: 'user_id' });
    }
  }
  User.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    // seller_city: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
