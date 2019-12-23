'use strict';
module.exports = (sequelize, DataTypes) => {
  const Compania = sequelize.define('Compania', {
    rut_empresa: DataTypes.TEXT,
    name: DataTypes.TEXT,
    nombre_representante: DataTypes.TEXT,
    invoice_address: DataTypes.TEXT,
    invoice_email: DataTypes.TEXT,
    invoice_phone: DataTypes.TEXT
  }); 
  Compania.associate = function (models) {
    Compania.hasMany(models.Usuarioapi, {
      foreignKey: "id"
    });
    Compania.hasMany(models.Device, {
      foreignKey: "id_comp"
    });
  };

  return Compania;
};


/*
	Name            string
	Invoice_address string
	Invoice_email   string
	Invoice_phone   int64
	User_Api        string
	Keys_json       postgres.Jsonb
	Estado_Api      bool
*/