'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Brokers', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      estado:{
        allowNull:false,
        type:Sequelize.TEXT
      },
      run_task:{
        allowNull:false,
        type:Sequelize.BOOLEAN
      },
      estado_task:{
        allowNull:false,
        type:Sequelize.BOOLEAN
      },
      contador_task:{
        allowNull:false,
        type:Sequelize.INTEGER
      },
      key_broker_mqtt:{
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
    return queryInterface.dropTable('Brokers');
  }
};
