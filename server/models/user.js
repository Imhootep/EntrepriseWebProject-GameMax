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
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    box: DataTypes.STRING,
    cp: DataTypes.INTEGER,
    city: DataTypes.STRING,
    social: DataTypes.JSONTYPE,
    website: DataTypes.STRING,
    member: DataTypes.JSONTYPE,
    games: DataTypes.JSONTYPE,
    comment: DataTypes.STRING,
    role: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};