const Broker = require('../models').Broker;

module.exports={
    list(req, res) {
        return Broker
          .findAll()
          .then((brokers) => res.status(200).send(brokers))
          .catch((error) => { res.status(400).send(error); });
      },
      add(req, res) {
        return Broker
          .create({          
            id_dev : req.body.id_dev,
            estado : req.body.estado,
            run_task : req.body.run_task,
            estado_task : req.body.estado_task,
            contador_task : req.body.contador_task,
            key_broker_mqtt : req.body.key_broker_mqtt
          })
          .then((broker) => res.status(201).send(broker))
          .catch((error) => res.status(400).send(error));
      },
      getById(req, res) {
        return Broker
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
          .catch((error) => res.status(400).send(error));
      },
      update(req, res) {
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
                id_dev : req.body.id_dev || broker.id_dev,
                estado : req.body.estado || broker.estado,
                run_task : req.body.run_task || broker.run_task,
                estado_task : req.body.estado_task || broker.estado_task,
                contador_task : req.body.contador_task || broker.contador_task,
                key_broker_mqtt : req.body.key_broker_mqtt || broker.key_broker_mqtt
              })
              .then(() => res.status(200).send(broker))
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },
      delete(req, res) {
        return Broker
          .destroy({
            where: { id: req.params.id },
            force: true
          })
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      }
}