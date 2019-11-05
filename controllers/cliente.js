//const Aporte = require('../models').Aporte;
//const Curso = require('../models').Curso;

const Cliente = require('../models').Cliente;

module.exports = {
  list(req, res) {
    return Cliente
      .findAll()
      .then((clientes) => res.status(200).send(clientes))
      .catch((error) => { res.status(400).send(error); });
  },
  add(req, res) {
    return Cliente
      .create({
        name: req.body.name,
        nombre_representante: req.body.nombre_representante,
        invoice_address: req.body.invoice_address,
        invoice_email: req.body.invoice_email,
        invoice_phone: req.body.invoice_phone,
        user_api: req.body.user_api,
        keys_json: req.body.keys_json,
        estado_api: req.body.estado_api,
      })
      .then((cliente) => res.status(201).send(cliente))
      .catch((error) => res.status(400).send(error));
  },
  getById(req, res) {
    return Cliente
      .findOne({
        where: { id: req.params.id }
      })
      .then((cliente) => {
        if (!cliente) {
          return res.status(404).send({
            message: 'Aporte Not Found',
          });
        }
        return res.status(200).send(cliente);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return Cliente
      .findOne({
        where: { id: req.params.id },
      })
      .then(cliente => {
        if (!cliente) {
          return res.status(404).send({
            message: 'Aporte Not Found',
          });
        }
        return cliente
          .update({
            name: req.body.name || cliente.name,
            nombre_representante: req.body.nombre_representante || cliente.nombre_representante,
            invoice_address: req.body.invoice_address || cliente.invoice_address,
            invoice_email: req.body.invoice_email || cliente.invoice_email,
            invoice_phone: req.body.invoice_phone || cliente.invoice_phone,
            user_api: req.body.user_api || cliente.user_api,
            keys_json: req.body.keys_json || cliente.keys_json,
            estado_api: req.body.estado_api || cliente.estado_api,
          })
          .then(() => res.status(200).send(cliente))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return Cliente
      .destroy({
        where: { id: req.params.id },
        force: true
      })
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
  }
};
