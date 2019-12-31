//const Aporte = require('../models').Aporte;
//const Curso = require('../models').Curso;

const API = require('../models').Usuarioapi;

module.exports = {
  list(req, res) {
    return API
      .findAll()
      .then((usuarioapi) => res.status(200).send(usuarioapi))
      .catch((error) => { res.status(400).send(error); });
  },
  add(req, res) {
    return API
      .create({
        name_usuario: req.body.name_usuario,
        id_comp: req.body.id_comp,
        invoice_email: req.body.invoice_email,
        invoice_phone: req.body.invoice_phone,
        keys_json: req.body.keys_json,
        estado_api: req.body.estado_api,
      })
      .then((usuarioapi) => res.status(201).send(usuarioapi))
      .catch((error) => { 
        console.log("el errorsito", error); 
        res.status(400).send(error);
      });
  },
  getById(req, res) {
    return API
      .findOne({
        where: { id: req.params.id }
      })
      .then((usuarioapi) => {
        if (!usuarioapi) {
          return res.status(404).send({
            message: 'Aporte Not Found',
          });
        }
        return res.status(200).send(usuarioapi);
      })
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return API
      .findOne({
        where: { id: req.params.id },
      })
      .then(usuarioapi => {
        if (!usuarioapi) {
          return res.status(404).send({
            message: 'Aporte Not Found',
          });
        }
        return usuarioapi
          .update({
            name_usuario: req.body.nombre_usuario || usuarioapi.nombre_usuario,
            id_comp: req.body.id_comp || usuarioapi.id_comp,
            invoice_email: req.body.invoice_email || usuarioapi.invoice_email,
            invoice_phone: req.body.invoice_phone || usuarioapi.invoice_phone,
            keys_json: req.body.keys_json || usuarioapi.keys_json,
            estado_api: req.body.estado_api || usuarioapi.estado_api,
          })
          .then(() => res.status(200).send(usuarioapi))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return API
      .destroy({
        where: { id: req.params.id },
        force: true
      })
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
  }
};
