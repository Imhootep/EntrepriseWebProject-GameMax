'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Utilisateurs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Utilisateurs.init({
    id: DataTypes.INTEGER,
    nom: DataTypes.STRING,
    role: DataTypes.STRING,
    rue: DataTypes.STRING,
    numero: DataTypes.STRING,
    boite: DataTypes.STRING,
    ville: DataTypes.STRING,
    cp: DataTypes.STRING,
    mail: DataTypes.STRING,
    telephone: DataTypes.STRING,
    informations: DataTypes.STRING,
    membres: DataTypes.JSON,
    urlSiteWeb: DataTypes.STRING,
    urlFacebook: DataTypes.STRING,
    urlTwitter: DataTypes.STRING,
    ururlYoutube: DataTypes.STRING,
    urlLinkedIn: DataTypes.STRING,
    urlDiscord: DataTypes.STRING,
    commentaires: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Utilisateurs',
  });
  return Utilisateurs;
};