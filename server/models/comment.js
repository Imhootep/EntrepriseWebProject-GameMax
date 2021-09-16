'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.associate = function(models){
        Comment.hasOne(models.id_post)
      }

      Comment.associate = function(models){
        Comment.hasOne(models.id_user)
      }
    }
  };
  Comment.init({
    id_post: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};