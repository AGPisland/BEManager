const Device = require('../models').Device;

module.exports = {
  list(req, res) {
    return Device
      .findAll()
      .then((devices) => res.status(200).send(devices))
      .catch((error) => { res.status(400).send(error); });
  },
  add(req, res) {
    return Device
      .create({
        device_name: req.body.device_name,
        id_comp: req.body.id_comp,
        id_brok: req.body.id_brok,
        device_autor: req.body.device_autor,
        device_type: req.body.device_type,
        device_model: req.body.device_model,
        device_version_hardware: req.body.device_version_hardware,
        device_chip_imei: req.body.device_chip_imei,
        device_chip_iddi: req.body.device_chip_iddi,
      })
      .then((device) => res.status(201).send(device))
      .catch((error) => res.status(400).send(error));
  },
  getById(req, res) {
    return Device
      .findOne({
        where: { id: req.params.id }
      })
      .then((device) => {
        if (!device) {
          return res.status(404).send({
            message: 'Aporte Not Found',
          });
        }
        return res.status(200).send(device);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return Device
      .findOne({
        where: { id: req.params.id },
      })
      .then(device => {
        if (!device) {
          return res.status(404).send({
            message: 'DEVICES Not Found',
          });
        }
        return device
          .update({
            device_name: req.body.device_name || device.device_name,
            id_comp: req.body.id_comp || device.id_comp,
            id_brok: req.body.id_brok || device.id_brok,
            device_autor: req.body.device_autor || device.device_autor,
            device_type: req.body.device_type || device.device_type,
            device_model: req.body.device_model || device.device_model,
            device_version_hardware: req.body.device_version_hardware || device.device_version_hardware,
            device_chip_imei: req.body.device_chip_imei || device.device_chip_imei,
            device_chip_iddi: req.body.device_chip_iddi || device.device_chip_iddi,
          })
          .then(() => res.status(200).send(device))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return Device
      .destroy({
        where: { id: req.params.id },
        force: true
      })
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
  }
};