const { ongs } = require("../services");

const create = async (req, res) => {
  const data = req.body;

  ongs
    .create(data)
    .then(id => res.status(201).send({ id }))
    .catch(error => res.status(500).send(error));
};

const index = async (req, res) => {
  ongs
    .index()
    .then(ongsArray => res.status(201).send(ongsArray))
    .catch(error => res.status(500).send(error));
};

module.exports = {
  create,
  index
};
