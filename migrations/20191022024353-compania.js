'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Companias',{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rut_empresa:{
        allowNull: false,
        type:Sequelize.TEXT
      },
      name:{
        allowNull: false,
        type:Sequelize.TEXT
      },
      nombre_representante:{
        allowNull: false,
        type:Sequelize.TEXT
      },
      invoice_address:{
        allowNull: false,
        type:Sequelize.TEXT
      },
      invoice_email:{
        allowNull: false,
        type:Sequelize.TEXT
      },
      invoice_phone:{
        allowNull: false,
        type:Sequelize.TEXT
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    
    });
  },

  down: (queryInterface, Sequelize) => {
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('companias');
    }
  }
};
