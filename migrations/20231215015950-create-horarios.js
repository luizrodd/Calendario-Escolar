'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Horarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      disciplinaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Disciplinas',
          key: 'id'
        }
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
      },
      diaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Dias',
          key: 'id'
        }
      },
      turmaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Turmas',
          key: 'id'
        }
      },
      horaAulaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'HoraAulas',
          key: 'id'
        }
      },
      serieId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Series',
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
    await queryInterface.dropTable('Horarios');
  }
};