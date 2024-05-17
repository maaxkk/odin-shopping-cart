const { CartItem, Candle } = require('../models/models');
const ApiError = require('../error/ApiError');

class CartController {
    async add(req, res) {
        const { candleId, userId } = req.body;
        let searchCandle = await CartItem.findOne({ where: { userId, candleId } });
        if (!searchCandle) {
            const newCandle = await CartItem.create({ candleId, userId, amount: 1 });
        } else {
             searchCandle.amount++;
        }
        const candle = await Candle.findOne({ where: { id: candleId } });
        candle.amount = searchCandle.amount || 1;
        return res.json(candle);
    }

    async summary(req, res) {
        const { userId } = req.query;
        const cartItems = await CartItem.findAll({ where: { userId } });
        const candlesItemsIds = cartItems.map(obj => obj.id);
        const candlesInCart = await Candle.findAll({ where: { id: candlesItemsIds } });

        console.log(cartItems);

        const totalCount = candlesInCart.length;
        const totalPrice = candlesInCart
            .reduce((acc, curr) => acc + curr.price, 0);
        return res.json({ candlesInCart, totalCount, totalPrice });
    }

    async getAll(req, res) {
        const candlesInCart = await CartItem.findAll();
        return res.json(candlesInCart);
    }
}

module.exports = new CartController();
