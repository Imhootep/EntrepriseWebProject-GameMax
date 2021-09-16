'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.associate = function(models) {
        Post.hasOne(models.id_user)
      }
    }
  };
  Post.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    attachment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};