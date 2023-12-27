'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
          Dias.hasMany(models.Horarios, {
              foreignKey: 'diaId'
          });
    }
  }
  Dias.init({
    dia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dias',
  });
  return Dias;
};