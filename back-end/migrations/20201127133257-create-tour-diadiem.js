'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TourDiadiems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      diadiemId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Diadiems",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      tourId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tours",
          key: "id"
        },
        onDelete: "CASCADE"
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
    await queryInterface.dropTable('TourDiadiems');
  }
};