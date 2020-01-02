const Registro = require('../models').Registro;

module.exports = {
  list(req, res) {
    return Registro
      .query("SELECT 1")
      .then((registros) => res.status(200).send(registros))
      .catch((error) => { res.status(400).send(error); });
  },
  getById(req, res) {
    return Registro
      .findOne({
        where: { id: req.params.id }
      })
      .then((registro) => {
        if (!registro) {
          return res.status(404).send({
            message: 'Aporte Not Found',
          });
        }
        return res.status(200).send(registro);
      })
      .catch((error) => res.status(400).send(error));
  }
}