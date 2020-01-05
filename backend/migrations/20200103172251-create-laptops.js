"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("laptops", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      mac: {
        type: Sequelize.STRING
      },
      ip: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      battery: {
        type: Sequelize.BOOLEAN
      },
      ram: {
        type: Sequelize.STRING
      },
      rom: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("laptops");
  }
};
