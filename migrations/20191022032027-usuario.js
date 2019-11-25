'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      apellido: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      run: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      username: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      email: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      administrador: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
/*      aportador: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },*/
      activo: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};
