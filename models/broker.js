'use strict';
module.exports = (sequelize, DataTypes) => {
  const Broker = sequelize.define('Broker', {
    //id_dev : DataTypes.INTEGER,
    estado: DataTypes.TEXT,
    run_task: DataTypes.BOOLEAN,
    estado_task: DataTypes.BOOLEAN,
    contador_task: DataTypes.INTEGER,
    key_broker_mqtt: DataTypes.JSON
  });
  Broker.associate = function (models) {
    Broker.hasMany(models.Registro, {
      foreignKey: 'id_broker'
    });
    /*
    Broker.belongsTo(models.Device, {
      foreignKey: 'id_brok'
    });
    */
  };
  /*
  
  };
  */
  /*
  Broker.associate = function (models) {
    
  };
  */
  return Broker;
};
