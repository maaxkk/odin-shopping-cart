const getCandles = "SELECT * FROM candleShop";
const getCandleById = "SELECT * FROM candleShop WHERE id = $1";

module.exports = {
  getCandles,
  getCandleById,
};
