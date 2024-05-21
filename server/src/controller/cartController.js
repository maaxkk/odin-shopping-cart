const { CartItem, Candle } = require('../models/models');
const ApiError = require('../error/ApiError');
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);

class CartController {
    async add(req, res) {
        const { candleId, userId } = req.body;
        let searchCandle = await CartItem.findOne({ where: { userId, candleId } });
        if (!searchCandle) {
            const newCandle = await CartItem.create({ candleId, userId, amount: 1 });
        } else {
            searchCandle.amount++;
            searchCandle.save();
        }
        const candle = await Candle.findOne({ where: { id: candleId } });
        candle.amount = searchCandle?.amount || 1;
        return res.json(candle);
    }

    async remove(req, res) {
        const { candleId, userId } = req.body;
        let searchCandle = await CartItem.findOne({ where: { userId, candleId } });
        searchCandle.amount--;
        if (searchCandle.amount === 0) {
            await CartItem.destroy({ where: { id: searchCandle.id } });
        } else {
            searchCandle.save();
        }
        const candle = await Candle.findOne({ where: { id: candleId } });
        return res.json(candle);
    }

    async summary(req, res) {
        const { userId } = req.query;
        const cartItems = await CartItem.findAll({ where: { userId } });
        const candlesItemsIds = cartItems.map(obj => obj.candleId);
        const candlesInCart = await Candle.findAll({ where: { id: candlesItemsIds } });

        const candlesWithAmount = candlesInCart.map(candle => {
            candle.amount = 1;
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].candleId === candle.id) {
                    candle.amount = cartItems[i].amount;
                }
            }
            return candle;
        });

        const totalCount = candlesWithAmount.reduce((acc, curr) => acc + curr.amount, 0);
        const totalPrice = candlesInCart.reduce((acc, curr) => acc + curr.price * curr.amount, 0);
        return res.json({ candlesWithAmount, totalCount, totalPrice });
    }

    async clear(req, res) {
        const { userId } = req.body;
        await CartItem.destroy({ where: { userId } });
        return res.json('was deleted');
    }

    async checkout(req, res) {
        const { userId } = req.body;
        const cartItems = await CartItem.findAll({ where: { userId } });
        const candlesItemsIds = cartItems.map(obj => obj.candleId);
        const candlesInCart = await Candle.findAll({ where: { id: candlesItemsIds } });

        const candlesWithAmount = candlesInCart.map(candle => {
            let obj = {};
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].candleId === candle.id) {
                    obj['quantity'] = cartItems[i].amount;
                    obj['price_data'] = {
                        currency: 'eur',
                        product_data: { name: candle.title },
                        unit_amount: candle.price * 100,
                    };
                }
            }
            return obj;
        });
        const session = await stripe.checkout.sessions.create({
            line_items: candlesWithAmount,
            mode: 'payment',
            success_url: 'http://localhost:5173/success',
            cancel_url: 'http://localhost:5173/cart',
        });
        res.json({ url: session.url });
    }

    async getAll(req, res) {
        const candlesInCart = await CartItem.findAll();
        return res.json(candlesInCart);
    }
}

module.exports = new CartController();
