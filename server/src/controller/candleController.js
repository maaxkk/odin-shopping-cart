const { Candle } = require('../models/models');
const ApiError = require('../error/ApiError');

class CandleController {
    async create(req, res) {
        const { title, categoryId, price, imgSrc, amount } = req.body;
        const candle = await Candle.create({ title, categoryId, price, imgSrc, amount });
        return res.json(candle);
    }

    async getAll(req, res) {
        const candles = await Candle.findAll();
        return res.json(candles);
    }
}

module.exports = new CandleController();
