'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoolingTowerUnit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.CoolingTowerUnit.hasMany(models.CoolingTower,{foreignKey: "cooling_tower_unit_id"} )
      models.CoolingTowerUnit.belongsTo(models.CoolingTowerBrand,{foreignKey: "cooling_tower_brand_id"} )


    }
  }
  CoolingTowerUnit.init({
    name: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    long: DataTypes.DECIMAL,
    address: DataTypes.STRING,
    cooling_tower_brand_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CoolingTowerUnit',
  });
  return CoolingTowerUnit;
};