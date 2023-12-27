'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Horarios.belongsTo(models.Disciplinas, {
            foreignKey: 'disciplinaId'
        });
        Horarios.belongsTo(models.Usuarios, {
            foreignKey: 'userId'
        });
        Horarios.belongsTo(models.Dias, {
            foreignKey: 'diaId'
        });
        Horarios.belongsTo(models.HoraAulas, {
            foreignKey: 'horaAulaId'
        });
        Horarios.belongsTo(models.Series, {
            foreignKey: 'serieId'
        });
        Horarios.belongsTo(models.Turmas, {
            foreignKey: 'turmaId'
        });
    }
  }
  Horarios.init({
    disciplinaId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    diaId: DataTypes.STRING,
    horaAulaId: DataTypes.STRING,
    serieId: DataTypes.STRING,
    turmaId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Horarios',
  });
  return Horarios;
};