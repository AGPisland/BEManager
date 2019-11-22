'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarioapi = sequelize.define('Usuarioapi', {
    name_usuario: DataTypes.TEXT,
    id_comp: DataTypes.INTEGER,
    invoice_email: DataTypes.TEXT,
    invoice_phone: DataTypes.TEXT,
    keys_json: DataTypes.JSON,
    estado_api: DataTypes.BOOLEAN
  });
  Usuarioapi.associate = function(models) {
    Usuarioapi.belongsToMany(models.Compania,{
      foreignKey: 'id_comp',
      through: 'usuarioapicompani',
      constraints: false
    });
  };
  return Usuarioapi;
};