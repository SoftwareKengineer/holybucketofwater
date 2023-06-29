// This tells how much water is inside the bucket and how fast it leaks

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CoolingTowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      size_of_unit: {
        type: Sequelize.INTEGER
      },
      amount_of_water: {
        type: Sequelize.INTEGER
      },
      evaporation_rate: {
        type: Sequelize.INTEGER
      },
      water_cycles: {
        type: Sequelize.INTEGER
      },
      cooling_tower_unit_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CoolingTowerUnits',
          key: 'id'}
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CoolingTowers');
  }
};