const crypto = require("crypto");

const connection = require("../database/connection");

const create = async data => {
  const { name, email, whatsapp, city, uf } = data;
  const id = crypto.randomBytes(4).toString("HEX");
  await connection("ongs").insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });

  return id;
};

const index = () => {
  const ongs = connection("ongs").select("*");

  return ongs;
};

module.exports = {
  create,
  index
};
