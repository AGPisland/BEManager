'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuariosapis',{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_comp: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'companias',
          key: 'id'
        }
      },
      name_usuario:{
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
      keys_json:{
        allowNull:false,
        type:Sequelize.JSON
      },
      estado_api:{
        allowNull:false,
        type:Sequelize.BOOLEAN
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
      return queryInterface.dropTable('usuariosapis');
    }
  }
};
