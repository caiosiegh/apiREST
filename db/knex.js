const knex = require('knex');

const connectedKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "apiuna.sqlite3"
  }
});

module.exports = connectedKnex;