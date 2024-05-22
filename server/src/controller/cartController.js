const ApiError = require('../error/ApiError');
const CartService = require('../service/CartService');
const { validationResult } = require('express-validator');

class CartController {
    async add(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest(errors.array()[0].msg));
        }
        try {
            const { candleId, userId } = req.body;
            const candle = await CartService.add(candleId, userId);
            return res.json(candle);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }

    async remove(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest(errors.array()[0].msg));
        }
        try {
            const { candleId, userId } = req.body;
            const candle = await CartService.remove(candleId, userId);
            return res.json(candle);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }

    async summary(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest(errors.array()[0].msg));
        }
        try {
            const { userId } = req.query;
            const { candlesWithAmount, totalCount, totalPrice } = await CartService.summary(userId);
            return res.json({ candlesWithAmount, totalCount, totalPrice });
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }

    async clear(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest(errors.array()[0].msg));
        }
        try {
            const { userId } = req.body;
            await CartService.clear(userId);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }

    async checkout(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest(errors.array()[0].msg));
        }
        try {
            const { userId } = req.body;
            const sessionURL = await CartService.checkout(userId);
            return res.json(sessionURL);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest(errors.array()[0].msg));
        }
        try {
            const candlesInCart = await CartService.getAll();
            return res.json(candlesInCart);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new CartController();
