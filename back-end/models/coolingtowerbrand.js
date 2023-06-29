'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoolingTowerBrand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.CoolingTowerBrand.hasMany(models.CoolingTowerUnit,{foreignKey: "cooling_tower_brand_id"} )

      // define association here
    }
  }
  CoolingTowerBrand.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CoolingTowerBrand',
  });
  return CoolingTowerBrand;
};