//const Aporte = require('../models').Aporte;
//const Curso = require('../models').Curso;

const Compania = require('../models').Compania;

module.exports = {
  list(req, res) {
    return Compania
      .findAll()
      .then((compania) => res.status(200).send(compania))
      .catch((error) => { res.status(400).send(error); });
  },
  add(req, res) {
    return Compania
      .create({
        rut_empresa: req.body.rut_empresa,
        name: req.body.name,
        nombre_representante: req.body.nombre_representante,
        invoice_address: req.body.invoice_address,
        invoice_email: req.body.invoice_email,
        invoice_phone: req.body.invoice_phone,
      })
      .then((compania) => res.status(201).send(compania))
      .catch((error) => { console.log(error);
        res.status(400).send(error);});
  },
  getById(req, res) {
    return Compania
      .findOne({
        where: { id: req.params.id }
      })
      .then((compania) => {
        if (!compania) {
          return res.status(404).send({
            message: 'Aporte Not Found',
          });
        }
        return res.status(200).send(compania);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return Compania
      .findOne({
        where: { id: req.params.id },
      })
      .then(compania => {
        if (!compania) {
          return res.status(404).send({
            message: 'Aporte Not Found',
          });
        }
        return compania
          .update({
            rut_empresa: req.body.rut_empresa || compania.rut_empresa,
            name: req.body.name || compania.name,
            nombre_representante: req.body.nombre_representante || compania.nombre_representante,
            invoice_address: req.body.invoice_address || compania.invoice_address,
            invoice_email: req.body.invoice_email || compania.invoice_email,
            invoice_phone: req.body.invoice_phone || compania.invoice_phone,
          })
          .then(() => res.status(200).send(compania))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return Compania
      .destroy({
        where: { id: req.params.id },
        force: true
      })
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
  }
};
