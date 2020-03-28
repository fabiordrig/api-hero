const { incidents } = require("../services");

const create = async (req, res) => {
  let data = req.body;
  const ong_id = req.headers.authorization;

  return incidents
    .create(data, ong_id)
    .then(id => res.status(201).send({ id }))
    .catch(error => res.status(500).send(error));
};
const index = async (req, res) => {
  const { page = 1 } = req.query;
  incidents
    .index(page)
    .then(incidentsArray => {
      res.header("X-Total-Count", incidentsArray.count["count(*)"]);
      return res.status(201).send(incidentsArray.incidents);
    })
    .catch(error => res.status(500).send(error));
};

const getIncidentsByOng = async (req, res) => {
  const { id } = req.params;
  incidents
    .getIncidentsByOng(id)
    .then(incidentsArray => res.status(201).send(incidentsArray))
    .catch(error => res.status(500).send(error));
};
const del = async (req, res) => {
  const { id } = req.params;
  const ong_id = req.headers.authorization;

  incidents.del(id, ong_id).then(response => {
    if (!response.error) {
      return res.status(204).send({ message: "OK" });
    }
    return res.status(401).send(response);
  });
};

module.exports = {
  create,
  index,
  del,
  getIncidentsByOng
};
