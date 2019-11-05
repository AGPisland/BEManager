let jwt = require("jsonwebtoken");
let models = require("./../../models");
let bcrypt = require("bcrypt");

function LoginFunction(req, res, next) {
  let {username, password} = req.body;
  return models.Usuario.findOne({
    where: {username: username}
  })
    .then(usuario => {
      if (!usuario)
        // Si no existe usuario
        return res.status(401).send({
          status: "fail",
          messages: ["Datos ingresados incorrectos."]
        });
      // Parseo de datos de usuario para el token.
      usuario = usuario.dataValues;
      userData = {
        id: usuario.id,
        name: `${usuario.nombre} ${usuario.apellido}`,
        run: usuario.run,
        administrador: usuario.administrador,
        aportador: usuario.aportador,
      };
    
      // Verificar contraseña
      //bcrypt.compareSync(password, usuario.password)
      if (password == usuario.password) {
        let token = jwt.sign(userData, "secret_key", {expiresIn: "12h"});
        return res.send({
          messages: "Autenticación exitosa",
          status: "success",
          token: token
        });
      } else {
        return res.status(401).send({
          status: "fail",
          messages: ["Datos ingresados incorrectos."]
        });
      }
    })
    .catch(err => console.log(err));
}

module.exports = LoginFunction;