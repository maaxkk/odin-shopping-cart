const pool = require("./db");
const queries = require("./queries");
const getCandles = (req, res) => {
  pool.query(queries.getCandles, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getCandleById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getCandleById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getCandles,
  getCandleById,
};
