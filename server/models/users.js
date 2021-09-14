'use strict';
const bcrypt = require('bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    box: DataTypes.STRING,
    cp: DataTypes.INTEGER,
    commune: DataTypes.STRING,
    social: DataTypes.STRING,
    website: DataTypes.STRING,
    member: DataTypes.STRING,
    games: DataTypes.STRING,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  
  Users.beforeCreate((user, options) => {

    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
})

  Users.beforeUpdate((user, options) => {

    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
  })

  return Users;
};