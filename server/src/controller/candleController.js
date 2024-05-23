const ApiError = require('../error/ApiError');
const CandleService = require('../service/CandleService');
const { validationResult } = require('express-validator');

class CandleController {
    async create(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest(errors.array()[0].msg));
        }
        try {
            const { title, categoryId, price, amount } = req.body;
            const candle = await CandleService.create(title, price, amount, categoryId);
            return res.json(candle);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const candles = await CandleService.getAll();
            return res.json(candles);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }

    async getById(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest(errors.array()[0].msg));
        }
        try {
            const { id } = req.params;
            const candle = await CandleService.getById(id);
            return res.json(candle);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new CandleController();
