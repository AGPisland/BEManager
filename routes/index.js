let express = require('express');
let router = express.Router();
let parseToken = require("./middlewares/token"); 

//Rutas a los controladores personalizados

const   usuarioController = require('../controllers').usuario;

router.get('/api/usuarios', usuarioController.list);
router.get('/api/usuarios/:id', usuarioController.getById);
router.post('/api/usuarios', usuarioController.add);
router.put('/api/usuarios/:id', usuarioController.update);
router.delete('/api/usuarios/:id', usuarioController.delete);

const usuarioapiController = require('../controllers').usuarioapi;

router.get('/api/usuarioapi', usuarioapiController.list);
router.get('/api/usuarioapi/:id', usuarioapiController.getById);
router.post('/api/usuarioapi', usuarioapiController.add);
router.put('/api/usuarioapi/:id', usuarioapiController.update);
router.delete('/api/usuarioapi/:id', usuarioapiController.delete);

const companiaController = require('../controllers').compania;

router.get('/api/compania', companiaController.list);
router.get('/api/compania/:id', companiaController.getById);
router.post('/api/compania', companiaController.add);
router.put('/api/compania/:id', companiaController.update);
router.delete('/api/compania/:id', companiaController.delete);
console.log("dead")
const brokerController = require('../controllers/broker');
console.log("no dead")
router.get('/api/brokers', brokerController.list);
router.get('/api/brokers/:id', brokerController.getById);
router.post('/api/brokers', brokerController.add);
router.put('/api/brokers/:id', brokerController.update);
router.delete('/api/brokers/:id',brokerController.delete);
console.log("no dead")
const registroController = require('../controllers').registro;
console.log("no dead")
router.get('/api/registros', registroController.list);
router.get('/api/registros/:id', registroController.getById);
console.log("no dead")
const deviceController = require('../controllers').device;
router.get('/api/devices/', deviceController.list);
router.get('/api/devices/:id', deviceController.getById);
router.post('/api/devices', deviceController.add);
router.put('/api/devices/:id',deviceController.update);
router.delete('/api/devices/:id', deviceController.delete);

const LoginFunction = require("./auth/login");
router.post("/api/login", LoginFunction);


const LogOutFunction = require("./auth/logout");
router.post("/logout", parseToken, LogOutFunction);

/*
const usuario_cursoController = require('../controllers').usuario_curso;
router.get('/api/usuario_curso/:id', usuario_cursoController.getById);

const aportes_del_cursoController = require('../controllers').aportes_del_curso;
router.get('/api/aportes_del_curso/:id', aportes_del_cursoController.getById);

*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
