'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('device', {
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
    Device.belongsTo(models.Compania, {
      foreignKey: 'id_comp',
      constraints: false
    });
  };
  Device.associate = function (models) {
    Device.hasOne(models.Broker, {
      foreignKey: 'id_brok',
      constraints: false
    });
  };
  return Device;
};
