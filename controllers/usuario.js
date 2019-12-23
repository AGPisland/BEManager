const Usuario = require('../models').Usuario;

module.exports = {
  list(req, res) {
    return Usuario
      .findAll()
      .then((usuarios) => res.status(200).send(usuarios))
      .catch((error) => { res.status(400).send(error); });
  },
  getById(req, res) {
    return Usuario
      .findByPk(req.params.id)
      .then((usuario) => {
        if (!usuario) {
          console.log(req.params.id)
          return res.status(404).send({
            message: 'Usuario Not Found',
          });
        }
        return res.status(200).send(usuario);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Usuario
      .create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        run: req.body.run,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        administrador: req.body.administrador,
        //aportador: req.body.aportador,
        activo: req.body.activo,
      })
      .then((usuario) => res.status(201).send(usuario))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Usuario
      .findByPk(req.params.id)
      .then(usuario => {
        if (!usuario) {
          return res.status(404).send({
            message: 'Usuario Not Found',
          });
        }
        return usuario
          .update({
            nombre: req.body.nombre || usuario.nombre,
            apellido: req.body.apellido || usuario.apellido,
            run: req.body.run || usuario.run,
            username: req.body.username || usuario.username,
            password: req.body.password || usuario.password,
            email: req.body.email || usuario.email,
            administrador: req.body.administrador || usuario.administrador,
            //aportador: req.body.aportador || usuario.aportador,
            activo: req.body.activo || usuario.activo,
          })
          .then(() => res.status(200).send(usuario))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Usuario
      .findByPk(req.params.id)
      .then(usuario => {
        if (!usuario) {
          return res.status(400).send({
            message: 'Usuario Not Found',
          });
        }
        return usuario
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

};
