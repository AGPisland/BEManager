'use strict';



module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.TEXT,
    apellido: DataTypes.TEXT,
    run: DataTypes.TEXT,
    username: DataTypes.TEXT,
    password: DataTypes.TEXT,
    email: DataTypes.TEXT,
    administrador: DataTypes.BOOLEAN,
    //aportador: DataTypes.BOOLEAN,
    activo: DataTypes.BOOLEAN
  });

  
  return Usuario;
};
