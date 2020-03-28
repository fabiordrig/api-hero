const { session } = require("../services");

const create = async (req, res) => {
  const data = req.body;

  session.create(data).then(response => {
    if (!response.error) {
      return res.status(200).send(response);
    }
    return res.status(401).send(response);
  });
};

module.exports = {
  create
};
