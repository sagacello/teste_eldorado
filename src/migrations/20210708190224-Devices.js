'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Devices', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      partNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Categories',
          },
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Devices');
  },
};
