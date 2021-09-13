'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      box: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cp: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      commune: {
        allowNull: false,
        type: Sequelize.STRING
      },
      social: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      member: {
        type: Sequelize.STRING
      },
      games: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Users');
  }
};