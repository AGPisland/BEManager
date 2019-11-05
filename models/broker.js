'use strict';
module.exports = (sequelize, DataTypes) => {
  const Broker = sequelize.define('broker', {
    //id_dev : DataTypes.INTEGER,
    estado: DataTypes.TEXT,
    run_task: DataTypes.BOOLEAN,
    estado_task: DataTypes.BOOLEAN,
    contador_task: DataTypes.INTEGER,
    key_broker_mqtt : DataTypes.JSON
  });
  Broker.associate = function(models) {
    Broker.hasOne(models.Device);
  };
  Broker.associate = function(models){
    Broker.hasMany(models.Registro);
  };
  return Broker;
};
 