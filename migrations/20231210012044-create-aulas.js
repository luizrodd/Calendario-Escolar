'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Aulas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      volume: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      unidade: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      capitulo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      semana: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      frente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      aula: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      conteudo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      disciplinaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Disciplinas',
          key: 'id'
        }
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
    await queryInterface.dropTable('Aulas');
  }
};