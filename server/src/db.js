const Pool = require("pg").Pool;

const pool = new Pool({
  user: "maaxkk",
  host: "localhost",
  database: "candles",
  password: "1",
  port: 5432,
});

module.exports = pool;
