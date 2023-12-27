'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aulas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Aulas.belongsTo(models.Disciplinas, {
            foreignKey: 'disciplinaId'
        });
    }
  }
  Aulas.init({
    volume: DataTypes.INTEGER,
    unidade: DataTypes.INTEGER,
    capitulo: DataTypes.INTEGER,
    semana: DataTypes.INTEGER,
    frente: DataTypes.STRING,
    aula: DataTypes.INTEGER,
    conteudo: DataTypes.STRING,
    disciplinaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aulas',
  });
  return Aulas;
};