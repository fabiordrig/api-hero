const connection = require("../database/connection");
const { promises } = require("../utils");

const create = async data => {
  const { id } = data;
  const ong = await connection("ongs")
    .where("id", id)
    .select("name")
    .first();

  if (!ong) {
    return promises.promiseError("USER_NOT_FOUND");
  }

  return ong;
};

module.exports = {
  create
};
