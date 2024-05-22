const { Candle, Category } = require('../models/models');

class CandleService {
    async getAll() {
        try {
            return await Candle.findAll({
                include: [{ model: Category, attributes: ['title'] }],
            });
        } catch (e) {
            throw new Error(e);
        }
    }

    async getById(id) {
        try {
            const candle = await Candle.findOne({ where: { id: id } });
            if (!candle) {
                throw new Error('Candle not found');
            }
            return candle;
        } catch (e) {
            throw new Error(e);
        }
    }

    async create(title, price, amount, categoryId) {
        try {
            return await Candle.create({ title, price, amount, categoryId });
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new CandleService();
