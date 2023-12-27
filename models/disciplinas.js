'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disciplinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Disciplinas.hasMany(models.Aulas, {
            foreignKey: 'disciplinaId'
        });
        Disciplinas.hasMany(models.Horarios, {
            foreignKey: 'disciplinaId'
        });
    }
  }
  Disciplinas.init({
    nome: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Disciplinas',
  });
  return Disciplinas;
};