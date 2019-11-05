'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarioapi = sequelize.define('usuario_api', {
    name_usuario: DataTypes.TEXT,
    id_comp: DataTypes.INTEGER,
    invoice_email: DataTypes.TEXT,
    invoice_phone: DataTypes.TEXT,
    keys_json: DataTypes.JSON,
    estado_api: DataTypes.BOOLEAN
  });
  Usuarioapi.associate = function(models) {
    Usuarioapi.belongsTo(models.Compania,{
      foreignKey: 'id_comp',
      constraints: false
    });
  };
  return Usuarioapi;
};