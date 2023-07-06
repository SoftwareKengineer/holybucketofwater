'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoolingTower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

// models.CoolingTower.belongsTo(models.CoolingTowerUnit,{foreignKey: "cooling_tower_unit_id"} )

    }
  }
  CoolingTower.init({
    name: DataTypes.STRING,
    size_of_unit: DataTypes.INTEGER,
    amount_of_water: DataTypes.INTEGER,
    evaporation_rate: DataTypes.INTEGER,
    water_cycles: DataTypes.INTEGER,
    cooling_tower_unit_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CoolingTower',
  });
  return CoolingTower;
};