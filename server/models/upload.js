'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Upload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Upload.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    username: DataTypes.STRING,
    isFav: DataTypes.STRING,
    type: DataTypes.STRING,
    dateEvent: DataTypes.DATE,
    file: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Upload',
  });
  return Upload;
};