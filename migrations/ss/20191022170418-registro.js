'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('registros',{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_broker:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references :{
          model : 'brokers',
          key : 'id'
        }
      },
      timer:{
        allowNull:false,
        type : Sequelize.JSON
      },
      metadata:{
        allowNull:false,
        type:Sequelize.JSON
      },
      datasensado:{
        allowNull:false,
        type:Sequelize.JSON
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
    return queryInterface.dropTable('registros');
  }
};
