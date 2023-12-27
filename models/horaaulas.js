'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HoraAulas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
          HoraAulas.hasMany(models.Horarios, {
              foreignKey: 'horaAulaId'
          });
    }
  }
  HoraAulas.init({
    hora: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HoraAulas',
  });
  return HoraAulas;
};