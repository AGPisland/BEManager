let express = require('express');
let router = express.Router();
let parseToken = require("./middlewares/token");

//Rutas a los controladores personalizados

const usuarioController = require('../controllers').usuario;

router.get('/api/usuarios', usuarioController.list);
router.get('/api/usuarios/:id', usuarioController.getById);
router.post('/api/usuarios', usuarioController.add);
router.put('/api/usuarios/:id', usuarioController.update);
router.delete('/api/usuarios/:id', usuarioController.delete);

const clienteController = require('../controllers').cliente;

router.get('/api/clientes', clienteController.list);
router.get('/api/clientes/:id', clienteController.getById);
router.post('/api/clientes', clienteController.add);
router.put('/api/clientes/:id', clienteController.update);
router.delete('/api/clientes/:id', clienteController.delete);

const brokerController = require('../controllers').broker;
router.get('/api/brokers', brokerController.list);
router.get('/api/brokers/:id', brokerController.getById);
router.post('/api/brokers', brokerController.add);
router.put('/api/brokers/:id', brokerController.update);
router.delete('/api/brokers/:id',brokerController.delete);

const registroController = require('../controllers').registro;
router.get('/api/registros', registroController.list);
router.get('/api/registros/:id', registroController.getById);

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
