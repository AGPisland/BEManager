'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registro = sequelize.define('registro', {
    id_broker: DataTypes.INTEGER,
    timer: DataTypes.JSON,
    metadata: DataTypes.JSON,
    datasensado: DataTypes.JSON 
  });
  Registro.associate = function(models) {
    Registro.belongsTo(models.Broker,{
      foreignKey: 'id_broker',
      constraints: false
    });
  };
  return Registro;
};


/*
	Id_broker   uint `sql:"type:int REFERENCES brokers(id)" `
	Metadata    postgres.Jsonb
	Datasensado postgres.Jsonb
	Timer       postgres.Jsonb

*/