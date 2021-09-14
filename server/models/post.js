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
      models.Post.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  };
  Post.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    attachment: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};