'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('devices', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      device_name:{
        allowNull:false,
        type:Sequelize.TEXT
      },
      id_comp: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'companias',
          key: 'id'
        }
      },
      id_brok: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'brokers',
          key: 'id'
        }
      },
      device_autor:{
        allowNull:false,
        type: Sequelize.TEXT
      },
      device_type:{
        allowNull:false,
        type:Sequelize.TEXT
      },
      device_model:{
        allowNull:false,
        type:Sequelize.TEXT
      },
      device_version_hardware:{
        allowNull:false,
        type:Sequelize.TEXT
      },
      device_chip_imei:{
        allowNull:false,
        type:Sequelize.TEXT
      },
      device_chip_iddi:{
        allowNull:false,
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
    return queryInterface.dropTable('devices');
  }
};
