const { CartItem, Candle } = require('../models/models');
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);

class CartService {
    async add(candleId, userId) {
        try {
            const searchCandle = await CartItem.findOne({ where: { userId, candleId } });
            if (!searchCandle) {
                await CartItem.create({ candleId, userId, amount: 1 });
            } else {
                searchCandle.amount++;
                await searchCandle.save();
            }
            const candle = await Candle.findOne({ where: { id: candleId } });
            candle.amount = searchCandle?.amount || 1;
            return candle;
        } catch (e) {
            throw new Error(e);
        }
    }

    async remove(candleId, userId) {
        try {
            let searchCandle = await CartItem.findOne({ where: { userId, candleId } });
            searchCandle.amount--;
            if (searchCandle.amount === 0) {
                await CartItem.destroy({ where: { id: searchCandle.id } });
            } else {
                await searchCandle.save();
            }
            const candle = await Candle.findOne({ where: { id: candleId } });
            return candle;
        } catch (e) {
            throw new Error(e);
        }
    }

    async summary(userId) {
        try {
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
            return { candlesWithAmount, totalCount, totalPrice };
        } catch (e) {
            throw new Error(e);
        }
    }

    async clear(userId) {
        try {
            await CartItem.destroy({ where: { userId } });
        } catch (e) {
            throw new Error(e);
        }
    }

    async checkout(userId) {
        try {
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
            return { url: session.url };
        } catch (e) {
            throw new Error(e);
        }
    }

    async getAll() {
        try {
            return await CartItem.findAll();
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new CartService();
