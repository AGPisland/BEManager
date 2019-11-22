'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registro = sequelize.define('Registro', {
    id_broker: DataTypes.INTEGER,
    timer: DataTypes.JSON,
    metadata: DataTypes.JSON,
    datasensado: DataTypes.JSON 
  });
  Registro.associate = function(models) {
    Registro.belongsToMany(models.Broker,{
      foreignKey: 'id_broker',
      through: 'brokerregistro',
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