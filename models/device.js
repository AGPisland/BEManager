'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('Device', {
    device_name: DataTypes.TEXT,
    id_comp: DataTypes.INTEGER,
    id_brok: DataTypes.INTEGER,
    device_autor: DataTypes.TEXT,
    device_type: DataTypes.TEXT,
    device_model: DataTypes.TEXT,
    device_version_hardware: DataTypes.TEXT,
    device_chip_imei: DataTypes.TEXT,
    device_chip_iddi: DataTypes.TEXT
  });
  Device.associate = function (models) {
    Device.belongsToMany(models.Compania, {
      foreignKey: 'id_comp',
      through: 'companiadevice',
      constraints: false
    });
    Device.hasOne(models.Broker, {
      foreignKey: 'id_brok',
      constraints: false
    });
  
  };
  
  return Device;
};


/* tablas: usuario, broker, registros, device, compania, usuarioapi

4- UN DEVICE TIENE SOLO 1 BROKER. -> Un curso tiene un profesor y un profesor enseña un curso
5- UN BROKER TIENE N REGISTROS, Y UN REGISTRO TIENE SOLO UN BROKER  ->Un aula tiene muchos alumnos y un alumno tiene un aula 



listo:
2- UNA COMPANIA TIENE N DEVICES, Y UN DEVICE TIENE SOLO UNA COMPANIA  ->Un aula tiene muchos alumnos y un alumno tiene un aula 
3- UNA COMPANIA TIENE N USUARIOSAPI Y UN USUARIO API TIENE SOLO UNA COMPANIA  ->Un aula tiene muchos alumnos y un alumno tiene un aula 
*/