'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Utilisateurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      nom: {
        allowNull: false,
        type: Sequelize.STRING
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rue: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numero: {
        allowNull: false,
        type: Sequelize.STRING
      },
      boite: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ville: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cp: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telephone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      informations: {
        allowNull: false,
        type: Sequelize.STRING
      },
      membres: {
        allowNull: false,
        type: Sequelize.JSON
      },
      urlSiteWeb: {
        allowNull: true,
        type: Sequelize.STRING
      },
      urlFacebook: {
        allowNull: true,
        type: Sequelize.STRING
      },
      urlTwitter: {
        allowNull: true,
        type: Sequelize.STRING
      },
      ururlYoutube: {
        allowNull: true,
        type: Sequelize.STRING
      },
      urlLinkedIn: {
        allowNull: true,
        type: Sequelize.STRING
      },
      urlDiscord: {
        allowNull: true,
        type: Sequelize.STRING
      },
      commentaires: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isAdmin: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Utilisateurs');
  }
};