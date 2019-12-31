const Broker = require('../models').Broker;

exports.add = (req, res)  => {
  Broker.create({
      //id_dev: req.body.id_dev,
      estado: req.body.estado,
      run_task: req.body.run_task,
      estado_task: req.body.estado_task,
      contador_task: req.body.contador_task,
      key_broker_mqtt: req.body.key_broker_mqtt
    })
    .then((broker) => {return res.status(201).send(broker)})
    .catch((error) => {return res.status(400).send(error)});

}

exports.list =  ( req, res)  => {
    Broker.findAll()
    .then((brokers) => { return res.status(200).send(brokers)})
    .catch((error) => {  console.log(error); return res.status(400).send(error); });
}


exports.getById = (req, res) => {
  Broker
    .findOne({
      where: { id: req.params.id }
    })
    .then((broker) => {
      if (!broker) {
        return res.status(404).send({
          message: 'Aporte Not Found',
        });
      }
      return res.status(200).send(broker);
    })
    .catch((error) =>{ console.log(error); return res.status(400).send(error)});
}

exports.update = (req, res) => {
  return Broker
    .findOne({
      where: { id: req.params.id },
    })
    .then(broker => {
      if (!broker) {
        return res.status(404).send({
          message: 'Aporte Not Found',
        });
      }
      return Broker
        .update({
          //id_dev: req.body.id_dev || broker.id_dev,
          estado: req.body.estado || broker.estado,
          run_task: req.body.run_task || broker.run_task,
          estado_task: req.body.estado_task || broker.estado_task,
          contador_task: req.body.contador_task || broker.contador_task,
          key_broker_mqtt: req.body.key_broker_mqtt || broker.key_broker_mqtt
        })
        .then(() => res.status(200).send(broker))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
}

exports.delete = (req, res) =>  {
  return Broker
    .destroy({
      where: { id: req.params.id },
      force: true
    })
    .then(() => res.status(204).send())
    .catch((error) => res.status(400).send(error));
}
