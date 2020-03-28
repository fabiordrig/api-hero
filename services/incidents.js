const connection = require("../database/connection");
const { promises } = require("../utils");

const create = async (data, ong_id) => {
  const { title, description, value } = data;

  const [id] = await connection("incidents").insert({
    title,
    description,
    value,
    ong_id
  });

  return id;
};

const index = async page => {
  const [count] = await connection("incidents").count();

  const incidents = await connection("incidents")
    .join("ongs", "ongs.id", "=", "incidents.ong_id")
    .limit(5)
    .offset((page - 1) * 5)
    .select([
      "incidents.*",
      "ongs.name",
      "ongs.email",
      "ongs.whatsapp",
      "ongs.city",
      "ongs.uf"
    ]);

  return { incidents, count };
};

const getIncidentsByOng = async ong_id => {
  const incidents = await connection("incidents")
    .where("ong_id", ong_id)
    .select("*");

  return incidents;
};

const del = async (id, ong_id) => {
  const incidents = await connection("incidents")
    .where("id", id)
    .select("ong_id")
    .first();

  if (incidents.ong_id !== ong_id || !incidents) {
    return promises.promiseError("NOT_AUTHORIZED");
  }

  return await connection("incidents")
    .where("id", id)
    .delete();
};

module.exports = {
  create,
  index,
  del,
  getIncidentsByOng
};
